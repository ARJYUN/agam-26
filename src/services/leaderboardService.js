import { departmentStandings as defaultStandings } from '../data/festData';

// Known department code to full name mapping
export const DEPARTMENT_NAME_MAP = {
  'CSE': 'Computer Science & Engineering',
  'ECE': 'Electronics & Communication',
  'ME': 'Mechanical Engineering',
  'CE': 'Civil Engineering',
  'EE': 'Electrical Engineering',
  'IC': 'Instrumentation & Control Engineering',
  'AIDS': 'Artificial Intelligence & Data Science',
  'AI': 'Artificial Intelligence',
  'MCA': 'Master of Computer Applications',
  'ARCH': 'Architecture & Design',
  'CHE': 'Chemical Engineering',
  'BT': 'Biotechnology'
};

/**
 * Resolves a Google Sheets URL or ID to a direct CSV export endpoint.
 */
export function getGoogleSheetCsvUrl(sheetIdOrUrl, sheetName = '') {
  if (!sheetIdOrUrl || typeof sheetIdOrUrl !== 'string') return '';
  const trimmed = sheetIdOrUrl.trim();

  // If already a published CSV or Apps Script URL, return as-is
  if (trimmed.includes('output=csv') || trimmed.includes('script.google.com') || trimmed.includes('tqx=out:csv')) {
    return trimmed;
  }

  // Extract Sheet ID from standard sharing or viewing URLs:
  // e.g. https://docs.google.com/spreadsheets/d/1BxiMVs.../edit?usp=sharing
  const match = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  const sheetId = match ? match[1] : trimmed;

  const sheetParam = sheetName ? `&sheet=${encodeURIComponent(sheetName)}` : '';
  // Use Google Visualization API CSV export which works reliably when sheet is shared to "Anyone with link can view"
  return `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv${sheetParam}`;
}

/**
 * Robust zero-dependency CSV parser handling quoted fields, commas, and multiline values.
 */
export function parseCSV(text) {
  if (!text) return [];
  const lines = [];
  let row = [''];
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        row[row.length - 1] += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      row.push('');
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      lines.push(row.map(cell => cell.trim()));
      row = [''];
    } else {
      row[row.length - 1] += char;
    }
  }

  if (row.length > 1 || (row.length === 1 && row[0] !== '')) {
    lines.push(row.map(cell => cell.trim()));
  }

  // Filter out blank rows
  return lines.filter(r => r.some(cell => cell !== ''));
}

/**
 * Normalizes rows parsed from the Google Sheet into structured Department Standing objects.
 */
export function processSheetData(csvRows) {
  if (!csvRows || csvRows.length < 2) return [];

  // Header row normalization
  const headerRow = csvRows[0].map(h => h.toLowerCase().replace(/[^a-z0-9]/g, ''));
  
  // Find column indices by flexible header names
  const deptCol = headerRow.findIndex(h => ['dept', 'code', 'department', 'branch', 'deptcode'].includes(h));
  const nameCol = headerRow.findIndex(h => ['name', 'deptname', 'departmentname', 'fullname'].includes(h));
  const pointsCol = headerRow.findIndex(h => ['points', 'score', 'pts', 'totalpoints', 'total'].includes(h));
  const trendCol = headerRow.findIndex(h => ['trend', 'status', 'movement'].includes(h));
  const partCol = headerRow.findIndex(h => ['participations', 'events', 'participation', 'matches'].includes(h));

  // If no recognizable points column, default to last or second column
  const effectiveDeptCol = deptCol !== -1 ? deptCol : 0;
  const effectivePointsCol = pointsCol !== -1 ? pointsCol : (csvRows[0].length > 1 ? 1 : -1);

  const dataRows = csvRows.slice(1);
  const parsedDepartments = [];

  for (const row of dataRows) {
    const rawDept = row[effectiveDeptCol] || '';
    if (!rawDept) continue;

    const deptUpper = rawDept.toUpperCase().trim();
    
    // Parse points (strip non-numeric except minus)
    const rawPoints = effectivePointsCol !== -1 ? (row[effectivePointsCol] || '0') : '0';
    const cleanPointsStr = String(rawPoints).replace(/[^0-9-]/g, '');
    const points = cleanPointsStr ? parseInt(cleanPointsStr, 10) : 0;

    // Name resolution
    let name = nameCol !== -1 && row[nameCol] ? row[nameCol] : (DEPARTMENT_NAME_MAP[deptUpper] || rawDept);

    // Trend resolution
    let trend = 'stable';
    if (trendCol !== -1 && row[trendCol]) {
      const rawTrend = row[trendCol].toLowerCase().trim();
      if (rawTrend.includes('up') || rawTrend === '+') trend = 'up';
      else if (rawTrend.includes('down') || rawTrend === '-') trend = 'down';
      else trend = 'stable';
    }

    // Participations resolution
    let participations = 0;
    if (partCol !== -1 && row[partCol]) {
      const pStr = String(row[partCol]).replace(/[^0-9]/g, '');
      if (pStr) participations = parseInt(pStr, 10);
    }

    parsedDepartments.push({
      dept: deptUpper,
      name,
      points,
      trend,
      participations,
      breakdown: []
    });
  }

  // Sort descending by points
  parsedDepartments.sort((a, b) => b.points - a.points);

  // Assign formatted rank ('01', '02', '03'...)
  return parsedDepartments.map((dept, idx) => ({
    ...dept,
    rank: String(idx + 1).padStart(2, '0')
  }));
}

const STORAGE_CACHE_KEY = 'agam_leaderboard_data_cache';
const STORAGE_TIME_KEY = 'agam_leaderboard_last_updated';

/**
 * Fetches leaderboard data from the configured Google Sheet, with localStorage fallback.
 */
export async function fetchLeaderboardData(sheetUrlOrId, sheetName = '') {
  const url = getGoogleSheetCsvUrl(sheetUrlOrId, sheetName);
  
  if (!url) {
    // No sheet URL configured yet, return default data
    return {
      data: defaultStandings,
      isLive: false,
      lastUpdated: null,
      error: null
    };
  }

  try {
    const response = await fetch(url, {
      cache: 'no-cache', // Ensure fresh data on each fetch
      headers: {
        'Accept': 'text/csv, text/plain, */*'
      }
    });

    if (!response.ok) {
      throw new Error(`Google Sheets responded with status ${response.status}`);
    }

    const csvText = await response.text();
    const rows = parseCSV(csvText);
    const standings = processSheetData(rows);

    if (!standings || standings.length === 0) {
      throw new Error('No valid department data found in the spreadsheet');
    }

    const now = new Date();
    // Cache successful data
    try {
      localStorage.setItem(STORAGE_CACHE_KEY, JSON.stringify(standings));
      localStorage.setItem(STORAGE_TIME_KEY, now.toISOString());
    } catch {
      // Ignore localStorage errors
    }

    return {
      data: standings,
      isLive: true,
      lastUpdated: now,
      error: null
    };
  } catch (err) {
    console.warn('Could not fetch latest Google Sheet leaderboard:', err.message);
    
    // Check localStorage cache
    try {
      const cached = localStorage.getItem(STORAGE_CACHE_KEY);
      const cachedTime = localStorage.getItem(STORAGE_TIME_KEY);
      if (cached) {
        return {
          data: JSON.parse(cached),
          isLive: false,
          lastUpdated: cachedTime ? new Date(cachedTime) : null,
          error: err.message
        };
      }
    } catch {
      // Ignore cache parse errors
    }

    // Ultimate fallback: festData.js defaultStandings
    return {
      data: defaultStandings,
      isLive: false,
      lastUpdated: null,
      error: err.message
    };
  }
}

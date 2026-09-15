/**
 * Leaderboard Google Sheet Configuration
 * 
 * Instructions:
 * 1. Create a Google Sheet with the following column headers in Row 1:
 *    Department | Name | Points
 *    (Optional columns: Trend, Participations)
 * 
 * 2. Share the Google Sheet:
 *    - Option A (Recommended): In Google Sheets, click "Share" -> change General access to "Anyone with the link" -> "Viewer".
 *    - Option B: Go to File -> Share -> "Publish to web" -> Choose "Comma-separated values (.csv)" -> Click "Publish".
 * 
 * 3. Copy the URL from your browser address bar (or the published link) and paste it below into `sheetUrlOrId`.
 */

export const LEADERBOARD_CONFIG = {
  // Paste your Google Sheet URL or Sheet ID here:
  // Example: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing'
  sheetUrlOrId: 'https://docs.google.com/spreadsheets/d/1ZMo-yov5sKHoT27B5aSSJdiM9RtUwjRCvVE-KCK3kvY/edit?usp=sharing',

  // Auto-refresh interval in milliseconds (default: 30000 = 30 seconds, set to 0 to disable)
  refreshInterval: 30000,
};

# Connecting Google Sheets to the Leaderboard

Your Leaderboard is now set up to automatically sync live standings and points directly from a Google Sheet!

---

## Step 1: Create Your Google Sheet

1. Open [Google Sheets](https://sheets.new) and create a new spreadsheet.
2. In the first row (Row 1), add the following column headers:

| Department | Name | Points | Trend |
| :--- | :--- | :--- | :--- |
| CSE | Computer Science & Engineering | 140 | up |
| ME | Mechanical Engineering | 125 | up |
| ECE | Electronics & Communication | 110 | down |
| CE | Civil Engineering | 95 | stable |
| EE | Electrical Engineering | 80 | stable |
| IC | Instrumentation & Control Engineering | 65 | down |

> **Notes:**
> - `Department` and `Points` are the only mandatory columns.
> - `Name` is optional (the website will automatically supply the full official name if you only specify the department code like `CSE`, `ECE`, `ME`, `CE`, `EE`, `IC`, `AIDS`, `AI`, `MCA`, etc.).
> - `Trend` is optional (`up`, `down`, or `stable`).
> - Ranks (`01`, `02`, `03`...) and podium ordering (1st Gold, 2nd Silver, 3rd Bronze) are **automatically sorted and assigned** based on highest to lowest points!

---

## Step 2: Make the Sheet Publicly Readable

1. In your Google Sheet, click the green **Share** button in the top-right corner.
2. Under **General access**, change from *Restricted* to **"Anyone with the link"**.
3. Keep the role as **Viewer**.
4. Click **Copy link** and click **Done**.

*(Alternatively, you can go to `File` > `Share` > `Publish to web` > choose `Comma-separated values (.csv)` and copy the published link).*

---

## Step 3: Connect It to the App

Open [leaderboardConfig.js](file:///c:/Users/arjun/OneDrive/Desktop/agam%20light/src/config/leaderboardConfig.js) and paste your Google Sheet link:

```javascript
export const LEADERBOARD_CONFIG = {
  // Paste your Google Sheet URL here:
  sheetUrlOrId: 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit?usp=sharing',

  // Optional: tab name if you have multiple tabs
  sheetName: '',

  // Polling interval in ms (default: 30000 = 30 seconds)
  refreshInterval: 30000,
};
```

*Tip: You can also define it in your `.env` file:*
```env
VITE_LEADERBOARD_SHEET_URL="https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit?usp=sharing"
```

---

## Features Included
- **Zero Backend Required**: Directly reads from Google Sheets using Google's CSV export API.
- **Dynamic Sorting & Podiums**: Automatically sorts the highest scores to 1st (Gold), 2nd (Silver), 3rd (Bronze), and ranks 4+ into the sidebar.
- **Auto-Sync**: Automatically checks for score updates every 30 seconds (configurable).
- **Manual Refresh**: Organizers or attendees can click the refresh button on the leaderboard to fetch instant score updates.
- **Offline / Fallback Support**: If the sheet is temporarily unreachable or not yet configured, the leaderboard displays the default standings smoothly without crashing.

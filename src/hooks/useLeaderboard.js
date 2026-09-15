import { useState, useEffect, useCallback, useRef } from 'react';
import { LEADERBOARD_CONFIG } from '../config/leaderboardConfig';
import { fetchLeaderboardData } from '../services/leaderboardService';
import { departmentStandings as defaultStandings } from '../data/festData';

export function useLeaderboard() {
  const [standings, setStandings] = useState(defaultStandings);
  const [isLoading, setIsLoading] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState(null);

  const isMountedRef = useRef(true);

  const loadData = useCallback(async (showLoader = false) => {
    if (showLoader) setIsLoading(true);

    try {
      const result = await fetchLeaderboardData(
        LEADERBOARD_CONFIG.sheetUrlOrId,
        LEADERBOARD_CONFIG.sheetName
      );

      if (isMountedRef.current) {
        if (result.data && result.data.length > 0) {
          setStandings(result.data);
        }
        setIsLive(result.isLive);
        setLastUpdated(result.lastUpdated);
        setError(result.error);
      }
    } catch (err) {
      if (isMountedRef.current) {
        setError(err.message);
      }
    } finally {
      if (isMountedRef.current && showLoader) {
        setIsLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    isMountedRef.current = true;
    loadData(true);

    // Setup polling if interval is set (only poll when user's tab is active/visible)
    let intervalId;
    if (LEADERBOARD_CONFIG.refreshInterval && LEADERBOARD_CONFIG.refreshInterval > 0 && LEADERBOARD_CONFIG.sheetUrlOrId) {
      intervalId = setInterval(() => {
        if (typeof document === 'undefined' || document.visibilityState === 'visible') {
          loadData(false);
        }
      }, LEADERBOARD_CONFIG.refreshInterval);
    }

    // Refresh immediately when user switches back to this tab
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        loadData(false);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isMountedRef.current = false;
      if (intervalId) clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [loadData]);

  const refresh = () => loadData(true);

  return {
    standings,
    isLoading,
    isLive,
    lastUpdated,
    error,
    refresh,
    isConfigured: Boolean(LEADERBOARD_CONFIG.sheetUrlOrId && LEADERBOARD_CONFIG.sheetUrlOrId.trim())
  };
}

"use client";

import { useEffect, useState } from "react";
import {
  checkNewVisitor,
  trackVisit,
  fetchAnalytics,
  type AnalyticsData,
} from "@/lib/analytics";

let hasTracked = false;

export function useVisitorCounter() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    // Prevent double-tracking in React Strict Mode
    if (!hasTracked) {
      hasTracked = true;

      checkNewVisitor().then((isNew) => {
        trackVisit(isNew);
      });
    }

    // Fetch current counts in background
    fetchAnalytics().then((data) => {
      if (mounted) {
        setAnalytics(data);
        setLoading(false);
      }
    });

    // Fallback: show placeholder after 3s max
    const timeout = setTimeout(() => {
      if (mounted) setLoading(false);
    }, 3000);

    return () => {
      mounted = false;
      clearTimeout(timeout);
    };
  }, []);

  return { analytics, loading };
}

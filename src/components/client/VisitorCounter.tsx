"use client";

import { useVisitorCounter } from "@/hooks/useVisitorCounter";

const VisitorCounter = () => {
  const { analytics, loading } = useVisitorCounter();

  return (
    <div className="flex items-center gap-4 text-sm text-theme-on-surface-variant">
      <div className="flex items-center gap-1.5">
        <span className="inline-block size-1.5 rounded-full bg-emerald-400 animate-pulse" />
        {loading ? (
          <span className="inline-block h-3 w-12 rounded bg-theme-h-100-80 animate-pulse" />
        ) : (
          <span className="font-medium text-theme-on-surface">
            {analytics?.totalViews?.toLocaleString() ?? "—"}
          </span>
        )}
        <span>views</span>
      </div>
      <span className="text-theme-border-on-surface">|</span>
      <div className="flex items-center gap-1.5">
        {loading ? (
          <span className="inline-block h-3 w-12 rounded bg-theme-h-100-80 animate-pulse" />
        ) : (
          <span className="font-medium text-theme-on-surface">
            {analytics?.uniqueVisitors?.toLocaleString() ?? "—"}
          </span>
        )}
        <span>unique visitors</span>
      </div>
    </div>
  );
};

export default VisitorCounter;

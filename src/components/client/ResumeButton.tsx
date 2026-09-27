"use client";

import { useState } from "react";
import { SolarDownloadMinimalisticBoldDuotone } from "@/icons/index";
import { trackResumeDownload } from "@/lib/analytics";
import publicLinks from "@/constants/links";

const ResumeButton = () => {
  const [downloading, setDownloading] = useState(false);

  const handleClick = () => {
    if (downloading) return;
    setDownloading(true);

    // Fire-and-forget analytics (non-blocking)
    trackResumeDownload().catch(() => {});

    // Redirect immediately
    window.open(publicLinks.resume, "_blank");

    // Re-enable after a short delay
    setTimeout(() => setDownloading(false), 1000);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={downloading}
      className="group inline-flex items-center gap-3 rounded-full text-button-on-secondary border border-button-secondary-border bg-button-secondary shadow-xs hover:shadow hover:bg-button-hover-secondary transition-all ease-in-out duration-200 p-btn-pad-2 cursor-pointer disabled:opacity-60"
    >
      Download Resume
      <SolarDownloadMinimalisticBoldDuotone className="size-5 stroke-button-on-secondary " />
    </button>
  );
};

export default ResumeButton;

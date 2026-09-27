"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import cn from "@/utils/cn";

interface AchievementVideoProps {
  videoUrl: string;
  title: string;
}

const AchievementVideo = ({ videoUrl, title }: AchievementVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const isYouTube = videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");

  const getYouTubeEmbedUrl = (url: string): string => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  if (isPlaying) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
        {isYouTube ? (
          <iframe
            src={`${getYouTubeEmbedUrl(videoUrl)}?autoplay=1`}
            title={title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <video
            src={videoUrl}
            controls
            autoPlay
            className="absolute inset-0 w-full h-full object-contain"
          />
        )}
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsPlaying(true)}
      className={cn(
        "relative w-full aspect-video rounded-xl overflow-hidden",
        "bg-theme-surface-depth border border-theme-border-on-surface",
        "flex items-center justify-center",
        "transition-all duration-300 hover:bg-theme-surface-depth/80",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary"
      )}
      aria-label={`Play video: ${title}`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="size-14 rounded-full bg-theme-primary flex items-center justify-center">
          <Play className="size-6 text-theme-on-primary ml-0.5" />
        </div>
        <span className="text-sm text-theme-on-surface-variant">Watch Video</span>
      </div>
    </button>
  );
};

export default AchievementVideo;

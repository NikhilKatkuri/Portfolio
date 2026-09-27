"use client";

import Image from "next/image";
import { Crown } from "lucide-react";
import cn from "@/utils/cn";

interface TeamMember {
  name: string;
  image: string;
  role?: string;
  isLeader?: boolean;
}

interface AchievementTeamProps {
  team: TeamMember[];
}

const AchievementTeam = ({ team }: AchievementTeamProps) => {
  if (!team.length) return null;

  return (
    <div>
      <h4 className="mb-3 text-sm font-medium text-theme-on-surface">Team</h4>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.name}
            className={cn(
              "relative flex items-center gap-3 rounded-2xl border p-3 transition-all duration-300",
              member.isLeader
                ? "border-blue-200 bg-blue-50/70 dark:border-blue-800 dark:bg-blue-950/30 shadow-md"
                : "border-theme-border-on-surface/50 bg-theme-surface-depth/50 hover:bg-theme-surface-depth",
            )}
          >
            {/* Leader badge */}
            {member.isLeader && (
              <div className="absolute -top-2 -right-2 rounded-full bg-blue-600 p-1.5 text-white shadow-lg">
                <Crown className="size-3.5 fill-current" />
              </div>
            )}

            {/* Avatar */}
            <div className="relative shrink-0">
              <Image
                src={member.image}
                alt={member.name}
                width={40}
                height={40}
                loading="lazy"
                sizes="40px"
                className={cn(
                  "size-10 rounded-full object-cover",
                  member.isLeader &&
                    "ring-2 ring-blue-500 ring-offset-2 ring-offset-white dark:ring-offset-neutral-900",
                )}
              />
            </div>

            {/* Info */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="truncate text-sm font-medium text-theme-on-surface w-full">
                  {member.name}
                </p>

                {member.isLeader && (
                  <span className="rounded-full bg-blue-600 px-4 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                    Lead
                  </span>
                )}
              </div>

              {member.role && (
                <p className="truncate text-xs text-theme-on-surface-variant">
                  {member.role}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementTeam;

import { Trophy, Briefcase, Medal, Cloud } from "lucide-react";
import cn from "@/utils/cn";

type AchievementType = "hackathon" | "internship" | "award" | "certification";

const iconMap: Record<AchievementType, React.ComponentType<{ className?: string }>> = {
  hackathon: Trophy,
  internship: Briefcase,
  award: Medal,
  certification: Cloud,
};

interface AchievementTypeIconProps {
  type: AchievementType;
  className?: string;
}

const AchievementTypeIcon = ({ type, className }: AchievementTypeIconProps) => {
  const Icon = iconMap[type];
  return <Icon className={cn("size-5", className)} />;
};

export default AchievementTypeIcon;

import { ExperienceRecord } from "@/types";
import cn from "@/utils/cn";
import formatDate from "@/utils/formatDate";

const TechPill = ({ name }: { name: string }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-theme-border-on-surface ">
    {name}
  </span>
);


const ExperienceCard = ({
  experience,
  isLast,
}: {
  experience: ExperienceRecord;
  isLast: boolean;
}) => (
  <div className="flex gap-6 md:gap-10">
    <div className="flex flex-col items-center pt-1 shrink-0">
      <div
        className={`size-2.5 rounded-full ring-2 ring-offset-2 ring-offset-white transition-colors ${
          experience.isCurrent
            ? "bg-(--color-emerald-600) ring-(--color-emerald-200) animate-pulse"
            : "bg-theme-border-on-surface ring-transparent"
        }`}
      />
      {!isLast && (
        <div className="w-px flex-1 mt-2 bg-theme-border-on-surface" />
      )}
    </div>

    <div className={`w-full ${!isLast ? "pb-10" : ""}`}>
      <p className="text-sm font-medium tracking-wide uppercase  mb-3">
        {formatDate(experience.startDate)}
        <span className="mx-1.5">-</span>
        {experience.isCurrent ? "Present" : formatDate(experience.endDate)}
        {experience.isCurrent && (
          <span className="ml-2 normal-case tracking-normal font-normal text-(--color-emerald-600)">
            Current
          </span>
        )}
      </p>

      <div
        className={cn(
          "rounded-xl px-5 py-4 cursor-pointer w-full",
          "bg-theme-surface z-0 relative",
          "transition-all duration-300 ease-out transform-gpu",
          "hover:z-10 hover:-translate-y-1 hover:bg-theme-secondary/80",
          "border-t-2 border-transparent hover:border-theme-secondary",
          "hover:shadow-[0_20px_40px_rgba(var(--palette-100),0.08)]",
        )}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
          <h3 className="heading-6 text-primary">{experience.title}</h3>
          <span className="text-xs font-mono text-tertiary shrink-0">
            {experience.company}
          </span>
        </div>

        <p className="paragraph-6 text-tertiary leading-relaxed">
          {experience.description ?? experience.summary}
        </p>

        {experience.technologies && experience.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {experience.technologies.map((t) => (
              <TechPill key={t.name} name={t.name} />
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default ExperienceCard;
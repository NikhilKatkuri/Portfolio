import ExperienceData from "@/constants/exprience";
import { ExperienceRecord } from "@/types";

const formatDate = (date?: string): string => {
  if (!date) return "Present";
  const [year, month] = date.split("-");
  if (!month) return year;
  return new Date(`${year}-${month}-01`).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

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
            ? "bg-[var(--color-emerald-600)] ring-[var(--color-emerald-200)] animate-pulse"
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
        <span className="mx-1.5">–</span>
        {experience.isCurrent ? "Present" : formatDate(experience.endDate)}
        {experience.isCurrent && (
          <span className="ml-2 normal-case tracking-normal font-normal text-[var(--color-emerald-600)]">
            Current
          </span>
        )}
      </p>

      <div className="rounded-xl px-5 py-4  border border-theme-border-on-surface cursor-pointer hover:bg-theme-h-100-80/80 transition-colors duration-300 ">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
          <h3 className="heading-6 text-primary">{experience.title}</h3>
          <span className="text-xs font-mono text-tertiary shrink-0">
            {experience.company}
          </span>
        </div>

        <p className="paragraph-4 text-tertiary leading-relaxed">
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

const Experience = () => {
  const sorted = [...ExperienceData].sort(
    (a, b) => (a.order ?? 99) - (b.order ?? 99),
  );

  return (
    <section className="mx-auto max-w-content-mx w-full max-lg:px-4 py-16">
      <div className="mb-10">
        <h2 className="heading-4 mb-3 text-primary">Experience</h2>
        <p className="paragraph-4 max-w-lg ">
          A breakdown of the languages, frameworks, and tools I use to build
          software. I focus on writing clean code, fixing performance
          bottlenecks, and delivering responsive web and mobile projects.
        </p>
      </div>

      <div className="max-w-2xl">
        {sorted.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isLast={index === sorted.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;

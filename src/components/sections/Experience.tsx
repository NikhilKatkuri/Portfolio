import { decisions } from "@/constants/content/home";
import ExperienceCard from "../ui/ExperienceCard";
import { ExperienceData } from "@/constants/exprience";

const Experience = () => {
  const { experience } = decisions;
  return (
    <section className="mx-auto max-w-content-mx w-full max-lg:px-4 py-16">
      <div className="mb-10">
        <h2 className="heading-4 mb-3 text-primary">{experience.title}</h2>
        <p className="paragraph-4 max-w-lg ">{experience.body}</p>
      </div>

      <div className="max-w-2xl">
        {ExperienceData.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isLast={index === ExperienceData.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;

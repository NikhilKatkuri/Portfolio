import { decisions } from "@/constants/content/home";
import ContinousBox from "../ui/ContinousBox";

const Philosophy = () => {
  const { philosophy } = decisions;
  return (
    <div className="min-h-screen w-full flex flex-col gap-8 max-lg:px-4 py-12">
      <div className="mx-auto max-w-content-mx w-full flex flex-col gap-8">
        <div>
          <h2 className="heading-4 lg:my-3 text-left text-primary">
            {philosophy.title}
          </h2>
          <div className="mb-6">
            <p className="paragraph-4 max-w-lg md:max-w-2xl text-left text-pretty ">
              <mark className="bg-theme-primary text-secondary  px-2 py-0.5 rounded-sm font-medium">
                {philosophy.quote}
              </mark>
            </p>
          </div>
          <div className="space-y-4 max-w-lg md:max-w-2xl text-left text-pretty  leading-relaxed">
            {philosophy.body.map((paragraph, index) => (
              <p key={index} className="paragraph-5">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full border rounded-md border-theme-border-on-surface  gap-px ">
            <ContinousBox card={philosophy.engineeringValues} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;

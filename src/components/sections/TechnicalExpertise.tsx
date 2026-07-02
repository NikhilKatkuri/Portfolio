import { decisions } from "@/constants/content/home";
import TechIconsComponent from "../ui/TechIcons";
import ContinousBox from "../ui/ContinousBox";

const TechnicalExpertise = () => {
  const { technicalExpertise } = decisions;
  const breakthrough = technicalExpertise.technicalBreakThrough;

  return (
    <div className="mt-6 w-full flex flex-col gap-8 max-lg:px-4">
      <div className="mx-auto max-w-content-mx w-full flex flex-col gap-8">
        <div>
          <h2 className="heading-4 lg:my-3 text-left text-primary">
            {technicalExpertise.title}
          </h2>
          <p className="paragraph-4 max-w-lg md:max-w-xl text-left text-pretty ">
            {technicalExpertise.body}
          </p>
        </div>

        <div className="flex flex-col gap-6 my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full border rounded-md border-theme-border-on-surface  gap-px ">
            <ContinousBox card={breakthrough} />
          </div>

          <div className="w-full p-6 lg:p-8 flex flex-col gap-6">
            <div className="*:text-center">
              <h3 className="text-sm font-mono ">THE STACK</h3>
              <h3 className="text-lg font-medium my-3 text-primary">
                Languages & Tooling Ecosystem
              </h3>
            </div>

            <div className="h-auto min-h-64 lg:min-h-96 flex items-center justify-center">
              <TechIconsComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalExpertise;

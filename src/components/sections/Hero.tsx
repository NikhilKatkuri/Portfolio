import {
  SolarArrowRightUpBroken,
  SolarDownloadMinimalisticBoldDuotone,
} from "@/icons/index";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-auto pb-32 w-full max-w-(--content-max-width) mx-auto max-lg:px-4">
      <div className="landing-main">
        <h1 className="">Designing systems that feel simple.</h1>
        <h1 className="">Engineering systems that scale.</h1>
      </div>
      <div className="my-4 landing-secondary ">
        <p className="">
          I&apos;m Nikhil, a Full-Stack and Android Engineer focused on
          designing, maintaining, and evolving performant systems. I specialize
          in building clean architectures that balance deep backend engineering
          with seamless user experiences.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Link
          href="#featured-projects"
          scroll={true}
          className="group bg-theme-button-primary flex items-center gap-3 cursor-pointer rounded-full text-theme-button-on-primary p-btn-pad-2"
        >
          View Projects
          <span>
            <SolarArrowRightUpBroken className="stroke-theme-button-on-primary size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </Link>

        <a
          href="mailto:nikhil07.dev@gmail.com"
          className="group inline-flex items-center gap-3 rounded-full text-theme-button-on-secondary border border-(--palette-grey-100) bg-(--palette-grey-100)/30 shadow-xs hover:shadow hover:bg-theme-button-secondary transition-all ease-in-out duration-200 p-btn-pad-2 "
        >
          Download Resume
          <SolarDownloadMinimalisticBoldDuotone className="size-5 stroke-theme-on-surface " />
        </a>
      </div>
    </div>
  );
};

export default Hero;

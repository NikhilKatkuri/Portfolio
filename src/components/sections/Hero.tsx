import { decisions } from "@/constants/content/home";
import publicLinks from "@/constants/links";
import {
  SolarArrowRightUpBroken,
  SolarDownloadMinimalisticBoldDuotone,
} from "@/icons/index";
import Link from "next/link";

const Hero = () => {
  const { hero } = decisions;
  return (
    <div className="h-auto pb-16 lg:pb-32 w-full max-w-content-mx mx-auto max-lg:px-4">
      <h1 className="landing-main text-surface">
        {hero.title.map((part, index) => (
          <p key={index}>{part}</p>
        ))}
      </h1>
      <div className="my-4 landing-secondary text-tertiary">
        <p className="">{hero.body}</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Link
          href="#featured-projects"
          scroll={true}
          className="group bg-button-primary flex items-center gap-3 cursor-pointer rounded-full text-button-on-primary p-btn-pad-2"
        >
          View Projects
          <span>
            <SolarArrowRightUpBroken className="stroke-button-on-primary size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </Link>

        <a
          href={publicLinks.resume}
          className="group inline-flex items-center gap-3 rounded-full text-button-on-secondary border border-button-secondary-border bg-button-secondary shadow-xs hover:shadow hover:bg-button-hover-secondary transition-all ease-in-out duration-200 p-btn-pad-2 "
        >
          Download Resume
          <SolarDownloadMinimalisticBoldDuotone className="size-5 stroke-button-on-secondary " />
        </a>
      </div>
    </div>
  );
};

export default Hero;

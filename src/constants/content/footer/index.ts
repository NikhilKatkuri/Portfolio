import publicLinks, {
  publicConfigStrict, 
} from "@/constants/links";
import { GithubIcon, LinkedinIcon, MailIcon, SolarArrowRightUpBroken, SolarDownloadMinimalisticBoldDuotone } from "@/icons";


const SOCIALS = [
  {
    label: "GitHub",
    href: publicLinks.github,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: publicLinks.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: publicLinks.mail,
    icon: MailIcon,
  },
];

const CTA = [
  {
    isPrimary: true,
    label: "Resume",
    href: publicLinks.resume,
    icon: SolarDownloadMinimalisticBoldDuotone,
  },
  {
    isPrimary: false,
    label: "Get in touch",
    href: publicLinks.mail,
    icon: SolarArrowRightUpBroken,
  },
];

const footer = {
  flag: "AVAILABILITY",
  title: "Let's build\nsomething meaningful.",
  body: "Focused on scalable systems, thoughtful engineering, and modern digital experiences built for long-term maintainability.",
  cta: CTA,
  public: SOCIALS,
  config: {
    main: `Engineered in India. Deployed globally. © 2026 ${publicConfigStrict.name}.`,
    sub: `Full-Stack • Android • Hyderabad, India`,
  },
};

export default footer;

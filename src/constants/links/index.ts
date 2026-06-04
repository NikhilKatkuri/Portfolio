import { GithubIcon, LinkedinIcon, MailIcon, NPMjs } from "@/icons";

const publicLinks = {
  linkedin: "https://www.linkedin.com/in/katkurinikhil",
  github: "https://github.com/nikhilKatkuri",
  npm: "https://www.npmjs.com/~nikhil07k",
  mail: "mailto:nikhil07.dev@gmail.com",
  resume: "",
};

const publicConfigStrict ={
  name: "Nikhil Katkuri",
  title: "Full Stack SDE",
  location: "Hyderabad, India",
  brand:'Startify Minds',
} as const;

const socialLinks = [
  {
    label: "Follow on GitHub",
    href: publicLinks.github,
    icon: GithubIcon,
  },
  {
    label: "Connect on LinkedIn",
    href: publicLinks.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "View packages on NPM",
    href: publicLinks.npm,
    icon: NPMjs,
  },
  {
    label: publicLinks.mail,
    href: publicLinks.mail,
    icon: MailIcon,
  },
];

export { socialLinks, publicConfigStrict };
export default publicLinks;

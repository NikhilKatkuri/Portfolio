import { GithubIcon, LinkedinIcon, MailIcon, NPMjs } from "@/icons";

const publicLinks = {
  linkedin: "https://www.linkedin.com/in/katkurinikhil",
  github: "https://github.com/nikhilKatkuri",
  npm: "https://www.npmjs.com/~nikhil07k",
  mail: "mailto:nikhil07.dev@gmail.com",
  resume: "/api/resume",
};

const publicConfigStrict = {
  name: "Nikhil Katkuri",
  title: "Full Stack SDE",
  location: "Hyderabad, India",
  brand: "Startify Minds",
  dbName: "portfolio-Nikhil-Katkuri-db",
  resume: "https://drive.google.com/file/d/1fC33eQqzGF8MBSHnUjz9mxcHGCnXuJSR/view"
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

const Mails = {
  "lets-build":{
    subject:"Interested in Working Together",
    "body":"Hi, I came across your portfolio and really liked your work. I have a project in mind that I think could be a great fit, and I'd love to set up a quick call this week to discuss it further. Looking forward to hearing from you."
  },
    "get-contected":{
    subject:"Get in Touch",
    "body":"Hi, I came across your portfolio and really liked your work. I'd love to connect and discuss a potential project — do you have time for a quick chat this week?"
  },
}

export { socialLinks, publicConfigStrict, Mails };
export default publicLinks;

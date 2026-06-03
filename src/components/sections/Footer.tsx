import {
  GithubIcon,
  SolarDownloadMinimalisticBoldDuotone,
  LinkedinIcon,
  MailIcon,
  SolarArrowRightUpBroken,
} from "@/icons/index";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/nikhilKatkuri",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/katkurinikhil",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:nikhil07.dev@gmail.com",
    icon: MailIcon,
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-theme-tertiary border-t border-theme-border-on-surface">
      <div className="relative mx-auto max-w-7xl px-6 pt-20 md:pt-24 border-b border-theme-border-on-surface pb-4 ">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="mb-4  uppercase  ">Contact</p>

              <h2 className="heading-5">
                Let&apos;s build
                <br />
                something meaningful.
              </h2>

              <p className="mt-6 max-w-xl paragraph-4">
                Focused on scalable systems, thoughtful engineering, and modern
                digital experiences built for long-term maintainability.
              </p>
            </div>

            <div className="gap-3 flex flex-wrap">
              <a className="group inline-flex items-center gap-3 rounded-full text-button-on-primary bg-button-primary p-btn-pad-2 ">
                Resume
                <SolarDownloadMinimalisticBoldDuotone className="h-4 w-4 fill-button-on-primary transition-transform duration-300 group-hover:scale-125 scale-100" />
              </a>
              <a
                href="mailto:nikhil07.dev@gmail.com"
                className="group inline-flex items-center gap-3 rounded-full text-button-on-secondary border border-button-secondary-border bg-button-secondary p-btn-pad-2 "
              >
                Get in touch
                <SolarArrowRightUpBroken className="h-4 w-4 stroke-theme-on-surface transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-theme-border-on-surface hover:bg-theme-h-100-80 p-btn-pad-2 text-sm  transition-all "
              >
                <Icon className="size-5  fill-theme-on-surface stroke-theme-on-surface" />
                <span>{label}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4  pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-3">
              <span>Next.js</span>
              <div className="h-1 w-1 rounded-full bg-theme-on-primary" />
              <span>Tailwind CSS</span>
              <div className="h-1 w-1 rounded-full bg-theme-on-primary" />

              <span>Hyderabad, IN</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex select-none items-center py-4  justify-center  relative pointer-events-none inset-x-0 bottom-0 overflow-hidden">
        <p className="footer-leading">NIKHIL KATKURI</p>
        <p className="footer-leading-overlay absolute">Startify Minds.</p>
      </div>
    </footer>
  );
};

export default Footer;

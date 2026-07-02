import footer from "@/constants/content/footer";
import { publicConfigStrict } from "@/constants/links";
import buttonVariants from "@/constants/ui/button";
import cn from "@/utils/cn";
import ThemeButtons from "../client/ThemeButtons";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-theme-tertiary border-t border-theme-border-on-surface">
      <div className="relative mx-auto max-w-7xl px-6 pt-20 md:pt-24 border-b border-theme-border-on-surface pb-4 ">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 uppercase">{footer.flag}</p>

              <h2 className="heading-5 text-primary whitespace-pre-wrap">
                {footer.title}
              </h2>

              <p className="mt-6 max-w-xl paragraph-4">{footer.body}</p>
            </div>

            <div className="gap-3 flex flex-wrap">
              {footer.cta.map((cta, index) => (
                <a
                  key={index}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants.base,
                    cta.isPrimary
                      ? buttonVariants.variants.primary
                      : buttonVariants.variants.secondary,
                    "cursor-pointer",
                  )}
                >
                  {cta.label}
                  <cta.icon
                    className={cn(
                      "h-4 w-4 transition-transform duration-300 group-hover:scale-125 scale-100",
                      cta.isPrimary
                        ? buttonVariants.iconVariants.primaryFill
                        : buttonVariants.iconVariants.secondaryStroke,
                    )}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col flex-wrap ">
            <div className="flex flex-wrap items-center gap-3">
              {footer.public.map(({ label, href, icon: Icon }) => (
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
            <br />
            <ThemeButtons />
          </div>
          <div className="flex flex-col gap-4  pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p>{footer.config.main}</p>
            <p className="flex flex-wrap items-center gap-3">
              {footer.config.sub}
            </p>
          </div>
        </div>
      </div>

      <div className="flex select-none items-center py-4  justify-center  relative pointer-events-none inset-x-0 bottom-0 overflow-hidden">
        <p className="footer-leading">
          {publicConfigStrict.name.toUpperCase()}
        </p>
        <p className="footer-leading-overlay absolute">
          {publicConfigStrict.brand + "."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { socialLinks } from '@/constants/links';

const SocailLinksComponent = () => {
  return (
    <div className="mt-5 flex flex-col gap-2">
      {socialLinks.map((item) => {
    
        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl px-3 py-3 transition-all duration-300"
            style={{
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <span
              className="flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105"
              style={{
                border: "1px solid var(--palette-100)",
                background: "rgba(var(--palette-400), 0.1)",
              }}
            >
              <item.icon className="h-5 w-5 fill-theme-on-surface" />
            </span>

            <span
              className="transition-all text-primary duration-300 group-hover:translate-x-1"
              style={{
                fontSize: "0.96rem",
                fontWeight: 500,
              }}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}

export default SocailLinksComponent
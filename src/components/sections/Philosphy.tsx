 const Philosophy = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-8 max-lg:px-4 py-12">
      <div className="mx-auto max-w-(--content-max-width) w-full flex flex-col gap-8">
         
        <div>
          <h2 className="heading-4 lg:my-3 text-left">
            Engineering Philosophy
          </h2>

          <div className="mb-6">
            <p className="paragraph-4 max-w-lg md:max-w-2xl text-left text-pretty text-theme-on-surface/80">
              <mark className="bg-(--theme-content-overlay-depth-02) px-1 py-0.5 rounded-sm font-medium">
                {
                  "I don't build software for ideal scenarios — I execute for runtime velocity, clear debugging loops, and modularity that accommodates changing specs."
                }
              </mark>
            </p>
          </div>

          <div className="space-y-4 max-w-lg md:max-w-2xl text-left text-pretty text-theme-on-surface/90 leading-relaxed">
            <p className="paragraph-5">
              I started teaching myself full-stack development and mobile
              architectures in mid-2024 — not to fulfill a course curriculum,
              but because I wanted to engineer tangible utilities. By early
              2026, that targeted curiosity had materialized into a professional
              product internship.
            </p>
            <p className="paragraph-5">
            While early in my career timeline, I bring genuine execution momentum, an honest assessment of my engineering gaps, and a track record of navigating complex documentation and production constraints independently.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 my-6">
          <div className="grid sm:grid-cols-2 w-full border rounded-md border-theme-on-surface/20 divide-y sm:divide-y-0 sm:divide-x divide-theme-on-surface/20">

            <div className="p-6 lg:p-8 cursor-pointer hover:bg-theme-h-grey-100-80 flex flex-col justify-between h-auto w-full">
              <div className="mb-3">
                <span className="text-xs font-mono">01 / METRICS</span>
                <h3 className="text-lg font-medium mt-2 text-left">
                  Ship to Validate
                </h3>
              </div>
              <p className=" text-left text-pretty leading-relaxed">
                Real user feedback loops beat imagined, closed-door perfection
                every time. I favor getting functional code across the
                deployment line early, tracking failures via structured logs,
                and iteratively refining edge cases under real-world traffic
                metrics.
              </p>
            </div>

            <div className="p-6 lg:p-8 cursor-pointer hover:bg-theme-h-grey-100-80 flex flex-col justify-between h-auto w-full bg-(--theme-surface-overlay-depth-01)/90">
              <div className="mb-3">
                <span className="text-xs font-mono">02 / AUTONOMY</span>
                <h3 className="text-lg font-medium mt-2 text-left">
                  Technical Autonomy
                </h3>
              </div>
              <p className=" text-left text-pretty leading-relaxed">
                When a system breaks, I isolate the runtime environment, trace
                the stack dump, and read the raw specifications before
                escalating. I spend dedicated cycles resolving complex blocks on
                my own so that when I do consult senior engineers, I present
                structured diagnoses.
              </p>
            </div>

            <div className="p-6 lg:p-8 cursor-pointer hover:bg-theme-h-grey-100-80 flex flex-col justify-between h-auto w-full bg-(--theme-surface-overlay-depth-01)/90 border-t border-theme-on-surface/20">
              <div className="mb-3">
                <span className="text-xs font-mono">03 / OWNERSHIP</span>
                <h3 className="text-lg font-medium mt-2 text-left">
                  System Ownership
                </h3>
              </div>
              <p className=" text-left text-pretty leading-relaxed">
                Code quality impacts user experience regardless of an
                engineer&apos;s title. If I notice a sluggish database query
                layout, an unoptimized asset payload, or responsive breakage on
                uncommon viewports, I actively flag it and advocate for
                long-term maintainability.
              </p>
            </div>

            <div className="p-6 lg:p-8 cursor-pointer hover:bg-theme-h-grey-100-80 transition-all ease-in-out duration-200 flex flex-col justify-between h-auto w-full border-t border-theme-on-surface/20">
              <div className="mb-3">
                <span className="text-xs font-mono">04 / TRANSPARENCY</span>
                <h3 className="text-lg font-medium mt-2 text-left">
                  Honest Assessment
                </h3>
              </div>
              <p className=" text-left text-pretty leading-relaxed">
                I maintain complete clarity regarding my skillset. While
                confident across the core TypeScript, Node.js, and React Native
                ecosystems, I am actively investing deeper focus into advanced
                asynchronous error handling, automated end-to-end testing
                layers, and system design paradigms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;

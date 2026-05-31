const TechnicalExpertise = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-8 max-lg:px-4">
      <div className="mx-auto max-w-(--content-max-width) w-full flex flex-col gap-8">
        <div>
          <h2 className="heading-4 lg:my-3 text-left">
            Technical Systems & Tooling
          </h2>
          <p className="paragraph-4 max-w-lg md:max-w-xl text-left text-pretty text-theme-on-surface/80">
            A precise breakdown of my development capabilities. I specialize in
            engineering automated terminal utilities, building clean web
            layouts, and developing cross-platform mobile synchronization
            layers.
          </p>
        </div>

        <div className="flex flex-col gap-6 my-6">
          <div className="grid sm:grid-cols-2 w-full border rounded-md border-theme-on-surface/20 divide-y sm:divide-y-0 sm:divide-x divide-theme-on-surface/20">
            <div className="cursor-pointer hover:bg-(--palette-grey-100)/80 transition-all ease-in-out duration-200 p-6 lg:p-8 flex flex-col justify-between h-auto  w-full">
              <div className="mb-3">
                <span className="text-xs font-mono ">01 / SERVER</span>
                <h3 className="text-lg font-medium mt-2 text-left">
                  Backend Foundations
                </h3>
              </div>
              <p className=" text-left text-pretty leading-relaxed">
                Structuring modular backend environments with Node.js and
                Express. Experienced in implementing stateless token-based
                authentication, designing secure RESTful API routing
                architectures, and optimizing data payloads.
              </p>
            </div>

            <div className="cursor-pointer hover:bg-(--palette-grey-100)/80 transition-all ease-in-out duration-200 p-6 lg:p-8 flex flex-col justify-between h-auto  w-full bg-(--theme-surface-overlay-depth-01)/90">
              <div className="mb-3">
                <span className="text-xs font-mono ">02 / INTERFACES</span>
                <h3 className="text-lg font-medium mt-2 text-left">
                  Frontend Development
                </h3>
              </div>
              <p className=" text-left text-pretty leading-relaxed">
                Building highly interactive single-page and server-side
                interfaces using React and Next.js. Focused on managing dynamic
                client-side application states, constructing reusable component
                design tokens, and styling modern responsive layouts via
                Tailwind CSS.
              </p>
            </div>

            <div className="cursor-pointer hover:bg-(--palette-grey-100)/80 transition-all ease-in-out duration-200 p-6 lg:p-8 flex flex-col justify-between h-auto  w-full bg-(--theme-surface-overlay-depth-01)/90 border-t border-theme-on-surface/20">
              <div className="mb-3">
                <span className="text-xs font-mono ">03 / MOBILE</span>
                <h3 className="text-lg font-medium mt-2 text-left">
                  Mobile Development
                </h3>
              </div>
              <p className="text-left text-pretty leading-relaxed">
                Developing mobile software using React Native and the Expo
                framework ecosystem. Experienced with offline-first client
                operations utilizing AsyncStorage persistence layers and
                resolving UI rendering lags across diverse screen resolutions.
              </p>
            </div>

            <div className="cursor-pointer hover:bg-(--palette-grey-100)/80 transition-all ease-in-out duration-200 p-6 lg:p-8 flex flex-col justify-between h-auto  w-full border-t border-theme-on-surface/20">
              <div className="mb-3">
                <span className="text-xs font-mono ">04 / TOOLING</span>
                <h3 className="text-lg font-medium mt-2 text-left">
                  CLI & Automation
                </h3>
              </div>
              <p className=" text-left text-pretty leading-relaxed">
                Designing custom terminal utilities distributed through the
                public Node Package Manager (NPM) registry. Expert in building
                interactive command structures, automated environment
                bootstrapping templates, and script integrations leveraging
                secure GitHub OAuth workflows.
              </p>
            </div>
          </div>

          <div className="w-full border rounded-md border-theme-on-surface/20  p-6 lg:p-8 flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono ">THE STACK</span>
              <h3 className="text-lg font-medium mt-1 text-left">
                Languages & Tooling Ecosystem
              </h3>
            </div>

            <div className="flex flex-col gap-5 text-sm"> 
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 border-b border-theme-on-surface/10 pb-3">
                <span className="text-xs font-mono  uppercase tracking-wider w-full sm:w-40 shrink-0 text-left pt-1">
                  Languages
                </span>
                <div className="flex flex-wrap gap-1.5 justify-start w-full">
                  {[
                    "TypeScript",
                    "JavaScript (ES6+)",
                    "Kotlin",
                    "Java",
                    "Python",
                    "C",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-sm bg-theme-on-surface/5 border border-theme-on-surface/10 text-theme-on-surface/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
 
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 border-b border-theme-on-surface/10 pb-3">
                <span className="text-xs font-mono  uppercase tracking-wider w-full sm:w-40 shrink-0 text-left pt-1">
                  Frameworks
                </span>
                <div className="flex flex-wrap gap-1.5 justify-start w-full">
                  {[
                    "Next.js",
                    "React.js",
                    "Node.js",
                    "Express.js",
                    "React Native",
                    "Expo",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-sm bg-theme-on-surface/5 border border-theme-on-surface/10 text-theme-on-surface/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
 
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 border-b border-theme-on-surface/10 pb-3">
                <span className="text-xs font-mono  uppercase tracking-wider w-full sm:w-40 shrink-0 text-left pt-1">
                  Data & Layer
                </span>
                <div className="flex flex-wrap gap-1.5 justify-start w-full">
                  {[
                    "MongoDB",
                    "Mongoose ODM",
                    "RESTful APIs",
                    "JWT Auth",
                    "AsyncStorage",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-sm bg-theme-on-surface/5 border border-theme-on-surface/10 text-theme-on-surface/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                <span className="text-xs font-mono  uppercase tracking-wider w-full sm:w-40 shrink-0 text-left pt-1">
                  Infra & Tools
                </span>
                <div className="flex flex-wrap gap-1.5 justify-start w-full">
                  {[
                    "Git",
                    "GitHub Actions",
                    "Vercel",
                    "Render",
                    "NPM Ecosystem",
                    "Figma",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-sm bg-theme-on-surface/5 border border-theme-on-surface/10 text-theme-on-surface/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalExpertise;

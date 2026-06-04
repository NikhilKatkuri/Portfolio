import TechIconsComponent from "../ui/TechIcons";

 
const TechnicalExpertise = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-8 max-lg:px-4">
      <div className="mx-auto max-w-content-mx w-full flex flex-col gap-8">
        <div>
          <h2 className="heading-4 lg:my-3 text-left text-primary">
            Technical Systems & Tooling
          </h2>
          <p className="paragraph-4 max-w-lg md:max-w-xl text-left text-pretty ">
            A precise breakdown of my development capabilities. I specialize in
            engineering automated terminal utilities, building clean web
            layouts, and developing cross-platform mobile synchronization
            layers.
          </p>
        </div>

        <div className="flex flex-col gap-6 my-6">
          <div className="grid sm:grid-cols-2 w-full border rounded-md border-theme-border-on-surface divide-y sm:divide-y-0 sm:divide-x divide-theme-on-surface/20">
            <div className="cursor-pointer hover:bg-theme-h-100-80 transition-all ease-in-out duration-200 p-6 lg:p-8 flex flex-col justify-between h-auto  w-full">
              <div className="mb-3">
                <span className="text-xs font-mono ">01 / SERVER</span>
                <h3 className="text-lg font-medium mt-2 text-left text-primary">
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

            <div className="cursor-pointer hover:bg-theme-h-100-80 transition-all ease-in-out duration-200 p-6 lg:p-8 flex flex-col justify-between h-auto  w-full bg-theme-tertiary border-0">
              <div className="mb-3">
                <span className="text-xs font-mono ">02 / INTERFACES</span>
                <h3 className="text-lg font-medium mt-2 text-left text-primary">
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

            <div className="cursor-pointer hover:bg-theme-h-100-80 transition-all ease-in-out duration-200 p-6 lg:p-8 flex flex-col justify-between h-auto  w-full bg-theme-tertiary border-t border-theme-border-on-surface">
              <div className="mb-3">
                <span className="text-xs font-mono ">03 / MOBILE</span>
                <h3 className="text-lg font-medium mt-2 text-left text-primary">
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

            <div className="cursor-pointer hover:bg-theme-h-100-80 transition-all ease-in-out duration-200 p-6 lg:p-8 flex flex-col justify-between h-auto  w-full border-t border-theme-border-on-surface">
              <div className="mb-3">
                <span className="text-xs font-mono ">04 / TOOLING</span>
                <h3 className="text-lg font-medium mt-2 text-left text-primary">
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

          <div className="w-full p-6 lg:p-8 flex flex-col gap-6">
            <div className="*:text-center">
              <h3 className="text-sm font-mono ">THE STACK</h3>
              <h3 className="text-lg font-medium my-3 text-primary">
                Languages & Tooling Ecosystem
              </h3>
            </div>

            <div className="h-auto min-h-64 lg:min-h-96 flex items-center justify-center">
              <TechIconsComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalExpertise;

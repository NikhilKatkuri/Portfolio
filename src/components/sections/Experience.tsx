const Experience = () => {
  return (
    <div className="mx-auto max-w-(--content-max-width) w-full max-lg:px-4 flex flex-col h-auto py-12 gap-8">
      <div>
        <h1 className="heading-4 lg:my-3">Experience</h1>
        <p className="paragraph-4 max-w-lg md:max-w-xl text-theme-on-surface/80">
          A breakdown of the languages, frameworks, and tools I use to build
          software. I focus on writing clean code, fixing performance
          bottlenecks, and delivering responsive web and mobile projects.
        </p>
      </div>

      <div className="my-6 space-y-6 max-w-3xl">
        <div className="group flex gap-6"> 
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse scale-110"></div>
            <div className="w-0.5 h-full bg-theme-on-surface/20 mt-2"></div>
          </div>

          <div className="pb-6 w-full">
            <p className="text-sm font-medium text-theme-on-surface/60 mb-2">
              2026 June - Present
            </p>
            <div className="p-5 rounded-xl group-hover:bg-(--palette-grey-100) cursor-pointer border border-theme-on-surface/5 transition-colors duration-300">
              <h2 className="heading-6 mb-2 text-theme-on-surface">
                Full Stack Developer Intern
              </h2>
              <p className="text-sm font-mono text-theme-on-surface/80 mb-3">
                PixelHexa
              </p>
              <p className="paragraph-4 text-theme-on-surface/80 leading-relaxed">
                Build responsive user interfaces using React.js, Next.js, and
                Tailwind CSS. Code secure backend REST APIs with Node.js,
                Express.js, and MongoDB to support active SaaS products.
              </p>
            </div>
          </div>
        </div>
 
        <div className="group flex gap-6">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-theme-on-surface/60"></div>
            <div className="w-0.5 h-full bg-theme-on-surface/20 mt-2"></div>
          </div>

          <div className="pb-6 w-full">
            <p className="text-sm font-medium text-theme-on-surface/60 mb-2">
              2026 March - 2026 May
            </p>
            <div className="p-5 rounded-xl group-hover:bg-(--palette-grey-100) cursor-pointer border border-theme-on-surface/5 transition-colors duration-300">
              <h2 className="heading-6 mb-2 text-theme-on-surface">
                Android Developer Intern
              </h2>
              <p className="text-sm font-mono text-theme-on-surface/80 mb-3">
                Galactix Solutions Pvt. Ltd.
              </p>
              <p className="paragraph-4 text-theme-on-surface/80 leading-relaxed">
                Developed mobile app features using React Native and Expo. Fixed
                layout layout bugs across different screen sizes, resolved local
                storage issues, and prepared assets for app deployment.
              </p>
            </div>
          </div>
        </div>
 
        <div className="group flex gap-6"> 
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-theme-on-surface/60"></div>
            <div className="w-0.5 h-full bg-theme-on-surface/20 mt-2"></div>
          </div>

          <div className="pb-6 w-full">
            <p className="text-sm font-medium text-theme-on-surface/60 mb-2">
              2025 - 2026
            </p>
            <div className="p-5 rounded-xl group-hover:bg-(--palette-grey-100) cursor-pointer border border-theme-on-surface/5 transition-colors duration-300">
              <h2 className="heading-6 mb-2 text-theme-on-surface">
                Student Faculty Technical Lead
              </h2>
              <p className="text-sm font-mono text-theme-on-surface/80 mb-3">
                SSG - HITM
              </p>
              <p className="paragraph-4 text-theme-on-surface/80 leading-relaxed">
                Run hands-on coding workshops and code crash courses for peers.
                Teach students version control setups, Git branching paths, and
                backend engineering basics to help onboard new developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

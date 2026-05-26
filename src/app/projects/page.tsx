import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

const page = () => {
  return (
    <>
      <Navbar />

      <main className="relative w-full min-h-dvh">
        <div className="max-w-(--content-max-width) mx-auto pb-12  mt-32 max-lg:px-4 justify-between w-full relative h-auto ">
          <div className="my-6">
            <p className="heading-4 max-w-2xl">
              Selected work built with curiosity, systems thinking, and
              obsession for clean execution.
            </p>
            <p className="paragraph-4 mt-6 max-w-2xl">
              Over the years, I&apos;ve built products, tools, and experiments
              focused on solving practical problems through thoughtful
              engineering. These projects reflect how I think about
              architecture, developer experience, performance, and product
              design.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-2 flex-1">
            <div className="rounded-lg animate-pulse h-64 w-full bg-black/5"></div>
            <div className="rounded-lg animate-pulse h-64 w-full bg-black/5"></div>
            <div className="rounded-lg animate-pulse h-64 w-full bg-black/5"></div>
            <div className="rounded-lg animate-pulse h-64 w-full bg-black/5"></div>
            <div className="rounded-lg animate-pulse h-64 w-full bg-black/5"></div>
            <div className="rounded-lg animate-pulse h-64 w-full bg-black/5"></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;

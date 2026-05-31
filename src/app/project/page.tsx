import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

import type { Metadata } from "next";
import { projectsMetadata } from "@/constants/meta";
import ProjectGrid from "@/components/client/ProjectGrid";
export const metadata: Metadata = projectsMetadata; 

const page = () => {
  return (
    <>
      <Navbar />

      <main className="relative w-full min-h-dvh">
        <div className="max-w-(--content-max-width) mx-auto pb-12  mt-32 max-lg:px-4 justify-between w-full relative h-auto ">
          <div className="my-6">
            <h1 className="heading-4 max-w-2xl">
              Selected work built with curiosity, systems thinking, and
              obsession for clean execution.
            </h1>
            <p className="paragraph-4 mt-6 max-w-2xl">
              Over the years, I&apos;ve built products, tools, and experiments
              focused on solving practical problems through thoughtful
              engineering. These projects reflect how I think about
              architecture, developer experience, performance, and product
              design.
            </p>
          </div>
         <ProjectGrid/>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;

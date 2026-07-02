import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

import type { Metadata } from "next";
import { projectsMetadata } from "@/constants/meta";
import ProjectGrid from "@/components/client/ProjectGrid";
import { descisions } from "@/constants/content/projects";
export const metadata: Metadata = projectsMetadata;

const page = () => {
  const { intro } = descisions;
  return (
    <>
      <Navbar />

      <main className="relative w-full min-h-dvh">
        <div className="max-w-content-mx mx-auto pb-12  mt-32 max-lg:px-4 justify-between w-full relative h-auto ">
          <div className="my-6">
            <h1 className="heading-4 max-w-2xl text-primary">{intro.title}</h1>
            <p className="paragraph-4 mt-6 max-w-2xl">{intro.body}</p>
          </div>
          <ProjectGrid />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;

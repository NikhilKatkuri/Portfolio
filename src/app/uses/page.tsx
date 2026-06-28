import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import { Metadata } from "next";
import { usesMetadata } from "@/constants/meta";
import { descisions, setupSections } from "@/constants/content/uses";

export const metadata: Metadata = usesMetadata;

const page = () => {
  const { intro } = descisions;
  return (
    <>
      <Navbar />

      <main className="relative w-full min-h-dvh">
        <div className="max-w-content-mx mx-auto pb-12  mt-32 max-lg:px-4 justify-between w-full relative h-auto ">
          <div className="my-6">
            <h1 className="heading-4 max-w-2xl">{intro.title}</h1>
            <p className="paragraph-4 mt-6 max-w-2xl">{intro.body}</p>
          </div>
          <div className="mt-16 flex flex-col gap-14 max-w-3xl">
            {setupSections.map((section) => (
              <div
                key={section.category}
                className="grid grid-cols-1 gap-6 md:grid-cols-[180px_1fr]"
              >
                <div>
                  <h3 className="sticky top-18 pt-6 paragraph-4 text-primary">
                    {section.category}
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="group rounded-[28px]  cursor-pointer hover:bg-button-nav-hover in-data-[theme='dark']:hover:bg-button-nav-hover transition-all ease-in-out duration-200 p-6 flex flex-col justify-between h-auto  w-full"
                    >
                      <h4 className="transition-all duration-300 group-hover:translate-x-1 paragraph-4 text-primary">
                        {item.title}
                      </h4>
                      <p className="mt-3 max-w-2xl">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;

import Navbar from "@/components/sections/Navbar";
import Image from "next/image";
import type { Metadata } from "next";
import { aboutMetadata } from "@/constants/meta";
import { decisions, stats } from "@/constants/content/about";
import SocailLinksComponent from "@/components/about/SocailLinksComponent";
import { formatDynamicText } from "@/utils/dynamic";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  const { intro, philosophy, experience, status } = decisions;
  return (
    <>
      <Navbar />
      <main className="relative w-full overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(
                circle at top,
                rgba(var(--palette-400), 0.1),
              )
            `,
          }}
        />
        <section className="mx-auto flex min-h-screen w-full max-w-content-mx flex-col px-6 pb-20 pt-32 lg:px-8">
          <div className="grid gap-16 xl:grid-cols-[1fr_480px]">
            <div className="max-w-3xl">
              <div>
                <div className="mb-6 inline-flex bg-theme-surface items-center  border-theme-border-on-surface rounded-full border px-4 py-2 text-sm backdrop-blur">
                  {intro.pin}
                </div>
                <h1 className="max-w-4xl heading-4 text-primary">
                  {intro.title}
                </h1>
                <p className="mt-8 max-w-2xl paragraph-4 leading-8">
                  {intro.body}
                </p>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-3xl p-5 transition-all bg-theme-tertiary duration-300 hover:-translate-y-1 border border-theme-border-on-surface/50"
                      style={{
                        boxShadow:
                          "0px 10px 30px rgba(var(--palette-1000),0.02)",
                      }}
                    >
                      <p className="paragraph-4 text-primary">{item.value}</p>
                      <p className="mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-14 space-y-10">
                <div>
                  <h2 className="mb-3 text-primary heading-6">
                    {philosophy.title}
                  </h2>
                  <p className="max-w-2xl">{philosophy.body}</p>
                </div>
                <div>
                  <h2 className="mb-3 text-primary heading-6">
                    {experience.title}
                  </h2>

                  <p className="max-w-2xl ">
                    {formatDynamicText(experience.done)}
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-primary heading-6">
                    {experience.sub.title}
                  </h2>

                  <p
                    className="max-w-2xl "
                    style={{
                      fontSize: "var(--text-base-size)",
                      lineHeight: "2rem",
                      letterSpacing: "var(--text-base-ls)",
                    }}
                  >
                    {formatDynamicText(experience.sub.body)}
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:sticky xl:top-28 xl:h-fit">
              <div
                className="group relative overflow-hidden rounded-[36px] p-2 border border-theme-border-on-surface"
                style={{
                  background: "rgba(var(--palette-0-rgb),0.7)",
                  boxShadow: "0px 20px 50px rgba(var(--palette-1000),0.08)",
                }}
              >
                <Image
                  src="/hero.jpg"
                  alt="Nikhil Katkuri"
                  width={520}
                  height={640}
                  loading="eager"
                  priority
                  sizes="(max-width:640px) 120px, 242px"
                  className="h-auto w-full rounded-[28px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div
                className="mt-6 rounded-4xl p-6 border border-theme-border-on-surface"
                style={{
                  backdropFilter: "blur(20px)",
                  boxShadow: "0px 10px 30px rgba(var(--palette-1000),0.03)",
                }}
              >
                <div className="pb-5 border-b border-theme-border-on-surface/50">
                  <p>{status.title}</p>
                  <h3 className="mt-2 text-primary paragraph-5">
                    {status.body}
                  </h3>
                </div>

                <SocailLinksComponent />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

import { notFound } from "next/navigation";
import Projects from "@/constants/projects";
import { ProjectRecord } from "@/types";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  SolarArrowRightUpBroken,
  SolarAltArrowLeftBroken,
} from "@/icons/index";
import type { Metadata } from "next";
import cn from "@/utils/cn";
import buttonVariants from "@/constants/ui/button";

export function generateStaticParams() {
  return (Projects as ProjectRecord[]).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = (Projects as ProjectRecord[]).find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.metaTitle ?? project.title,
    description: project.metaDescription ?? project.summary,
    keywords: project.keywords,
    openGraph: { images: project.ogImage ? [project.ogImage] : [] },
  };
}

const StatusBadge = ({ status }: { status: ProjectRecord["status"] }) => {
  const map = {
    completed: { label: "Completed", dot: "bg-[var(--color-emerald-400)]" },
    "in-progress": { label: "In Progress", dot: "bg-[var(--color-amber-400)]" },
    maintenance: { label: "Maintenance", dot: "bg-[var(--color-sky-400)]" },
  } as const;
  const { label, dot } = map[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border border-tertiary/80"

    >
      <span className={`size-1.5 rounded-full ${dot}`} />
      {label}
    </span>
  );
};

const TechPill = ({ name }: { name: string }) => (
  <span
    className="text-xs px-2.5 py-1 rounded-full border"
    style={{
      borderColor: "var(--palette-1000-12)",
      background: "var(--color-theme-overlay)",
    }}
  >
    {name}
  </span>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="heading-6 mb-4">{children}</h2>
);

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = (Projects as ProjectRecord[]).find((p) => p.slug === slug);
  if (!project) notFound();

  const techGroups = Object.entries(project.technologies).filter(
    ([, v]) => v && v.length > 0,
  ) as [string, string[]][];

  const dateRange = [project.startDate, project.endDate ?? "Present"]
    .filter(Boolean)
    .join(" → ");

  return (
    <>
      <Navbar isStatic />

      <main className="relative w-full min-h-dvh">
        <div className="max-w-content-mx mx-auto pb-24 mt-10 max-lg:px-4 w-full">
          <Link
            href="/project"
            className="inline-flex items-center gap-1.5 paragraph-5 mb-10 opacity-60 hover:opacity-100 transition-opacity"
          >
            <SolarAltArrowLeftBroken className="size-4 stroke-current" />
            All projects
          </Link>

          {project.featuredImage && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 bg-(--theme-surface-overlay-depth-01)">
              <Image
                src={project.featuredImage}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="heading-3">{project.title}</h1>
                <StatusBadge status={project.status} />
              </div>
              <p className="paragraph-4 max-w-2xl ">{project.summary}</p>
            </div>
 
            <div className="flex gap-3 flex-wrap shrink-0">
              {project.urls.map((url, i) => (
                <a
                  key={i}
                  href={url.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants.base,
                    url.isPrimary
                      ? buttonVariants.variants.primary
                      : buttonVariants.variants.secondary,
                    "group inline-flex items-center gap-2",
                  )}
                >
                  {url.label}
                  <SolarArrowRightUpBroken
                    className={cn(
                      "size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                      url.isPrimary
                        ? buttonVariants.iconVariants.primaryStroke
                        : buttonVariants.iconVariants.secondaryStroke,
                    )}
                  />
                </a>
              ))}
            </div>
          </div>
 
          <div
            className="flex flex-wrap gap-x-8 gap-y-2 paragraph-5  mb-12 pb-12 border-b-2 border-theme-border"
          >
            <span>
              <span className="font-medium">Role</span> · {project.role}
            </span>
            <span>
              <span className="font-medium">Period</span> · {dateRange}
            </span>
            {project.tags.length > 0 && (
              <span>
                <span className="font-medium">Tags</span> ·{" "}
                {project.tags.join(", ")}
              </span>
            )}
          </div>
 
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12"> 
            <div className="flex flex-col gap-12">
              {project.description && (
                <section>
                  <SectionHeading>Overview</SectionHeading>
                  <p className="paragraph-4 leading-relaxed">
                    {project.description}
                  </p>
                </section>
              )}

              {project.challenge && (
                <section>
                  <SectionHeading>Challenge</SectionHeading>
                  <p className="paragraph-4 leading-relaxed">
                    {project.challenge}
                  </p>
                </section>
              )}

              {project.solution && (
                <section>
                  <SectionHeading>Solution</SectionHeading>
                  <p className="paragraph-4 leading-relaxed">
                    {project.solution}
                  </p>
                </section>
              )}

              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <section>
                  <SectionHeading>Key features</SectionHeading>
                  <ul className="flex flex-col gap-2">
                    {project.keyFeatures.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 paragraph-4"
                      >
                        <span className="mt-1.5 size-1.5 rounded-full bg-current shrink-0 opacity-40" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.results && project.results.length > 0 && (
                <section>
                  <SectionHeading>Results</SectionHeading>
                  <ul className="flex flex-col gap-2">
                    {project.results.map((r, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 paragraph-4"
                      >
                        <span className="mt-1.5 size-1.5 rounded-full bg-current shrink-0 opacity-40" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
 
              {project.images && project.images.length > 0 && (
                <section>
                  <SectionHeading>Gallery</SectionHeading>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.images.map((src, i) => (
                      <div
                        key={i}
                        className="relative aspect-video rounded-xl overflow-hidden"
                        style={{
                          background: "var(--color-theme-overlay)",
                        }}
                      >
                        <Image
                          src={src}
                          alt={`${project.title} screenshot ${i + 1}`}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right — sidebar */}
            <aside className="flex flex-col gap-8">
              {techGroups.length > 0 && (
                <div>
                  <SectionHeading>Tech stack</SectionHeading>
                  <div className="flex flex-col gap-4">
                    {techGroups.map(([group, items]) => (
                      <div key={group}>
                        <p className="paragraph-5 font-medium capitalize opacity-50 mb-2">
                          {group}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {items.map((t) => (
                            <TechPill key={t} name={t} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.metrics?.name.trim() && (
                <div>
                  <SectionHeading>{project.metrics.name}</SectionHeading>
                  <p className="heading-4">
                    {project.metrics.count.toLocaleString()}
                  </p>
                </div>
              )}

              {/* All links */}
              <div>
                <SectionHeading>Links</SectionHeading>
                <div className="flex flex-col gap-2">
                  {project.urls.map((url, i) => (
                    <a
                      key={i}
                      href={url.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-between gap-2 paragraph-4 py-2 border-b transition-opacity hover:opacity-70"
                      style={{
                        borderColor: "var(--palette-1000-12)",
                      }}
                    >
                      {url.label}
                      <SolarArrowRightUpBroken className="size-4 stroke-current transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProjectPage;

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
 
const projectList = Projects as ProjectRecord[];

function getProjectBySlug(slug: string): ProjectRecord | undefined {
  return projectList.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return projectList.map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.metaTitle ?? `${project.title} | Portfolio`,
    description: project.metaDescription ?? project.summary,
    keywords: project.keywords,
    openGraph: {
      images: project.ogImage ? [{ url: project.ogImage }] : [],
    },
  };
}
 
const StatusBadge = ({ status }: { status: ProjectRecord["status"] }) => {
  const map = {
    completed: { label: "Completed", dot: "bg-emerald-400" },
    "in-progress": { label: "In Progress", dot: "bg-amber-400" },
    maintenance: { label: "Maintenance", dot: "bg-sky-400" },
  } as const;

  const { label, dot } = map[status] ?? map.completed;

  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border border-theme-border bg-theme-surface-variant">
      <span className={cn("size-1.5 rounded-full", dot)} />
      {label}
    </span>
  );
};

const TechPill = ({ name }: { name: string }) => (
  <span className="text-xs px-2.5 py-1 rounded-full border border-theme-border bg-theme-surface-overlay">
    {name}
  </span>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="heading-6 mb-4 font-semibold text-theme-on-surface">
    {children}
  </h2>
);

const ProjectPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const techGroups = Object.entries(project.technologies).filter(
    ([, v]) => v && v.length > 0,
  ) as [string, string[]][];

  const dateRange = [project.startDate, project.endDate ?? "Present"]
    .filter(Boolean)
    .join(" — ");

  return (
    <>
      <Navbar isStatic />

      <main className="relative w-full min-h-screen transform-gpu">
        <div className="max-w-content-mx mx-auto pb-24 mt-10 px-4 sm:px-6 lg:px-8 w-full">
          {/* Back Navigation */}
          <Link
            href="/project"
            className="group inline-flex items-center gap-1.5 paragraph-5 mb-10 opacity-60 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary rounded"
          >
            <SolarAltArrowLeftBroken className="size-4 stroke-current transition-transform duration-200 group-hover:-translate-x-0.5" />
            All projects
          </Link>

          {/* Hero Featured Image Container */}
          {project.featuredImage && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 bg-theme-surface-depth border border-theme-border shadow-md">
              <Image
                src={project.featuredImage}
                alt={`${project.title} Banner`}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-top hover:scale-[1.01] transition-transform duration-700 ease-out"
              />
            </div>
          )}

          {/* Title Header Block */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="heading-3 text-theme-on-surface font-bold">
                  {project.title}
                </h1>
                <StatusBadge status={project.status} />
              </div>
              <p className="paragraph-4 max-w-2xl text-theme-on-surface-variant">
                {project.summary}
              </p>
            </div>

            {/* Action Call to Actions */}
            <div className="flex gap-3 flex-wrap shrink-0 items-center">
              {project.urls.map((url, i) => {
                const isPrimary = url.isPrimary;
                return (
                  <a
                    key={i}
                    href={url.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants.base,
                      isPrimary
                        ? buttonVariants.variants.primary
                        : buttonVariants.variants.secondary,
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary",
                    )}
                  >
                    {url.label}
                    <SolarArrowRightUpBroken
                      className={cn(
                        "size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                        isPrimary
                          ? buttonVariants.iconVariants.primaryStroke
                          : buttonVariants.iconVariants.secondaryStroke,
                      )}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Metadata Meta Strip */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 paragraph-5 mb-12 pb-8 border-b border-theme-border text-theme-on-surface-variant">
            <span>
              <span className="font-semibold text-theme-on-surface">Role</span>{" "}
              · {project.role}
            </span>
            <span>
              <span className="font-semibold text-theme-on-surface">
                Period
              </span>{" "}
              · {dateRange}
            </span>
            {project.tags?.length > 0 && (
              <span>
                <span className="font-semibold text-theme-on-surface">
                  Tags
                </span>{" "}
                · {project.tags.join(", ")}
              </span>
            )}
          </div>

          {/* Main Layout Grid split */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
            <div className="flex flex-col gap-12">
              {project.description && (
                <section aria-label="Project Overview">
                  <SectionHeading>Overview</SectionHeading>
                  <p className="paragraph-4 leading-relaxed text-theme-on-surface-variant">
                    {project.description}
                  </p>
                </section>
              )}

              {project.challenge && (
                <section aria-label="Project Challenges">
                  <SectionHeading>Challenge</SectionHeading>
                  <p className="paragraph-4 leading-relaxed text-theme-on-surface-variant">
                    {project.challenge}
                  </p>
                </section>
              )}

              {project.solution && (
                <section aria-label="Project Solutions">
                  <SectionHeading>Solution</SectionHeading>
                  <p className="paragraph-4 leading-relaxed text-theme-on-surface-variant">
                    {project.solution}
                  </p>
                </section>
              )}

              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <section aria-label="Key Features">
                  <SectionHeading>Key features</SectionHeading>
                  <ul className="grid grid-cols-1 gap-3">
                    {project.keyFeatures.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 paragraph-4 text-theme-on-surface-variant"
                      >
                        <span className="mt-2 size-1.5 rounded-full bg-theme-primary shrink-0 opacity-70" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.results && project.results.length > 0 && (
                <section aria-label="Project Results">
                  <SectionHeading>Results</SectionHeading>
                  <ul className="grid grid-cols-1 gap-3">
                    {project.results.map((r, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 paragraph-4 text-theme-on-surface-variant"
                      >
                        <span className="mt-2 size-1.5 rounded-full bg-theme-success shrink-0 opacity-70" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.images && project.images.length > 0 && (
                <section aria-label="Project Gallery">
                  <SectionHeading>Gallery</SectionHeading>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.images.map((src, i) => (
                      <div
                        key={i}
                        className="relative aspect-video rounded-xl overflow-hidden bg-theme-surface-depth border border-theme-border shadow-sm group"
                      >
                        <Image
                          src={src}
                          alt={`${project.title} screenshot ${i + 1}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                          className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar Columns */}
            <aside className="flex flex-col gap-8 lg:sticky lg:top-24">
              {techGroups.length > 0 && (
                <div className="p-6 rounded-2xl border border-theme-border bg-theme-surface-depth/30">
                  <SectionHeading>Tech stack</SectionHeading>
                  <div className="flex flex-col gap-4">
                    {techGroups.map(([group, items]) => (
                      <div key={group}>
                        <p className="text-xs font-semibold tracking-wider uppercase text-theme-on-surface-variant opacity-60 mb-2">
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

              {project.metrics?.name?.trim() && (
                <div className="p-6 rounded-2xl border border-theme-border bg-theme-surface-depth/30">
                  <SectionHeading>{project.metrics.name}</SectionHeading>
                  <p className="heading-2 font-bold tracking-tight text-theme-primary">
                    {project.metrics.count.toLocaleString()}
                  </p>
                </div>
              )}

              {/* Navigation Links Block */}
              <div className="p-6 rounded-2xl border border-theme-border bg-theme-surface-depth/30">
                <SectionHeading>Links</SectionHeading>
                <div className="flex flex-col gap-1">
                  {project.urls.map((url, i) => (
                    <a
                      key={i}
                      href={url.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-2 paragraph-4 py-2.5 border-b border-theme-border/50 text-theme-on-surface-variant hover:text-theme-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-theme-primary last:border-b-0"
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

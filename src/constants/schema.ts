import { PORTFOLIO_URL, OWNER_NAME, PORTFOLIO_EMAIL } from "@/constants/meta";

export const getUnifiedSchema = () => {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${PORTFOLIO_URL}/#person`,
        name: OWNER_NAME,
        url: PORTFOLIO_URL,
        image: `${PORTFOLIO_URL}/og-image.webp`,
        email: PORTFOLIO_EMAIL,
        description:
          "Full-Stack and Android Engineer specializing in Next.js, TypeScript, React Native, and scalable system architectures.",
        jobTitle: "Android Developer Intern",
        nationality: {
          "@type": "Country",
          name: "India",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.npmjs.com/~nikhil07k",
          "https://github.com/nikhilKatkuri",
          "https://www.linkedin.com/in/katkurinikhil",
        ],
        knowsAbout: [
          "Full-Stack Development",
          "Next.js",
          "TypeScript",
          "React Native",
          "Node.js",
          "Express.js",
          "MongoDB",
          "AI Integration",
          "LLM Applications",
          "SaaS Development",
          "Developer Tooling",
          "Tailwind CSS",
          "SaaS Architecture",
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "HITM",
        },
        worksFor: {
          "@type": "Organization",
          name: "Galactix Solutions Pvt. Ltd.",
        },
        hasOccupation: {
          "@type": "Occupation",
          name: "Android Developer Intern",
          occupationLocation: {
            "@type": "City",
            name: "Hyderabad",
          },
        },
      },

      {
        "@type": "WebSite",
        "@id": `${PORTFOLIO_URL}/#website`,
        url: PORTFOLIO_URL,
        name: `${OWNER_NAME} Portfolio`,
        description:
          "Building scalable full-stack applications and developer tools with modern technologies.",
        publisher: {
          "@id": `${PORTFOLIO_URL}/#person`,
        },
      },
    ],
  };
};
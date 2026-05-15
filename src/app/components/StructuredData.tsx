import {
  CONTACT_INFO,
  SEO_DESCRIPTION,
  SEO_JOB_TITLE,
  SEO_LOCATION,
  SITE_URL,
} from "@/app/constants";
import { SOCIAL_PLATFORMS } from "@/app/components/Navbar/constants";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const sameAs = SOCIAL_PLATFORMS.map((p) => p.link).filter(
  (link) => !link.startsWith("mailto:"),
);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: CONTACT_INFO.name,
      givenName: "Ashikur",
      familyName: "Rahman",
      url: SITE_URL,
      image: `${SITE_URL}/bio_dp.png`,
      email: CONTACT_INFO.email,
      jobTitle: SEO_JOB_TITLE,
      homeLocation: {
        "@type": "Place",
        name: SEO_LOCATION,
      },
      nationality: {
        "@type": "Country",
        name: "Canada",
      },
      worksFor: {
        "@type": "Organization",
        name: "Nokia",
        url: "https://www.nokia.com/",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Ahsanullah University of Science and Technology",
        },
        { "@type": "Organization", name: "Enosis Solutions" },
        { "@type": "Organization", name: "SammTech" },
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Bachelor's degree",
        name: "Bachelor in Computer Science and Engineering",
        educationalLevel: "Bachelor's degree",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "Ahsanullah University of Science and Technology",
        },
      },
      award: [
        "ICPC Dhaka Regional 2020 – 23rd of 110 teams",
        "Red.Digital Digi-Thor Programming Contest – 2nd runner-up",
        "Intra AUST Programming Contest Spring 2019 – Champion",
        "EDU Inter-University Programming Contest – 4th of 100 teams",
      ],
      knowsAbout: [
        "Embedded Systems",
        "Software Development",
        "Data Structures",
        "Algorithms",
        "C++",
        "Rust",
        "Python",
        "Docker",
        "CI/CD",
        "REST APIs",
        "Django REST framework",
        "React",
        "Node.js",
        "Competitive Programming",
        "Linux",
        "Bash",
        "Git",
      ],
      sameAs,
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      name: `${CONTACT_INFO.name} – Portfolio`,
      url: SITE_URL,
      description: SEO_DESCRIPTION,
      mainEntity: { "@id": PERSON_ID },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: CONTACT_INFO.name,
      url: SITE_URL,
      description: SEO_DESCRIPTION,
      publisher: { "@id": PERSON_ID },
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      type="application/ld+json"
    />
  );
}

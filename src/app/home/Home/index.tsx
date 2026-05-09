import Contact from "@/app/contact/Contact";
import WorkExperience from "@/app/experience/WorkExperience";

import HeroIllustration from "./HeroIllustration";
import HeroSection from "./HeroSection";
import TechStrip from "./TechStrip";

const SECTION_SCROLL =
  "scroll-mt-24 lg:scroll-mt-28";

export default function Home() {
  return (
    <main>
      <section
        aria-label="Introduction"
        className={`page-container pb-8 pt-8 lg:pb-16 lg:pt-12 ${SECTION_SCROLL}`}
        id="top"
      >
        <div
          className={
            "grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,1.14fr)] " +
            "lg:gap-14 xl:gap-16"
          }
        >
          <div className="order-1 min-w-0 lg:order-none">
            <HeroSection />
          </div>
          <div className="order-2 min-w-0">
            <HeroIllustration />
          </div>
        </div>
      </section>
      <TechStrip />
      <WorkExperience />
      <Contact />
    </main>
  );
}

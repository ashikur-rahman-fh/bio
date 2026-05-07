import HeroIllustration from "./HeroIllustration";
import HeroSection from "./HeroSection";
import TechStrip from "./TechStrip";
import BlogTeaser from "./BlogTeaser";

export default function Home() {
  return (
    <main>
      <section className="page-container pb-12 pt-8 lg:pb-20 lg:pt-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 lg:order-none">
            <HeroSection />
          </div>
          <div className="order-2">
            <HeroIllustration />
          </div>
        </div>
        <TechStrip />
      </section>
      <BlogTeaser />
    </main>
  );
}

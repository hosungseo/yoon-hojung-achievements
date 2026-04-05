import Hero from "@/components/Hero";
import ScrollNav from "@/components/ScrollNav";
import CategorySection from "@/components/CategorySection";
import Quote from "@/components/Quote";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import { categories } from "@/data/achievements";

export default function HomePage() {
  return (
    <main className="relative">
      <ScrollNav />
      <Hero />

      {/* Achievements sections */}
      <section id="achievements">
        {categories.slice(0, 3).map((c, i) => (
          <CategorySection key={c.id} category={c} index={i} />
        ))}
      </section>

      <Quote />

      <section>
        {categories.slice(3).map((c, i) => (
          <CategorySection key={c.id} category={c} index={i + 3} />
        ))}
      </section>

      <Timeline />
      <Footer />
    </main>
  );
}

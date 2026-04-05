import Hero from "@/components/Hero";
import ScrollNav from "@/components/ScrollNav";
import SearchOverlay from "@/components/SearchOverlay";
import CategorySection from "@/components/CategorySection";
import CategoryTimeline from "@/components/layouts/CategoryTimeline";
import CategoryBigNumber from "@/components/layouts/CategoryBigNumber";
import CategoryMapMerge from "@/components/layouts/CategoryMapMerge";
import CategoryPhoneDemo from "@/components/layouts/CategoryPhoneDemo";
import CategoryGauge from "@/components/layouts/CategoryGauge";
import ImpactNumber from "@/components/ImpactNumber";
import Quote from "@/components/Quote";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import { categories, type Category } from "@/data/achievements";

// Render the right layout variant per category
function CategoryRenderer({ category, index }: { category: Category; index: number }) {
  switch (category.id) {
    case "gov-reform":
      return <CategoryTimeline category={category} />;
    case "livelihood-recovery":
      return <CategoryBigNumber category={category} />;
    case "decentralization":
      return <CategoryMapMerge category={category} />;
    case "ai-democracy":
      return <CategoryPhoneDemo category={category} />;
    case "public-safety":
      return <CategoryGauge category={category} />;
    default:
      return <CategorySection category={category} index={index} />;
  }
}

export default function HomePage() {
  const catMap = Object.fromEntries(categories.map((c) => [c.id, c]));

  return (
    <main className="relative">
      <ScrollNav />
      <SearchOverlay />
      <Hero />

      {/* 01 정부혁신 → 02 민생회복 사이 Impact */}
      <section id="achievements">
        <CategoryRenderer category={catMap["gov-reform"]} index={0} />
      </section>

      <ImpactNumber
        number="9"
        unit="조원+"
        caption="4,900만 국민의 일상에 닿은 민생회복 소비쿠폰"
        subcaption="2025년 3분기 GDP 성장률 1.3% 기여 · 소비자심리지수 111.4"
        bg="bg-black"
        accent="text-orange-300"
      />

      <CategoryRenderer category={catMap["livelihood-recovery"]} index={1} />

      {/* 03 지방의 미래 앞 Impact */}
      <ImpactNumber
        number="40"
        unit="년"
        caption="광주와 전남이 다시 하나가 됩니다"
        subcaption="2026년 7월 1일 · 전남광주통합특별시 · 인구 320만 · 1호 통합특별시"
        bg="bg-[#061f17]"
        accent="text-emerald-300"
      />

      <CategoryRenderer category={catMap["decentralization"]} index={2} />

      {/* 메시지 */}
      <Quote />

      <CategoryRenderer category={catMap["ai-democracy"]} index={3} />

      {/* 05 국민 안전 앞 Impact */}
      <ImpactNumber
        number="3"
        unit="개월"
        caption="647개 정부 시스템을 다시 세웠습니다"
        subcaption="2025.09.26 국가정보자원관리원 화재 → 2025.12.30 전면 복구 완료"
        bg="bg-[#1a0505]"
        accent="text-red-300"
      />

      <CategoryRenderer category={catMap["public-safety"]} index={4} />

      {/* 06, 07은 기본 그리드 레이아웃 */}
      <CategoryRenderer category={catMap["democracy-restoration"]} index={5} />
      <CategoryRenderer category={catMap["new-ministry"]} index={6} />

      <Timeline />
      <Footer />
    </main>
  );
}

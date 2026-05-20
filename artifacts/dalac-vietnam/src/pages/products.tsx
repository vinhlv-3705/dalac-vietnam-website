import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

export default function Products() {
  const { t } = useLanguage();

  return (
    <div className="w-full pb-24">
      {/* HEADER */}
      <section className="bg-[#070F24] pt-32 pb-16 relative overflow-hidden border-b-2 border-[#C0151A]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="w-20 h-2 bg-[#C9A84C] mb-8"></div>
          <h1 className="font-display text-6xl md:text-8xl text-[#EDE5D0] mb-4">
            {t("PRODUCTS", "SẢN PHẨM")}
          </h1>
          <p className="font-sans text-[#C9A84C] tracking-widest uppercase md:text-lg">
            {t("Industrial Materials · Marine Equipment", "Vật tư công nghiệp · Thiết bị hàng hải")}
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="flex flex-wrap gap-4 mb-16">
          <CategoryChip en="MARINE PAINTS" vi="Sơn tàu biển" active />
          <CategoryChip en="ANTI-CORROSION COATING" vi="Sơn chống ăn mòn" />
          <CategoryChip en="EPOXY SYSTEMS" vi="Hệ thống sơn epoxy" />
          <CategoryChip en="MARINE EQUIPMENT" vi="Thiết bị tàu biển" />
          <CategoryChip en="FERTILIZER RAW MATERIALS" vi="Nguyên liệu phân bón" />
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <ProductBox id="01" />
          <ProductBox id="02" />
          <ProductBox id="03" />
          <ProductBox id="04" />
        </div>

        {/* STRATEGIC PARTNERSHIP */}
        <div className="bg-[#070F24] border-2 border-[#C9A84C] p-8 md:p-16 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-full bg-[#0D1B3E] clip-diagonal opacity-50 z-0"></div>
          <div className="absolute top-4 right-4 w-4 h-4 bg-[#C0151A]"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#C0151A]"></div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="font-sans font-bold text-[#C0151A] tracking-[0.2em] text-sm mb-4 uppercase">
              {t("STRATEGIC PARTNERSHIP", "HỢP TÁC CHIẾN LƯỢC")}
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#C9A84C] mb-6">
              {t("IN ADVANCED DISCUSSIONS WITH VIETSOVPETRO", "ĐANG THẢO LUẬN HỢP TÁC CÙNG VIETSOVPETRO")}
            </h2>
            <p className="font-serif text-[#EDE5D0] text-lg md:text-xl leading-relaxed">
              {t(
                "Da Lac Vietnam is in advanced strategic partnership discussions with Vietsovpetro's Mechanical & Energy Division — combining surface treatment technical capabilities with their established oil & gas network.",
                "Da Lac Việt Nam đang trong quá trình thảo luận hợp tác chiến lược sâu rộng với Xí nghiệp Cơ điện - Vietsovpetro — kết hợp năng lực kỹ thuật xử lý bề mặt với mạng lưới dầu khí vững chắc của họ."
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryChip({ en, vi, active = false }: { en: string, vi: string, active?: boolean }) {
  const { t } = useLanguage();
  return (
    <button className={`relative border border-[#C0151A] px-6 py-3 font-sans font-semibold tracking-wider uppercase text-sm transition-colors ${
      active ? "bg-[#C0151A] text-white" : "bg-transparent text-[#B8C4D4] hover:bg-[#C0151A]/10"
    }`}>
      {t(en, vi)}
    </button>
  );
}

function ProductBox({ id }: { id: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[4/3] border-2 border-dashed border-[#C9A84C]/50 bg-[#070F24] flex flex-col items-center justify-center mb-4 group-hover:border-[#C9A84C] group-hover:bg-[#0D1B3E] transition-all relative">
        <div className="absolute top-2 left-2 font-display text-xl text-[#C9A84C]/30 group-hover:text-[#C9A84C] transition-colors">{id}</div>
        <ImageIcon className="w-12 h-12 text-[#C9A84C]/30 mb-2 group-hover:text-[#C9A84C] transition-colors" />
        <span className="font-sans font-semibold text-[#B8C4D4] tracking-widest uppercase text-xs">Product Image</span>
      </div>
      <div className="flex justify-between items-center border-b border-[#C9A84C]/30 pb-2">
        <h4 className="font-sans font-bold text-[#EDE5D0] tracking-wider uppercase">Sample Product {id}</h4>
        <ArrowRight className="w-4 h-4 text-[#C0151A] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
      </div>
    </div>
  );
}

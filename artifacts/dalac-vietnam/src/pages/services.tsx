import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  const { t } = useLanguage();

  return (
    <div className="w-full pb-24">
      {/* HEADER */}
      <section className="bg-[#070F24] pt-32 pb-16 relative overflow-hidden border-b-2 border-[#C0151A]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0D1B3E] clip-diagonal-right opacity-50 z-0"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="w-20 h-2 bg-[#C9A84C] mb-8"></div>
          <h1 className="font-display text-6xl md:text-8xl text-[#EDE5D0] mb-4">
            {t("OUR SERVICES", "DỊCH VỤ CỦA CHÚNG TÔI")}
          </h1>
          <p className="font-sans text-[#C9A84C] tracking-widest uppercase md:text-lg">
            {t("Technical Excellence · Global Partnership", "Kỹ thuật xuất sắc · Đối tác toàn cầu")}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-4 lg:px-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN - NARROW */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -left-4 top-0 w-2 h-full bg-[#C0151A] clip-diagonal opacity-80"></div>
            
            <div className="pl-6 space-y-12">
              {/* Technical Services */}
              <div>
                <h3 className="font-display text-3xl text-[#C9A84C] mb-6 flex items-center gap-4">
                  <div className="w-4 h-4 bg-[#C0151A]"></div>
                  {t("TECHNICAL SERVICES", "DỊCH VỤ KỸ THUẬT")}
                </h3>
                <ul className="space-y-4 font-sans text-[#B8C4D4] tracking-wide uppercase text-sm">
                  <li className="flex gap-4 items-start">
                    <ArrowRight className="text-[#C0151A] shrink-0 w-5 h-5" />
                    <span>{t("Sandblasting & Painting for Gas Tanks", "Phun cát & sơn bồn chứa khí gas")}</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <ArrowRight className="text-[#C0151A] shrink-0 w-5 h-5" />
                    <span>{t("Surface Treatment for Storage Tanks", "Xử lý bề mặt kết cấu bồn bể")}</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <ArrowRight className="text-[#C0151A] shrink-0 w-5 h-5" />
                    <span>{t("Anti-Corrosion Coating - Marine Industry", "Sơn phủ chống ăn mòn ngành hàng hải")}</span>
                  </li>
                </ul>
              </div>

              {/* Project Support */}
              <div>
                <h3 className="font-display text-3xl text-[#C9A84C] mb-6 flex items-center gap-4">
                  <div className="w-4 h-4 bg-[#C0151A]"></div>
                  {t("PROJECT SUPPORT & TRADING", "HỖ TRỢ DỰ ÁN & THƯƠNG MẠI")}
                </h3>
                <ul className="space-y-4 font-sans text-[#B8C4D4] tracking-wide uppercase text-sm">
                  <li className="flex gap-4 items-start">
                    <ArrowRight className="text-[#C0151A] shrink-0 w-5 h-5" />
                    <span>{t("Industrial Export Trading", "Thương mại xuất khẩu công nghiệp")}</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <ArrowRight className="text-[#C0151A] shrink-0 w-5 h-5" />
                    <span>EPC Support (Engineering - Procurement - Construction)</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <ArrowRight className="text-[#C0151A] shrink-0 w-5 h-5" />
                    <span>{t("Joint Venture Development", "Phát triển liên doanh")}</span>
                  </li>
                </ul>
              </div>

              {/* Paint Brands */}
              <div className="bg-[#070F24] p-8 border-l-4 border-[#C9A84C]">
                <h3 className="font-display text-2xl text-[#EDE5D0] mb-4">
                  {t("PAINT BRANDS WE TRADE", "CÁC HÃNG SƠN PHÂN PHỐI")}
                </h3>
                <ul className="space-y-2 font-serif text-[#B8C4D4]">
                  <li>• International Paint (AkzoNobel)</li>
                  <li>• Jotun, KCC Paint (Korea)</li>
                  <li>• A Dong, Hai Au, The He Moi</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - WIDE */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Core Values 2x2 */}
            <div>
              <h2 className="font-sans font-bold text-[#C0151A] tracking-[0.2em] text-sm mb-8 uppercase flex items-center gap-4">
                {t("CORE VALUES", "GIÁ TRỊ CỐT LÕI")}
                <div className="h-px bg-[#C0151A] flex-1"></div>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ValueCard 
                  title={t("SAFETY", "An toàn")}
                  desc={t("Safety comes first in every operation.", "Mọi hoạt động đặt an toàn lên hàng đầu.")}
                />
                <ValueCard 
                  title={t("QUALITY", "Chất lượng")}
                  desc={t("Outstanding technical quality in every project.", "Chất lượng kỹ thuật vượt trội trong từng dự án.")}
                />
                <ValueCard 
                  title={t("PARTNERSHIP", "Hợp tác")}
                  desc={t("Long-term, transparent strategic alliances.", "Liên minh chiến lược dài hạn, minh bạch.")}
                />
                <ValueCard 
                  title={t("GROWTH", "Phát triển")}
                  desc={t("Market expansion through innovation and joint ventures.", "Mở rộng thị trường qua đổi mới và liên doanh.")}
                />
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="font-sans font-bold text-[#C0151A] tracking-[0.2em] text-sm mb-8 uppercase flex items-center gap-4">
                {t("WHY CHOOSE US", "TẠI SAO CHỌN CHÚNG TÔI")}
                <div className="h-px bg-[#C0151A] flex-1"></div>
              </h2>
              
              <div className="space-y-6">
                <ReasonRow 
                  num="01" 
                  title={t("COATING SPECIALIST - FULL CYCLE", "CHUYÊN GIA SƠN PHỦ - TOÀN DIỆN")}
                  desc={t("From sandblasting to anti-corrosion finishing.", "Từ phun cát đến hoàn thiện chống ăn mòn.")}
                />
                <ReasonRow 
                  num="02" 
                  title={t("PREMIUM PAINT ACCESS", "NGUỒN SƠN CAO CẤP")}
                  desc={t("AkzoNobel, Jotun, KCC - direct supply for marine industry.", "AkzoNobel, Jotun, KCC - cung cấp trực tiếp cho ngành hàng hải.")}
                />
                <ReasonRow 
                  num="03" 
                  title={t("OIL & GAS SECTOR ACCESS", "TIẾP CẬN NGÀNH DẦU KHÍ")}
                  desc={t("Strategic cooperation with Vietsovpetro for industrial projects.", "Hợp tác chiến lược với Vietsovpetro cho các dự án công nghiệp.")}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="container mx-auto px-4 lg:px-8 mt-24">
        <div className="bg-[#C0151A] p-12 flex flex-col md:flex-row items-center justify-between relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#8A0E12] clip-diagonal translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
          
          <div>
            <h3 className="font-display text-4xl text-[#C9A84C] mb-2">{t("START YOUR PROJECT", "BẮT ĐẦU DỰ ÁN CỦA BẠN")}</h3>
            <p className="font-sans font-semibold text-[#EDE5D0] tracking-widest uppercase">{t("Contact our engineering team", "Liên hệ đội ngũ kỹ sư của chúng tôi")}</p>
          </div>
          
          <Link href="/contact" className="mt-8 md:mt-0 bg-[#070F24] px-8 py-4 border border-[#C9A84C] text-[#C9A84C] font-sans font-bold tracking-[0.2em] uppercase hover:bg-[#C9A84C] hover:text-[#070F24] transition-colors inline-flex items-center gap-3">
            {t("CONTACT US", "LIÊN HỆ NGAY")}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="border border-[#C9A84C] bg-[#070F24] p-8 relative hover:bg-[#C9A84C]/5 transition-colors">
      <div className="absolute top-0 right-0 w-3 h-3 bg-[#C0151A]"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#C0151A]"></div>
      <h4 className="font-display text-2xl text-[#C9A84C] mb-3">{title}</h4>
      <p className="font-serif text-[#B8C4D4] leading-relaxed">{desc}</p>
    </div>
  );
}

function ReasonRow({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="flex gap-6 items-start group">
      <div className="w-16 h-16 shrink-0 bg-[#070F24] border border-[#C0151A] flex items-center justify-center relative overflow-hidden group-hover:bg-[#C0151A] transition-colors">
        <div className="absolute inset-1 border border-[#C0151A]/30 group-hover:border-white/30"></div>
        <span className="font-display text-2xl text-[#C0151A] group-hover:text-white relative z-10">{num}</span>
      </div>
      <div>
        <h4 className="font-sans font-bold text-[#EDE5D0] tracking-wider uppercase mb-2 group-hover:text-[#C9A84C] transition-colors">{title}</h4>
        <p className="font-serif text-[#B8C4D4]">{desc}</p>
      </div>
    </div>
  );
}

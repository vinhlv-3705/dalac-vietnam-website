import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Ship, Factory } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* SECTION 1 - HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#0D1B3E]">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#C0151A] clip-diagonal-right opacity-90 z-0"></div>
        <div className="absolute top-10 right-10 w-[600px] h-[600px] rounded-full border border-[#C9A84C]/20 z-0"></div>
        <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full border border-[#C9A84C]/30 z-0"></div>
        
        {/* Vertical Text */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 font-sans text-[#EDE5D0]/50 tracking-[0.3em] uppercase text-sm rotate-90 origin-right hidden lg:block z-10 whitespace-nowrap">
          INDUSTRIAL SERVICES · MARINE TRADING · PROJECT DEVELOPMENT
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8 py-20">
          <div className="mb-12">
            <div className="w-20 h-2 bg-[#C9A84C] mb-8"></div>
            
            <h1 className="font-display text-[5rem] md:text-[7rem] lg:text-[9rem] leading-[0.85] flex flex-col">
              <span className="text-[#EDE5D0] ml-0 transition-all duration-700 hover:ml-4">
                PROTECTING
              </span>
              <span className="text-[#EDE5D0] ml-10 transition-all duration-700 hover:ml-14">
                INDUSTRIAL ASSETS
              </span>
              <span className="text-[#C9A84C] ml-0 transition-all duration-700 hover:ml-4">
                EXPANDING
              </span>
              <span className="text-[#EDE5D0] ml-[60px] transition-all duration-700 hover:ml-[75px]">
                GLOBAL MARKETS
              </span>
            </h1>
          </div>

          <p className="font-sans font-light text-xl md:text-2xl text-[#B8C4D4] tracking-widest uppercase max-w-2xl border-l-4 border-[#C0151A] pl-4">
            Bảo vệ tài sản công nghiệp - Mở rộng thị trường toàn cầu
          </p>
        </div>
      </section>

      {/* SECTION 2 - 3 PILLARS */}
      <section className="bg-[#070F24] border-y border-[#C9A84C]/30">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#C9A84C]/30">
          <Pillar 
            icon={<Factory size={32} className="text-[#C0151A]" />}
            enTitle="INDUSTRIAL SERVICES"
            viTitle="Dịch vụ công nghiệp"
          />
          <Pillar 
            icon={<Ship size={32} className="text-[#C0151A]" />}
            enTitle="MARINE TRADING"
            viTitle="Thương mại hàng hải"
          />
          <Pillar 
            icon={<ShieldCheck size={32} className="text-[#C0151A]" />}
            enTitle="PROJECT DEVELOPMENT"
            viTitle="Phát triển dự án"
          />
        </div>
      </section>

      {/* SECTION 3 - ABOUT SNIPPET */}
      <section className="py-24 container mx-auto px-4 lg:px-8 relative">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-sans font-bold text-[#C0151A] tracking-[0.2em] text-sm md:text-base whitespace-nowrap">
            ABOUT US / GIỚI THIỆU
          </h2>
          <div className="h-px bg-[#C0151A] w-full max-w-[200px]"></div>
          <div className="w-2 h-2 bg-[#C9A84C]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative">
          <div className="absolute -left-4 -top-4 w-8 h-8 border-t-2 border-l-2 border-[#C9A84C]"></div>
          <div className="absolute -right-4 -bottom-4 w-8 h-8 border-b-2 border-r-2 border-[#C9A84C]"></div>
          
          <div className="font-serif text-xl md:text-2xl leading-relaxed text-[#EDE5D0]">
            Da Lac Vietnam Co., Ltd is a dynamic industrial services and export trading company based in Dong Nai Province, Vietnam. We specialize in surface treatment, anti-corrosion coating for gas tanks, storage tanks, and marine vessels — combining technical excellence with global trading capability.
          </div>
          
          <div className="font-serif text-xl md:text-2xl leading-relaxed text-[#B8C4D4]">
            Công ty TNHH Da Lac Việt Nam là một công ty dịch vụ công nghiệp và thương mại xuất khẩu năng động có trụ sở tại tỉnh Đồng Nai, Việt Nam. Chúng tôi chuyên về xử lý bề mặt, sơn chống ăn mòn cho bồn chứa khí, bồn chứa và tàu biển — kết hợp sự xuất sắc về kỹ thuật với năng lực thương mại toàn cầu.
          </div>
        </div>
      </section>

      {/* SECTION 4 - PERFORMANCE STATS */}
      <section className="py-24 bg-[#070F24] relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-sans font-bold text-[#C9A84C] tracking-[0.2em] text-sm md:text-base mb-16 uppercase">
            PERFORMANCE / THÀNH TÍCH
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatBlock endValue={50} suffix="+" enLabel="Projects Done" viLabel="Dự án hoàn thành" />
            <StatBlock endValue={200} suffix="K m2" enLabel="Surface Treated" viLabel="Diện tích xử lý bề mặt" />
            <StatBlock endValue={80} suffix="+" enLabel="Vessels & Tanks" viLabel="Tàu & bồn đã phục vụ" />
            <StatBlock endValue={5} suffix="+" enLabel="Core Industries" viLabel="Ngành trọng tâm" />
          </div>
        </div>
      </section>

      {/* SECTION 5 - CORE INDUSTRIES */}
      <section className="py-24 container mx-auto px-4 lg:px-8">
        <h2 className="font-sans font-bold text-[#B8C4D4] tracking-[0.2em] text-sm md:text-base mb-16 uppercase">
          CORE INDUSTRIES / NGÀNH TRỌNG TÂM
        </h2>

        <div className="flex flex-wrap gap-4">
          <IndustryChip en="OIL & GAS" vi="Dầu khí" />
          <IndustryChip en="MARITIME & SHIPBUILDING" vi="Hàng hải & đóng tàu" />
          <IndustryChip en="HEAVY INDUSTRY" vi="Công nghiệp nặng" />
          <IndustryChip en="MARINE EQUIPMENT" vi="Thiết bị tàu biển" />
          <IndustryChip en="FERTILIZER RAW MATERIALS" vi="Nguyên liệu phân bón" />
        </div>
      </section>

      {/* SECTION 6 - CTA BANNER */}
      <section className="bg-[#C0151A] clip-diagonal text-[#070F24] py-32 relative group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-10 md:mb-0">
            <h2 className="font-display text-5xl md:text-7xl text-[#C9A84C] mb-2 leading-none">
              READY TO WORK TOGETHER?
            </h2>
            <p className="font-sans text-xl font-bold tracking-widest text-[#EDE5D0] uppercase">
              Liên hệ với chúng tôi để được tư vấn
            </p>
          </div>
          
          <Link href="/contact" className="group/btn relative overflow-hidden bg-[#070F24] px-10 py-6 border-2 border-[#C9A84C] font-sans font-bold text-[#C9A84C] tracking-[0.2em] uppercase transition-all hover:bg-[#C9A84C] hover:text-[#070F24] inline-flex items-center gap-4">
            <span className="relative z-10">CONTACT US</span>
            <ArrowRight className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
            <div className="absolute top-0 left-0 w-2 h-2 bg-[#C0151A]"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#C0151A]"></div>
          </Link>
        </div>
      </section>
    </div>
  );
}

function Pillar({ icon, enTitle, viTitle }: { icon: React.ReactNode, enTitle: string, viTitle: string }) {
  return (
    <div className="p-12 flex flex-col items-start group hover:bg-[#0D1B3E] transition-colors relative">
      <div className="absolute top-0 right-0 w-4 h-4 bg-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="mb-6">{icon}</div>
      <h3 className="font-sans font-semibold text-xl tracking-wider text-[#C9A84C] uppercase mb-2">
        {enTitle}
      </h3>
      <p className="font-sans font-light tracking-widest text-[#B8C4D4] uppercase text-sm">
        {viTitle}
      </p>
    </div>
  );
}

function StatBlock({ endValue, suffix, enLabel, viLabel }: { endValue: number, suffix: string, enLabel: string, viLabel: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = endValue / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setValue(endValue);
          clearInterval(timer);
        } else {
          setValue(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, endValue]);

  return (
    <div ref={ref} className="bg-[#8A0E12]/10 border-l-4 border-[#C0151A] p-8 relative group">
      <div className="absolute right-2 bottom-2 w-2 h-2 bg-[#C9A84C] opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="font-display text-6xl md:text-7xl text-[#C9A84C] mb-4 flex items-end">
        {value}
        <span className="text-3xl ml-1 text-[#C0151A]">{suffix}</span>
      </div>
      <div className="font-sans font-semibold tracking-wider text-[#EDE5D0] uppercase text-sm mb-1">
        {enLabel}
      </div>
      <div className="font-sans font-light tracking-wider text-[#B8C4D4] uppercase text-xs">
        {viLabel}
      </div>
    </div>
  );
}

function IndustryChip({ en, vi }: { en: string, vi: string }) {
  const { t } = useLanguage();
  return (
    <div className="relative border border-[#C9A84C] px-6 py-4 bg-[#070F24] hover:bg-[#C9A84C]/10 transition-colors cursor-default group">
      <div className="absolute top-0 right-0 w-2 h-2 bg-[#C9A84C]"></div>
      <span className="font-sans font-semibold tracking-[0.15em] text-[#EDE5D0] uppercase text-sm">
        {t(en, vi)}
      </span>
    </div>
  );
}

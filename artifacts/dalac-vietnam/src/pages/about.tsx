import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="w-full pb-24">
      {/* HEADER */}
      <section className="bg-[#070F24] pt-32 pb-16 relative overflow-hidden border-b-2 border-[#C0151A]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full border-[20px] border-[#0D1B3E] -translate-y-1/2 translate-x-1/4 z-0"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="w-20 h-2 bg-[#C9A84C] mb-8"></div>
          <h1 className="font-display text-6xl md:text-8xl text-[#EDE5D0] mb-4">
            {t("ABOUT US", "GIỚI THIỆU")}
          </h1>
          <p className="font-sans text-[#C9A84C] tracking-widest uppercase md:text-lg">
            {t("Protecting Assets · Expanding Markets", "Bảo vệ tài sản · Mở rộng thị trường")}
          </p>
        </div>
      </section>

      {/* TWO COLUMN ABOUT */}
      <section className="container mx-auto px-4 lg:px-8 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#C9A84C]/20 hidden md:block"></div>
          
          <div className="space-y-8 pr-0 md:pr-8">
            <h2 className="font-sans font-bold text-[#C0151A] tracking-[0.2em] text-sm uppercase">
              ENGLISH
            </h2>
            <div className="font-serif text-lg md:text-xl text-[#EDE5D0] leading-relaxed">
              <strong className="font-sans text-[#C9A84C] tracking-wider uppercase block mb-4 text-2xl">Da Lac Vietnam Co., Ltd</strong>
              <p className="mb-4">(Tax code: 3603806518) is an industrial services and marine trading company headquartered in Trang Bom District, Dong Nai Province, Vietnam.</p>
              <p>Founded with a mission to protect industrial assets and expand global markets, we deliver specialized surface treatment, anti-corrosion coating, and export trading services across the oil & gas, maritime, heavy industry, and fertilizer sectors.</p>
            </div>
          </div>
          
          <div className="space-y-8 pl-0 md:pl-8">
            <h2 className="font-sans font-bold text-[#C0151A] tracking-[0.2em] text-sm uppercase">
              TIẾNG VIỆT
            </h2>
            <div className="font-serif text-lg md:text-xl text-[#B8C4D4] leading-relaxed">
              <strong className="font-sans text-[#C9A84C] tracking-wider uppercase block mb-4 text-2xl">Công ty TNHH Da Lac Việt Nam</strong>
              <p className="mb-4">(MST: 3603806518) là công ty dịch vụ công nghiệp và thương mại hàng hải có trụ sở chính tại Huyện Trảng Bom, Tỉnh Đồng Nai, Việt Nam.</p>
              <p>Được thành lập với sứ mệnh bảo vệ tài sản công nghiệp và mở rộng thị trường toàn cầu, chúng tôi cung cấp các dịch vụ xử lý bề mặt chuyên dụng, sơn phủ chống ăn mòn và thương mại xuất khẩu trong các lĩnh vực dầu khí, hàng hải, công nghiệp nặng và phân bón.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATION STRIP */}
      <section className="mt-24 border-y border-[#C9A84C]/30 bg-[#070F24]">
        <div className="container mx-auto px-4 lg:px-8 py-8 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="font-sans font-bold tracking-[0.2em] text-[#C9A84C] uppercase flex items-center gap-4">
            <div className="w-2 h-2 bg-[#C0151A]"></div>
            ISO 9001:2015
          </div>
          <div className="w-px h-8 bg-[#C9A84C]/30 hidden md:block"></div>
          <div className="font-sans font-bold tracking-[0.2em] text-[#C9A84C] uppercase flex items-center gap-4">
            <div className="w-2 h-2 bg-[#C0151A]"></div>
            TECHNICAL CERTIFICATION
          </div>
          <div className="w-px h-8 bg-[#C9A84C]/30 hidden md:block"></div>
          <div className="font-sans font-bold tracking-[0.2em] text-[#C9A84C] uppercase flex items-center gap-4">
            <div className="w-2 h-2 bg-[#C0151A]"></div>
            MST: 3603806518
          </div>
        </div>
      </section>

      {/* DIRECTOR CARD */}
      <section className="container mx-auto px-4 lg:px-8 mt-24">
        <div className="max-w-2xl mx-auto">
          <div className="font-sans font-bold text-[#C0151A] tracking-[0.2em] text-sm mb-4 uppercase text-center">
            {t("LEADERSHIP", "BAN LÃNH ĐẠO")}
          </div>
          
          <div className="border-2 border-[#C9A84C] bg-[#070F24] p-1 relative group mt-8">
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#C0151A]"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#C0151A]"></div>
            
            <div className="border border-[#C9A84C]/30 p-12 text-center relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C9A84C_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div className="relative z-10">
                <h3 className="font-display text-5xl text-[#EDE5D0] mb-2 tracking-widest">
                  LE DUNG QUANG
                </h3>
                <div className="inline-block bg-[#C0151A] text-white font-sans font-bold text-sm tracking-[0.2em] uppercase px-6 py-2">
                  {t("DIRECTOR", "GIÁM ĐỐC")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

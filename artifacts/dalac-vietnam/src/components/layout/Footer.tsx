import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#070F24] border-t-[3px] border-[#C0151A] pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="font-display text-2xl text-[#C9A84C] mb-6 tracking-wider">
              DA LAC VIETNAM
            </h3>
            <p className="text-[#B8C4D4] font-serif mb-4 leading-relaxed">
              {t(
                "Protecting industrial assets and expanding global markets through technical excellence.",
                "Bảo vệ tài sản công nghiệp và mở rộng thị trường toàn cầu thông qua sự xuất sắc về kỹ thuật."
              )}
            </p>
            <div className="inline-block p-1 border border-[#C9A84C]">
              <div className="bg-[#C0151A] w-3 h-3"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-white tracking-widest mb-6">
              {t("QUICK LINKS", "LIÊN KẾT NHANH")}
            </h4>
            <div className="flex flex-col gap-3 font-sans">
              <Link href="/about" className="text-[#B8C4D4] hover:text-[#C9A84C] transition-colors uppercase text-sm tracking-wider w-fit">
                {t("About Us", "Giới thiệu")}
              </Link>
              <Link href="/services" className="text-[#B8C4D4] hover:text-[#C9A84C] transition-colors uppercase text-sm tracking-wider w-fit">
                {t("Services", "Dịch vụ")}
              </Link>
              <Link href="/products" className="text-[#B8C4D4] hover:text-[#C9A84C] transition-colors uppercase text-sm tracking-wider w-fit">
                {t("Products", "Sản phẩm")}
              </Link>
              <Link href="/contact" className="text-[#B8C4D4] hover:text-[#C9A84C] transition-colors uppercase text-sm tracking-wider w-fit">
                {t("Contact", "Liên hệ")}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-white tracking-widest mb-6">
              {t("CONTACT", "LIÊN HỆ")}
            </h4>
            <div className="flex flex-col gap-4 font-serif text-[#B8C4D4]">
              <p>
                <strong className="font-sans text-white uppercase text-xs tracking-wider block mb-1">
                  {t("Address", "Địa chỉ")}
                </strong>
                No.32 Quang Tien 4, Trang Bom, Dong Nai, Vietnam
              </p>
              <p>
                <strong className="font-sans text-white uppercase text-xs tracking-wider block mb-1">
                  Email
                </strong>
                hello@dalacvietnam.com.vn
              </p>
              <p>
                <strong className="font-sans text-white uppercase text-xs tracking-wider block mb-1">
                  {t("Phone", "Điện thoại")}
                </strong>
                +84 903 153 385
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#C9A84C]/20 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-xs tracking-wider text-[#B8C4D4]">
          <p>© {new Date().getFullYear()} <span className="text-[#C9A84C]">DA LAC VIETNAM CO., LTD.</span> {t("All rights reserved.", "Mọi bản quyền được bảo lưu.")}</p>
          <p>MST: 3603806518</p>
        </div>
      </div>
    </footer>
  );
}

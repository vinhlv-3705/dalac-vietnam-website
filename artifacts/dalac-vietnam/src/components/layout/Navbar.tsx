import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", en: "Home", vi: "Trang chủ" },
    { href: "/about", en: "About", vi: "Giới thiệu" },
    { href: "/services", en: "Services", vi: "Dịch vụ" },
    { href: "/products", en: "Products", vi: "Sản phẩm" },
    { href: "/contact", en: "Contact", vi: "Liên hệ" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#070F24] border-b-2 border-[#C9A84C]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full border-2 border-[#C9A84C] flex items-center justify-center bg-[#0D1B3E] group-hover:bg-[#C0151A] transition-colors">
              <span className="text-[#C9A84C] font-display text-xl group-hover:text-white">DL</span>
            </div>
            <span className="font-display text-2xl tracking-wider text-white">
              DA LAC VIETNAM
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans uppercase text-sm font-semibold tracking-wider transition-colors ${
                  location === link.href ? "text-[#C9A84C]" : "text-[#B8C4D4] hover:text-white"
                }`}
              >
                {t(link.en, link.vi)}
              </Link>
            ))}
            
            <div className="w-px h-6 bg-[#C9A84C]/30 mx-2" />
            
            <button
              onClick={toggleLanguage}
              className="font-sans font-bold text-sm tracking-wider flex items-center gap-2 text-[#EDE5D0] hover:text-[#C9A84C] transition-colors"
            >
              <span className={language === "EN" ? "text-[#C9A84C]" : "opacity-50"}>EN</span>
              <span className="opacity-30">/</span>
              <span className={language === "VI" ? "text-[#C9A84C]" : "opacity-50"}>VI</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#C9A84C] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#070F24] border-b-2 border-[#C9A84C] shadow-2xl">
          <div className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-sans uppercase text-lg font-semibold tracking-wider p-2 border-l-4 ${
                  location === link.href 
                    ? "text-[#C9A84C] border-[#C9A84C] bg-white/5" 
                    : "text-[#B8C4D4] border-transparent hover:text-white hover:bg-white/5"
                }`}
              >
                {t(link.en, link.vi)}
              </Link>
            ))}
            <div className="h-px w-full bg-[#C9A84C]/30 my-2" />
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="p-2 font-sans font-bold text-lg tracking-wider flex items-center gap-4 text-[#EDE5D0] text-left"
            >
              <span>LANGUAGE:</span>
              <div className="flex gap-2">
                <span className={language === "EN" ? "text-[#C9A84C]" : "opacity-50"}>EN</span>
                <span className="opacity-30">/</span>
                <span className={language === "VI" ? "text-[#C9A84C]" : "opacity-50"}>VI</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

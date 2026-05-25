import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, X, LogOut, User } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const { user, logout, isAuthenticated } = useAuth();
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", en: "Home", vi: "Trang chủ" },
    { href: "/about", en: "About", vi: "Giới thiệu" },
    { href: "/services", en: "Services", vi: "Dịch vụ" },
    { href: "/products", en: "Products", vi: "Sản phẩm" },
    { href: "/contact", en: "Contact", vi: "Liên hệ" },
  ];

  const handleLogout = () => {
    logout();
    setLocation("/");
    setIsOpen(false);
  };

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
              data-testid="button-language-toggle"
              className="font-sans font-bold text-sm tracking-wider flex items-center gap-2 text-[#EDE5D0] hover:text-[#C9A84C] transition-colors"
            >
              <span className={language === "EN" ? "text-[#C9A84C]" : "opacity-50"}>EN</span>
              <span className="opacity-30">/</span>
              <span className={language === "VI" ? "text-[#C9A84C]" : "opacity-50"}>VI</span>
            </button>

            <div className="w-px h-6 bg-[#C9A84C]/30" />

            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-[#EDE5D0]">
                  <div className="w-8 h-8 bg-[#C9A84C]/20 border border-[#C9A84C] flex items-center justify-center">
                    <User size={14} className="text-[#C9A84C]" />
                  </div>
                  <div className="hidden lg:block">
                    <p className="font-sans text-xs font-semibold text-[#C9A84C] leading-none">{user?.name}</p>
                    <p className="font-sans text-[10px] text-[#B8C4D4] leading-none mt-0.5">{user?.role}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  data-testid="button-logout"
                  title={t("Sign Out", "Đăng xuất")}
                  className="flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-[#B8C4D4] hover:text-[#C0151A] border border-[#B8C4D4]/30 hover:border-[#C0151A] px-3 py-2 transition-colors"
                >
                  <LogOut size={14} />
                  <span className="hidden lg:inline">{t("Sign Out", "Đăng xuất")}</span>
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                data-testid="link-login"
                className="font-sans text-xs uppercase tracking-wider font-semibold text-[#070F24] bg-[#C9A84C] hover:bg-[#E8C96C] px-4 py-2 transition-colors"
              >
                {t("Sign In", "Đăng nhập")}
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#C9A84C] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#070F24] border-b-2 border-[#C9A84C] shadow-2xl">
          <div className="flex flex-col px-4 py-6 gap-4">
            {isAuthenticated && (
              <div className="flex items-center gap-3 p-3 border-l-4 border-[#C9A84C] bg-[#C9A84C]/5 mb-2">
                <div className="w-8 h-8 bg-[#C9A84C]/20 border border-[#C9A84C] flex items-center justify-center">
                  <User size={14} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-[#C9A84C]">{user?.name}</p>
                  <p className="font-sans text-xs text-[#B8C4D4]">{user?.role}</p>
                </div>
              </div>
            )}

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

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                data-testid="button-logout-mobile"
                className="flex items-center gap-3 p-2 font-sans text-lg font-semibold uppercase tracking-wider text-[#C0151A] border-l-4 border-[#C0151A] hover:bg-white/5"
              >
                <LogOut size={20} />
                {t("Sign Out", "Đăng xuất")}
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                data-testid="link-login-mobile"
                className="flex items-center p-2 font-sans text-lg font-semibold uppercase tracking-wider text-[#070F24] bg-[#C9A84C] hover:bg-[#E8C96C] transition-colors"
              >
                {t("Sign In", "Đăng nhập")}
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

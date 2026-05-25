import { useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Login() {
  const { login } = useAuth();
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      const success = login(email, password);
      if (success) {
        setLocation("/");
      } else {
        setError(t("Invalid email or password.", "Email hoặc mật khẩu không đúng."));
      }
      setLoading(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#070F24] flex items-center justify-center relative overflow-hidden">
      {/* Diagonal red block top-right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[#C0151A] opacity-80"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
      />

      {/* Decorative circles */}
      <div className="absolute top-16 right-16 w-48 h-48 rounded-full border border-[#C9A84C]/20" />
      <div className="absolute top-24 right-24 w-32 h-32 rounded-full border border-[#C9A84C]/15" />

      {/* Bottom-left diagonal gold accent */}
      <div
        className="absolute bottom-0 left-0 w-72 h-72 bg-[#C9A84C]/10"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
      />

      {/* Login box */}
      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#C0151A] font-semibold">
            {t("SECURE ACCESS", "TRUY CẬP BẢO MẬT")}
          </span>
          <div className="flex-1 h-px bg-[#C0151A]" />
        </div>

        {/* Title */}
        <h1 className="font-display text-5xl text-white mb-2 leading-none">
          {t("SIGN IN", "ĐĂNG NHẬP")}
        </h1>
        <p className="font-sans text-sm text-[#B8C4D4] mb-10 tracking-wide">
          DA LAC VIETNAM — {t("Admin Portal", "Cổng quản trị")}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A84C] block mb-2">
              {t("Email", "Email")}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
              data-testid="input-email"
              className="w-full bg-[#0D1B3E] border border-[#C9A84C]/40 text-[#EDE5D0] px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-[#B8C4D4]/40"
              placeholder="admin@dalacvietnam.com.vn"
            />
          </div>

          <div>
            <label className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A84C] block mb-2">
              {t("Password", "Mật khẩu")}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              data-testid="input-password"
              className="w-full bg-[#0D1B3E] border border-[#C9A84C]/40 text-[#EDE5D0] px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-[#B8C4D4]/40"
              placeholder="••••••••••"
            />
          </div>

          {error && (
            <div className="border-l-4 border-[#C0151A] bg-[#C0151A]/10 px-4 py-3">
              <p className="font-sans text-sm text-[#EDE5D0]">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            data-testid="button-login"
            className="mt-2 bg-[#C0151A] hover:bg-[#8A0E12] text-white font-sans font-bold uppercase tracking-[0.2em] py-4 px-8 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading
              ? t("SIGNING IN...", "ĐANG ĐĂNG NHẬP...")
              : t("SIGN IN", "ĐĂNG NHẬP")}
          </button>
        </form>

        {/* Gold bottom bar */}
        <div className="mt-12 h-px bg-gradient-to-r from-[#C9A84C] to-transparent" />
        <p className="font-sans text-xs text-[#B8C4D4]/40 mt-4 tracking-wide">
          © {new Date().getFullYear()} DA LAC VIETNAM CO., LTD — MST: 3603806518
        </p>
      </div>
    </div>
  );
}

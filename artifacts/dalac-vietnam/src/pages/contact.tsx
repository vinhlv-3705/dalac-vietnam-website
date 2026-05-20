import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Mail, Globe, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t("Message Sent", "Đã gửi tin nhắn"),
      description: t("We will get back to you shortly.", "Chúng tôi sẽ phản hồi sớm nhất có thể."),
    });
    setFormData({ name: "", company: "", phone: "", message: "" });
  };

  return (
    <div className="w-full pb-24">
      {/* HEADER */}
      <section className="bg-[#070F24] pt-32 pb-16 relative overflow-hidden border-b-2 border-[#C0151A]">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0D1B3E] clip-diagonal-right opacity-30 z-0"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="w-20 h-2 bg-[#C9A84C] mb-8"></div>
          <h1 className="font-display text-6xl md:text-8xl text-[#EDE5D0] mb-4">
            {t("CONTACT", "LIÊN HỆ")}
          </h1>
          <p className="font-sans text-[#C9A84C] tracking-widest uppercase md:text-lg">
            {t("Get in touch with us", "Kết nối với chúng tôi")}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT: Contact Info & Map */}
          <div className="space-y-12">
            <div>
              <h2 className="font-sans font-bold text-[#C0151A] tracking-[0.2em] text-sm uppercase mb-8 flex items-center gap-4">
                {t("CONTACT INFORMATION", "THÔNG TIN LIÊN HỆ")}
                <div className="h-px bg-[#C0151A] flex-1"></div>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ContactBox 
                  icon={<MapPin className="text-[#C0151A]" />}
                  title={t("ADDRESS", "ĐỊA CHỈ")}
                  content="No.32 Quang Tien 4, Trang Bom, Dong Nai, Vietnam"
                />
                <ContactBox 
                  icon={<Phone className="text-[#C0151A]" />}
                  title={t("PHONE", "ĐIỆN THOẠI")}
                  content="+84 903 153 385"
                />
                <ContactBox 
                  icon={<Mail className="text-[#C0151A]" />}
                  title="EMAIL"
                  content="hello@dalacvietnam.com.vn"
                />
                <ContactBox 
                  icon={<Globe className="text-[#C0151A]" />}
                  title="WEBSITE"
                  content="www.dalacvietnamqm.com.vn"
                />
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-[16/9] border-2 border-dashed border-[#C9A84C]/50 bg-[#070F24] flex items-center justify-center relative group">
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C9A84C]"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C9A84C]"></div>
              <MapPin className="w-12 h-12 text-[#C9A84C]/30 mb-2 group-hover:text-[#C9A84C] transition-colors" />
              <span className="absolute mt-20 font-sans font-semibold tracking-[0.2em] text-[#B8C4D4] uppercase">
                Google Maps
              </span>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div>
            <div className="bg-[#070F24] border border-[#C9A84C] p-8 md:p-12 relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#C0151A]"></div>
              <h2 className="font-display text-4xl text-[#EDE5D0] mb-8">
                {t("SEND A MESSAGE", "GỬI TIN NHẮN")}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="font-sans text-xs tracking-[0.1em] text-[#C9A84C] uppercase">
                    {t("Full Name", "Họ và tên")}
                  </label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-[#C9A84C]/30 focus:border-[#C9A84C] py-3 text-[#EDE5D0] outline-none font-serif placeholder:text-[#B8C4D4]/30 transition-colors"
                    placeholder={t("John Doe", "Nguyễn Văn A")}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="font-sans text-xs tracking-[0.1em] text-[#C9A84C] uppercase">
                    {t("Company", "Công ty")}
                  </label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-[#C9A84C]/30 focus:border-[#C9A84C] py-3 text-[#EDE5D0] outline-none font-serif placeholder:text-[#B8C4D4]/30 transition-colors"
                    placeholder={t("Your Company Ltd", "Công ty của bạn")}
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-xs tracking-[0.1em] text-[#C9A84C] uppercase">
                    {t("Phone Number", "Số điện thoại")}
                  </label>
                  <input 
                    required
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-[#C9A84C]/30 focus:border-[#C9A84C] py-3 text-[#EDE5D0] outline-none font-serif placeholder:text-[#B8C4D4]/30 transition-colors"
                    placeholder="+84 ..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-xs tracking-[0.1em] text-[#C9A84C] uppercase">
                    {t("Message", "Nội dung")}
                  </label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-[#C9A84C]/30 focus:border-[#C9A84C] py-3 text-[#EDE5D0] outline-none font-serif resize-none placeholder:text-[#B8C4D4]/30 transition-colors"
                    placeholder={t("How can we help you?", "Chúng tôi có thể giúp gì cho bạn?")}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#C0151A] hover:bg-[#8A0E12] text-white font-sans font-bold tracking-[0.2em] uppercase py-5 flex items-center justify-center gap-3 transition-colors mt-8"
                >
                  {t("SUBMIT", "GỬI YÊU CẦU")}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

function ContactBox({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <div className="border-l-4 border-[#C9A84C] pl-6 py-2">
      <div className="mb-3">{icon}</div>
      <h3 className="font-sans font-bold text-[#EDE5D0] tracking-wider uppercase text-sm mb-1">{title}</h3>
      <p className="font-serif text-[#B8C4D4]">{content}</p>
    </div>
  );
}

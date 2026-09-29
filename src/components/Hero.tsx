import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, Flame, Sparkles, PhoneCall, ShoppingBag, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenDelivery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onOpenDelivery }) => {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-6 pb-14 md:pt-12 md:pb-24 bg-gradient-to-b from-[#faf8f5] via-[#f4eee6] to-[#faf8f5]">
      {/* Background ambient decorative blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#52b788]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#e9c46a]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Dual Action Fork */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Heritage & Quality Pill */}
            <div className="inline-flex items-center gap-2 bg-[#2d6a4f]/10 border border-[#2d6a4f]/25 text-[#1b4332] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-5 w-fit shadow-xs">
              <Sparkles className="w-4 h-4 text-[#e9c46a]" />
              <span>{t('hero.badge')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#1b4332] tracking-tight leading-[1.2] sm:leading-[1.18] mb-5">
              {t('hero.title')}
            </h1>

            {/* Sub-headline */}
            <p className="text-[#58483e] text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-2xl">
              {t('hero.subtitle')}
            </p>

            {/* Dual Action Fork (Hero CTA) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              {/* Primary Action: Dine-In / Reservation */}
              <button
                onClick={onOpenReservation}
                className="group flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#1b4332] hover:bg-[#081c15] text-white font-bold text-base shadow-lg shadow-emerald-950/20 hover:shadow-xl hover:shadow-emerald-950/30 transition-all duration-200 cursor-pointer active:scale-98"
              >
                <PhoneCall className="w-5 h-5 text-[#e9c46a] group-hover:rotate-12 transition-transform" />
                <span>{t('hero.dineInBtn')}</span>
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Action: Delivery Order */}
              <button
                onClick={onOpenDelivery}
                className="group flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-white hover:bg-[#f8f5f0] text-[#1b4332] font-bold text-base border-2 border-[#1b4332] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-98"
              >
                <ShoppingBag className="w-5 h-5 text-[#2d6a4f] group-hover:-translate-y-0.5 transition-transform" />
                <span>{t('hero.deliveryBtn')}</span>
              </button>
            </div>

            {/* Proof Metric Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#e3dcd1]">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 mt-0.5">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#2c221e] leading-tight">4.2 / 5.0</div>
                  <div className="text-xs text-[#7f6f64] leading-tight mt-0.5">
                    {language === 'th' ? '350+ รีวิว Google' : '350+ Google Reviews'}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 mt-0.5">
                  <Flame className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#2c221e] leading-tight">
                    {language === 'th' ? '12 ชม.' : '12 Hours'}
                  </div>
                  <div className="text-xs text-[#7f6f64] leading-tight mt-0.5">
                    {language === 'th' ? 'ซุปเคี่ยวข้ามคืน' : 'Simmered Broth'}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-700 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-green-700" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#2c221e] leading-tight">
                    {language === 'th' ? '100% สดใหม่' : '100% Fresh'}
                  </div>
                  <div className="text-xs text-[#7f6f64] leading-tight mt-0.5">
                    {language === 'th' ? 'ผักสดคัดสวนทุกวัน' : 'Organic Herbs Daily'}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-amber-700/10 text-amber-800 mt-0.5">
                  <HeartHandshake className="w-4 h-4 text-amber-800" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#2c221e] leading-tight">
                    {language === 'th' ? 'เกือบ 30 ปี' : '~30 Years'}
                  </div>
                  <div className="text-xs text-[#7f6f64] leading-tight mt-0.5">
                    {language === 'th' ? 'คู่สามย่าน-จุฬาฯ' : 'Chula Soi 9 Legacy'}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Dish Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Dish Imagery Container with decorative frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 aspect-[4/3] sm:aspect-square bg-[#2c221e]/5">
                <img
                  src="/images/dishes/pho-bo.jpg"
                  alt="Authentic Vietnamese Beef Pho at Ngon Lam Chula Soi 9"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  width="600"
                  height="600"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle dark gradient overlay on bottom for badge legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                {/* Bottom dish label */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-block px-2.5 py-0.5 bg-[#e9c46a] text-black text-[11px] font-bold rounded-md uppercase tracking-wider mb-1">
                    Signature Highlight
                  </div>
                  <h3 className="text-lg font-bold leading-tight drop-shadow-md">
                    {language === 'th' ? 'เฝอเนื้อพิเศษ & แหนมเนืองสูตรลับ' : 'Signature Beef Phở & Nem Nướng Platter'}
                  </h3>
                  <p className="text-xs text-white/90 drop-shadow-sm">
                    {language === 'th' ? 'ซุปเคี่ยวข้ามคืนกว่า 12 ชั่วโมง เสิร์ฟพร้อมผักสดไม่อั้น' : '12-hour simmered bone broth & fresh herb platter'}
                  </p>
                </div>
              </div>

              {/* Floating Social Proof Card 1: Top Left */}
              <div className="absolute top-2 left-2 sm:-top-4 sm:-left-6 bg-white/95 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl shadow-xl border border-gray-100 hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1b4332] text-[#e9c46a] flex items-center justify-center font-black text-xs sm:text-sm shadow-sm shrink-0">
                  30
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1b4332]">
                    {language === 'th' ? 'สูตรแท้จากฮานอย' : 'Heritage Hanoi Recipe'}
                  </div>
                  <div className="text-[11px] text-gray-500">
                    {language === 'th' ? 'เปิดบริการตั้งแต่ปี 2538' : 'Serving since 1995'}
                  </div>
                </div>
              </div>

              {/* Floating Review Card 2: Bottom Right */}
              <div className="absolute bottom-2 right-2 sm:-bottom-5 sm:-right-6 bg-white/95 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2.5 sm:gap-3">
                <div className="flex -space-x-1.5 overflow-hidden">
                  <div 
                    className="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-white shadow-xs"
                    title="Google Reviews"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.99 0 12s.45 3.84 1.25 5.42l4.03-3.15z"/>
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                    </svg>
                  </div>
                  <div 
                    className="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-[#0050f0] text-white shadow-xs font-black text-xs"
                    title="Wongnai Reviews"
                  >
                    W
                  </div>
                  <div 
                    className="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-[#1b4332] text-[#e9c46a] shadow-xs font-bold text-xs"
                    title="Verified Diners"
                  >
                    ★
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-[11px] font-semibold text-[#1b4332] mt-0.5">
                    {language === 'th' ? '4.2 ดาว (350+ รีวิว)' : '4.2 Stars (350+ Reviews)'}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

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
                  src="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=1200&auto=format&fit=crop"
                  alt="Authentic Vietnamese Pho at Ngon Lam"
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
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-gray-100 hidden sm:flex items-center gap-3 animate-bounce-subtle">
                <div className="w-10 h-10 rounded-full bg-[#1b4332] text-[#e9c46a] flex items-center justify-center font-black text-sm shadow-sm">
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
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
                    alt="Customer"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                    alt="Customer"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop"
                    alt="Customer"
                  />
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

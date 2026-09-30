import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MapPin, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1b4332] text-[#f4eee6] pt-16 pb-28 md:pb-16 border-t border-[#2d6a4f]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-800/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden shadow-md border-2 border-white/20 shrink-0 bg-[#239213]">
                <img 
                  src="/images/logo/logo.jpg" 
                  alt="Ngon Lam Vietnamese Restaurant Logo" 
                  className="w-full h-full object-cover scale-[1.03]"
                  width="44"
                  height="44"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight text-white">
                  {t('brand.name')}
                </h3>
                <p className="text-xs text-emerald-200">
                  {t('brand.subname')}
                </p>
              </div>
            </div>

            <p className="text-sm text-emerald-100/80 leading-relaxed max-w-sm">
              {t('footer.tagline')}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/ngonlamchula9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="https://line.me/R/ti/p/@ngonlam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LINE Official Account"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
              </a>

              <a
                href="https://maps.google.com/?cid=604739504812316184"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Location"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#e9c46a]">
              {language === 'th' ? 'เมนูด่วน' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-sm text-emerald-100/80">
              <li>
                <a href="#menu" onClick={(e) => scrollToSection(e, 'menu')} className="hover:text-white transition-colors">
                  {t('nav.menu')}
                </a>
              </li>
              <li>
                <a href="#story" onClick={(e) => scrollToSection(e, 'story')} className="hover:text-white transition-colors">
                  {t('nav.story')}
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')} className="hover:text-white transition-colors">
                  {t('nav.reviews')}
                </a>
              </li>
              <li>
                <a href="#location" onClick={(e) => scrollToSection(e, 'location')} className="hover:text-white transition-colors">
                  {t('nav.location')}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#e9c46a]">
              {language === 'th' ? 'ติดต่อร้าน & เวลาเปิด' : 'Hours & Inquiries'}
            </h4>
            <div className="space-y-2 text-sm text-emerald-100/80">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#e9c46a] shrink-0" />
                <span>
                  Tel: <a href="tel:020201057" className="hover:underline">02-020-1057</a> · Mobile: <a href="tel:0894827272" className="hover:underline">089-482-7272</a>
                </span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#e9c46a] shrink-0 mt-0.5" />
                <span>234 จุฬา ซอย 9 แขวงวังใหม่ เขตปทุมวัน กรุงเทพฯ (MRT สามย่าน)</span>
              </p>
              <p className="text-xs text-emerald-200/70 pt-1">
                {language === 'th' ? 'เปิดบริการทุกวัน: 10:30 - 20:30 น.' : 'Open Daily: 10:30 AM - 8:30 PM'}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/70">
          <div>
            <p>{t('footer.rights')}</p>
            <p className="text-[11px] text-emerald-300/50 mt-0.5">{t('footer.designedFor')}</p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <span>{language === 'th' ? 'กลับขึ้นด้านบน' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

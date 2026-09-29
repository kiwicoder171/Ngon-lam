import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Utensils, Phone, Bike, Menu as MenuIcon, X, Clock, MapPin } from 'lucide-react';
import { getRestaurantStatus } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenDelivery: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation, onOpenDelivery }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const status = getRestaurantStatus();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top micro-announcement bar */}
      <div className="bg-[#1b4332] text-[#e8f5e9] text-xs py-1.5 px-4 font-medium transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`inline-block w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-pulse-dot' : 'bg-amber-400'}`}></span>
            <span className="hidden sm:inline font-semibold">
              {language === 'th' ? status.statusTextTh : status.statusTextEn}
            </span>
            <span className="sm:hidden font-semibold">
              {status.isOpen ? (language === 'th' ? 'เปิดบริการอยู่' : 'Open Now') : (language === 'th' ? 'ขณะนี้ร้านปิด' : 'Closed')}
            </span>
            <span className="text-emerald-200/60 hidden md:inline">|</span>
            <span className="hidden md:inline text-emerald-100/90">
              <Clock className="w-3.5 h-3.5 inline mr-1 -mt-0.5 text-emerald-300" />
              {language === 'th' ? status.hoursTextTh : status.hoursTextEn}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#location" 
              className="hover:text-emerald-200 flex items-center gap-1 transition-colors text-[11px] sm:text-xs"
            >
              <MapPin className="w-3 h-3 text-emerald-300 shrink-0" />
              <span>{language === 'th' ? 'จุฬา ซอย 9' : 'Chula Soi 9'}</span>
              <span className="hidden sm:inline text-emerald-200/70">{language === 'th' ? '(MRT สามย่าน)' : '(MRT Samyan)'}</span>
            </a>
            <div className="flex items-center border border-emerald-600/60 rounded-full overflow-hidden text-[11px] font-semibold">
              <button
                onClick={() => setLanguage('th')}
                className={`px-2 py-0.5 transition-all ${language === 'th' ? 'bg-[#52b788] text-gray-950 shadow-sm' : 'text-emerald-200 hover:text-white'}`}
                aria-label="Switch to Thai"
              >
                TH
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 transition-all ${language === 'en' ? 'bg-[#52b788] text-gray-950 shadow-sm' : 'text-emerald-200 hover:text-white'}`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#faf8f5]/95 backdrop-blur-md shadow-md py-3' 
            : 'bg-[#faf8f5] py-4 border-b border-[#e9e3da]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Heritage badge */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#1b4332] to-[#2d6a4f] flex items-center justify-center text-white shadow-md shadow-emerald-950/20 group-hover:scale-105 transition-transform">
              <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-[#e9c46a]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl text-[#1b4332] tracking-tight">
                  {t('brand.name')}
                </span>
                <span className="bg-[#e9c46a]/25 text-[#99582a] border border-[#e9c46a]/60 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {t('brand.shortEst')}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#6c584c] font-medium leading-none mt-0.5">
                {t('brand.subname')}
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[#403d39] font-medium text-sm">
            <a href="#menu" className="hover:text-[#1b4332] transition-colors py-1 relative hover:font-semibold">
              {t('nav.menu')}
            </a>
            <a href="#story" className="hover:text-[#1b4332] transition-colors py-1 relative hover:font-semibold">
              {t('nav.story')}
            </a>
            <a href="#reviews" className="hover:text-[#1b4332] transition-colors py-1 relative hover:font-semibold">
              {t('nav.reviews')}
            </a>
            <a href="#location" className="hover:text-[#1b4332] transition-colors py-1 relative hover:font-semibold">
              {t('nav.location')}
            </a>
          </nav>

          {/* Action CTAs & Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenReservation}
              className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#1b4332] text-[#1b4332] hover:bg-[#1b4332] hover:text-white font-semibold text-sm transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>{t('nav.dineInCta')}</span>
            </button>

            <button
              onClick={onOpenDelivery}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2d6a4f] to-[#1b4332] text-white hover:from-[#1b4332] hover:to-[#081c15] font-semibold text-sm shadow-md shadow-emerald-900/20 transition-all duration-200 cursor-pointer active:scale-95 hover:shadow-lg"
            >
              <Bike className="w-4 h-4 text-[#e9c46a]" />
              <span>{t('nav.deliveryCta')}</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1b4332] hover:bg-[#e9e3da]/50 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e9e3da] bg-[#faf8f5] px-4 pt-3 pb-5 shadow-xl transition-all">
            <div className="flex flex-col gap-3 py-2 text-base font-semibold text-[#403d39]">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#e9e3da]/40 hover:text-[#1b4332]"
              >
                {t('nav.menu')}
              </a>
              <a
                href="#story"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#e9e3da]/40 hover:text-[#1b4332]"
              >
                {t('nav.story')}
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#e9e3da]/40 hover:text-[#1b4332]"
              >
                {t('nav.reviews')}
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#e9e3da]/40 hover:text-[#1b4332]"
              >
                {t('nav.location')}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#e9e3da]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-[#1b4332] text-[#1b4332] font-semibold text-xs text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t('nav.dineInCta')}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDelivery();
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#1b4332] text-white font-semibold text-xs text-center"
              >
                <Bike className="w-3.5 h-3.5 text-[#e9c46a]" />
                <span>{t('nav.deliveryCta')}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

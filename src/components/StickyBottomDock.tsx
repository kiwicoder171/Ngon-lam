import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PhoneCall, Bike } from 'lucide-react';

interface StickyBottomDockProps {
  onOpenReservation: () => void;
  onOpenDelivery: () => void;
}

export const StickyBottomDock: React.FC<StickyBottomDockProps> = ({
  onOpenReservation,
  onOpenDelivery,
}) => {
  const { language } = useLanguage();

  return (
    <aside 
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-white/95 backdrop-blur-md border-t border-[#ded8cb] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]"
    >
      <div className="max-w-md mx-auto flex items-center gap-2">
        {/* Left Action (60% width): Phone Reservation & Chat Inquiry */}
        <button
          onClick={onOpenReservation}
          className="w-[60%] flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-[#1b4332] text-white font-bold text-xs sm:text-sm shadow-md active:scale-98 transition-transform cursor-pointer"
        >
          <PhoneCall className="w-4 h-4 text-[#e9c46a] shrink-0" />
          <span className="truncate">
            {language === 'th' ? 'โทรจอง / แชทไลน์' : 'Call / Reserve'}
          </span>
        </button>

        {/* Right Action (40% width): Direct Delivery Order */}
        <button
          onClick={onOpenDelivery}
          className="w-[40%] flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-[#e9c46a] text-[#1b4332] font-black text-xs sm:text-sm shadow-md active:scale-98 transition-transform cursor-pointer"
        >
          <Bike className="w-4 h-4 shrink-0" />
          <span className="truncate">
            {language === 'th' ? 'สั่ง Delivery' : 'Delivery'}
          </span>
        </button>
      </div>
    </aside>
  );
};

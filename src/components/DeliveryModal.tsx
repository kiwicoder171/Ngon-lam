import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, ExternalLink, ShieldCheck, Bike } from 'lucide-react';

interface DeliveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeliveryModal: React.FC<DeliveryModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg bg-[#faf8f5] rounded-3xl shadow-2xl overflow-hidden border border-[#ded8cb]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1b4332] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#e9c46a] text-[#1b4332] text-xs font-bold uppercase tracking-wider mb-2">
            <Bike className="w-3 h-3" />
            <span>Delivery Services</span>
          </div>
          <h3 className="text-2xl font-black tracking-tight">
            {t('modalDelivery.title')}
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
            {t('modalDelivery.subtitle')}
          </p>
        </div>

        {/* Delivery App Cards */}
        <div className="p-6 space-y-4">
          
          {/* Robinhood Option */}
          <div className="p-5 rounded-2xl bg-white border border-[#ded8cb] shadow-sm hover:border-[#581c87] transition-colors">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#581c87]/10 text-[#581c87] flex items-center justify-center font-black text-lg">
                  RH
                </div>
                <div>
                  <h4 className="font-bold text-[#1b4332] text-base">
                    {t('modalDelivery.robinhoodTitle')}
                  </h4>
                  <p className="text-xs text-[#8d7b68]">
                    {t('modalDelivery.robinhoodDesc')}
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#581c87]/10 text-[#581c87]">
                ค่าส่งเป็นมิตร
              </span>
            </div>

            <a
              href="https://www.robinhood.in.th/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#581c87] hover:bg-[#4a154b] text-white text-sm font-bold transition-all shadow-md cursor-pointer"
            >
              <span>{t('modalDelivery.robinhoodBtn')}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* LINE MAN Option */}
          <div className="p-5 rounded-2xl bg-white border border-[#ded8cb] shadow-sm hover:border-[#06c755] transition-colors">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#06c755]/10 text-[#06c755] flex items-center justify-center font-black text-lg">
                  LM
                </div>
                <div>
                  <h4 className="font-bold text-[#1b4332] text-base">
                    {t('modalDelivery.lineManTitle')}
                  </h4>
                  <p className="text-xs text-[#8d7b68]">
                    {t('modalDelivery.lineManDesc')}
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#06c755]/10 text-[#06c755]">
                ครอบคลุมกทม.
              </span>
            </div>

            <a
              href="https://lineman.line.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#06c755] hover:bg-[#05b34c] text-white text-sm font-bold transition-all shadow-md cursor-pointer"
            >
              <span>{t('modalDelivery.lineManBtn')}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Freshness & Packaging Reassurance */}
          <div className="bg-[#f0ece1] p-4 rounded-2xl border border-[#ded8cb] flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#2d6a4f] shrink-0 mt-0.5" />
            <p className="text-xs text-[#55473e] leading-relaxed">
              {t('modalDelivery.packagingNote')}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#ded8cb] bg-white text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-[#7f6f64] hover:bg-[#f4eee6] transition-colors cursor-pointer"
          >
            {t('modalDelivery.close')}
          </button>
        </div>
      </div>
    </div>
  );
};

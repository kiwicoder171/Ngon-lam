import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, ExternalLink, ShieldCheck, Bike, MessageCircle, Phone } from 'lucide-react';

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
        className="relative w-full max-w-lg bg-[#faf8f5] rounded-3xl shadow-2xl overflow-hidden max-h-[88dvh] sm:max-h-[90vh] flex flex-col border border-[#ded8cb]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1b4332] p-5 sm:p-6 text-white relative shrink-0">
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
          <h3 className="text-xl sm:text-2xl font-black tracking-tight">
            {t('modalDelivery.title')}
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
            {t('modalDelivery.subtitle')}
          </p>
        </div>

        {/* Delivery App Cards */}
        <div className="p-5 sm:p-6 space-y-4 overflow-y-auto overscroll-contain flex-1">
          
          {/* LINE MAN Option */}
          <div className="p-5 rounded-2xl bg-white border border-[#ded8cb] shadow-sm hover:border-[#06c755] transition-colors">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#06c755]/10 text-[#06c755] flex items-center justify-center font-black text-lg shrink-0">
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

              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#06c755]/15 text-[#06c755] shrink-0">
                Official
              </span>
            </div>

            <a
              href="https://lin.ee/FcVemHp?openExternalBrowser=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-[#06c755] hover:bg-[#05b34c] text-white text-sm font-bold transition-all shadow-md cursor-pointer active:scale-98"
            >
              <span>{t('modalDelivery.lineManBtn')}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Option: Direct Order / Pre-order with store */}
          <div className="p-4 rounded-2xl bg-white border border-[#ded8cb] shadow-2xs">
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#1b4332] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#2d6a4f]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1b4332] text-sm">
                    {t('modalDelivery.lineOrderDirectTitle')}
                  </h4>
                  <p className="text-xs text-[#8d7b68]">
                    {t('modalDelivery.lineOrderDirectDesc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
              <a
                href="https://line.me/R/ti/p/@ngonlam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#06c755] hover:bg-[#05b34c] text-white text-xs font-bold transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>LINE OA (@ngonlam)</span>
              </a>

              <a
                href="tel:0894827272"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#1b4332] hover:bg-[#081c15] text-white text-xs font-bold transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#e9c46a]" />
                <span>089-482-7272</span>
              </a>
            </div>
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

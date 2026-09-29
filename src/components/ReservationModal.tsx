import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Phone, MessageCircle, Info } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
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
        {/* Header with green brand gradient */}
        <div className="bg-gradient-to-r from-[#1b4332] to-[#2d6a4f] p-5 sm:p-6 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#e9c46a] text-[#1b4332] text-xs font-bold uppercase tracking-wider mb-2">
            Chula Soi 9
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight">
            {t('modalReservation.title')}
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
            {t('modalReservation.subtitle')}
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 space-y-4 overflow-y-auto overscroll-contain flex-1">
          
          {/* Option 1: Direct Phone Call */}
          <div className="p-4 rounded-2xl bg-white border border-[#ded8cb] shadow-2xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#1b4332] flex items-center justify-center">
                <Phone className="w-4 h-4 text-[#2d6a4f]" />
              </div>
              <div>
                <h4 className="font-bold text-[#1b4332] text-sm">
                  {t('modalReservation.callDirectTitle')}
                </h4>
                <p className="text-xs text-[#8d7b68]">
                  {t('modalReservation.callDirectDesc')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
              <a
                href="tel:022144113"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#1b4332] hover:bg-[#081c15] text-white text-xs font-bold transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#e9c46a]" />
                <span>02-214-4113</span>
              </a>

              <a
                href="tel:0818174322"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-xs font-bold transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#e9c46a]" />
                <span>081-817-4322</span>
              </a>
            </div>
          </div>

          {/* Option 2: LINE OA */}
          <div className="p-4 rounded-2xl bg-white border border-[#ded8cb] shadow-2xs">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-green-50 text-[#06c755] flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 fill-[#06c755] text-[#06c755]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1b4332] text-sm">
                    {t('modalReservation.chatLineTitle')}
                  </h4>
                  <p className="text-xs text-[#8d7b68]">
                    {t('modalReservation.chatLineDesc')}
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://line.me/R/ti/p/@ngonlam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#06c755] hover:bg-[#05b34c] text-white text-xs font-bold transition-all shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>{t('modalReservation.chatLineBtn')}</span>
            </a>
          </div>

          {/* Option 3: Facebook Messenger */}
          <div className="p-4 rounded-2xl bg-white border border-[#ded8cb] shadow-2xs">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1877f2] flex items-center justify-center">
                  <svg className="w-4 h-4 fill-[#1877f2]" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#1b4332] text-sm">
                    {t('modalReservation.chatFbTitle')}
                  </h4>
                  <p className="text-xs text-[#8d7b68]">
                    {t('modalReservation.chatFbDesc')}
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.facebook.com/ngonlamchula9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#1877f2] hover:bg-[#166fe5] text-white text-xs font-bold transition-all shadow-xs"
            >
              <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>{t('modalReservation.chatFbBtn')}</span>
            </a>
          </div>

          {/* Helpful Tips Card */}
          <div className="bg-[#f0ece1] p-3.5 rounded-2xl border border-[#ded8cb] text-xs text-[#55473e] flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#2d6a4f] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {t('modalReservation.walkInNote')}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#ded8cb] bg-white text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-[#7f6f64] hover:bg-[#f4eee6] transition-colors cursor-pointer"
          >
            {t('modalReservation.close')}
          </button>
        </div>
      </div>
    </div>
  );
};

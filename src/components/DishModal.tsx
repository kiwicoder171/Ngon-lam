import React, { useEffect } from 'react';
import { Dish } from '../data/restaurantData';
import { useLanguage } from '../context/LanguageContext';
import { X, ChefHat, CheckCircle2, ShoppingBag, PhoneCall } from 'lucide-react';

interface DishModalProps {
  dish: Dish | null;
  onClose: () => void;
  onOrderDelivery: (dish: Dish) => void;
  onReserveTable: () => void;
}

export const DishModal: React.FC<DishModalProps> = ({
  dish,
  onClose,
  onOrderDelivery,
  onReserveTable,
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (dish) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dish, onClose]);

  if (!dish) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl bg-[#faf8f5] rounded-3xl shadow-2xl overflow-hidden max-h-[88dvh] sm:max-h-[90vh] flex flex-col border border-[#e8e2d8]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto overscroll-contain">
          {/* Dish Hero Image with Badge */}
          <div className="relative h-48 sm:h-64 md:h-72 w-full bg-[#2c221e]/10">
            <img
              src={dish.image}
              alt={language === 'th' ? dish.nameTh : dish.nameEn}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Badges on Image */}
            <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-end justify-between gap-2">
              <div>
                <span className="inline-block px-3 py-1 bg-[#1b4332] text-[#e9c46a] text-xs font-bold rounded-full mb-1.5 shadow-sm">
                  {language === 'th' ? dish.badgeTh : dish.badgeEn}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-md">
                  {language === 'th' ? dish.nameTh : dish.nameEn}
                </h3>
                <p className="text-sm font-semibold text-emerald-300 italic tracking-wider">
                  {dish.nameVi}
                </p>
              </div>

              <div className="bg-[#e9c46a] text-[#1b4332] px-4 py-1.5 rounded-2xl font-black text-xl shadow-lg">
                ฿{dish.price}
              </div>
            </div>
          </div>

          {/* Details Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Detailed Description */}
            <div>
              <h4 className="text-xs font-bold text-[#8d7b68] uppercase tracking-wider mb-2">
                {language === 'th' ? 'เรื่องราวและความพิถีพิถัน' : 'Culinary Craft & Heritage'}
              </h4>
              <p className="text-[#3e342f] text-base leading-relaxed">
                {language === 'th' ? dish.detailedDescTh : dish.detailedDescEn}
              </p>
            </div>

            {/* Ingredients */}
            <div className="bg-[#f0ece1] p-4 sm:p-5 rounded-2xl border border-[#ded8cb]">
              <h4 className="flex items-center gap-2 text-sm font-bold text-[#1b4332] mb-3">
                <CheckCircle2 className="w-4 h-4 text-[#2d6a4f]" />
                <span>{language === 'th' ? 'วัตถุดิบและส่วนประกอบสำคัญ' : 'Key Authentic Ingredients'}</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {(language === 'th' ? dish.ingredientsTh : dish.ingredientsEn).map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-xs font-medium bg-white text-[#4a3f35] px-3 py-1.5 rounded-lg border border-[#d6cfc2] shadow-2xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Chef's Secret Note */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-2xl">
              <div className="flex items-start gap-3">
                <ChefHat className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                    {language === 'th' ? 'เคล็ดลับการทานให้อร่อยที่สุดจากเชฟ' : "Chef's Tasting Advice"}
                  </div>
                  <p className="text-sm text-amber-950 mt-1 leading-snug">
                    {language === 'th' ? dish.chefNoteTh : dish.chefNoteEn}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOrderDelivery(dish);
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#1b4332] hover:bg-[#081c15] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#e9c46a]" />
                <span>{language === 'th' ? 'สั่ง Delivery เมนูนี้' : 'Order via Delivery'}</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onReserveTable();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl border-2 border-[#1b4332] text-[#1b4332] hover:bg-[#1b4332] hover:text-white font-bold text-sm transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{language === 'th' ? 'โทรจองโต๊ะทานที่ร้าน' : 'Reserve Table for Dine-In'}</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

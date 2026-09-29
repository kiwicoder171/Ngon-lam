import React, { useState } from 'react';
import { DISHES, Dish } from '../data/restaurantData';
import { useLanguage } from '../context/LanguageContext';
import { Eye, ShoppingBag, Sparkles, ChefHat } from 'lucide-react';
import { DishModal } from './DishModal';

interface SignatureMenuProps {
  onOpenDelivery: () => void;
  onOpenReservation: () => void;
}

export const SignatureMenu: React.FC<SignatureMenuProps> = ({
  onOpenDelivery,
  onOpenReservation,
}) => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'soup' | 'rolls' | 'drinks'>('all');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const filteredDishes = activeFilter === 'all'
    ? DISHES
    : DISHES.filter((d) => d.category === activeFilter);

  return (
    <section id="menu" className="py-16 md:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2d6a4f]/10 text-[#1b4332] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#e9c46a]" />
            <span>{t('menu.sectionBadge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] tracking-tight mb-4">
            {t('menu.title')}
          </h2>
          <p className="text-base sm:text-lg text-[#6c584c] leading-relaxed">
            {t('menu.subtitle')}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#1b4332] text-white shadow-md'
                  : 'bg-white text-[#403d39] border border-[#ded8cb] hover:border-[#1b4332]'
              }`}
            >
              {t('menu.filterAll')}
            </button>
            <button
              onClick={() => setActiveFilter('soup')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === 'soup'
                  ? 'bg-[#1b4332] text-white shadow-md'
                  : 'bg-white text-[#403d39] border border-[#ded8cb] hover:border-[#1b4332]'
              }`}
            >
              {t('menu.filterSoup')}
            </button>
            <button
              onClick={() => setActiveFilter('rolls')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === 'rolls'
                  ? 'bg-[#1b4332] text-white shadow-md'
                  : 'bg-white text-[#403d39] border border-[#ded8cb] hover:border-[#1b4332]'
              }`}
            >
              {t('menu.filterRolls')}
            </button>
            <button
              onClick={() => setActiveFilter('drinks')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === 'drinks'
                  ? 'bg-[#1b4332] text-white shadow-md'
                  : 'bg-white text-[#403d39] border border-[#ded8cb] hover:border-[#1b4332]'
              }`}
            >
              {t('menu.filterDrinks')}
            </button>
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#e8e2d8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Badges */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-gray-100">
                <img
                  src={dish.image}
                  alt={language === 'th' ? dish.nameTh : dish.nameEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="400"
                  height="240"
                />
                
                {/* Badge Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-[#1b4332]/90 backdrop-blur-xs text-[#e9c46a] text-xs font-bold rounded-full shadow-xs">
                    {language === 'th' ? dish.badgeTh : dish.badgeEn}
                  </span>
                </div>

                {/* Price Pill */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-[#1b4332] font-extrabold text-sm px-3 py-1 rounded-full shadow-md border border-[#e8e2d8]">
                  ฿{dish.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold text-[#1b4332] leading-snug group-hover:text-[#2d6a4f] transition-colors">
                      {language === 'th' ? dish.nameTh : dish.nameEn}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-[#8d7b68] italic tracking-wide mb-3">
                    {dish.nameVi}
                  </p>

                  <p className="text-sm text-[#5c4d43] line-clamp-2 leading-relaxed mb-4">
                    {language === 'th' ? dish.shortDescTh : dish.shortDescEn}
                  </p>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-[#f0ece1] flex items-center gap-2">
                  <button
                    onClick={() => setSelectedDish(dish)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#f4eee6] hover:bg-[#e9e3da] text-[#1b4332] font-bold text-xs transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{t('menu.viewDetails')}</span>
                  </button>

                  <button
                    onClick={onOpenDelivery}
                    className="flex items-center justify-center gap-1 py-2.5 px-3.5 rounded-xl bg-[#1b4332] hover:bg-[#081c15] text-white font-bold text-xs transition-colors cursor-pointer shadow-sm"
                    title={language === 'th' ? 'สั่งผ่าน Delivery' : 'Order Delivery'}
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#e9c46a]" />
                    <span>{language === 'th' ? 'สั่งเลย' : 'Order'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-14 bg-gradient-to-r from-[#1b4332] to-[#2d6a4f] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#e9c46a]/20 border border-[#e9c46a]/40 flex items-center justify-center text-[#e9c46a] shrink-0 hidden sm:flex">
              <ChefHat className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">
                {language === 'th' ? 'ผักสมุนไพรสดและน้ำซุปเติมฟรีไม่อั้นเมื่อทานที่ร้าน' : 'Free Unlimited Fresh Herbs & Broth Refill Dine-In'}
              </h3>
              <p className="text-sm text-emerald-100/90 mt-1">
                {language === 'th' ? 'พร้อมเครื่องเคียง ผักชีฝรั่ง โหระพา พริกมะนาวสด ปรุงรสตามใจชอบ' : 'Complete with culantro, Thai basil, fresh chilies and limes.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenReservation}
              className="px-6 py-3 rounded-xl bg-[#e9c46a] hover:bg-[#dfb552] text-[#1b4332] font-extrabold text-sm shadow-md transition-colors cursor-pointer"
            >
              {language === 'th' ? 'สำรองโต๊ะล่วงหน้า' : 'Book a Table'}
            </button>
          </div>
        </div>

      </div>

      {/* Dish Modal */}
      <DishModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onOrderDelivery={() => {
          setSelectedDish(null);
          onOpenDelivery();
        }}
        onReserveTable={() => {
          setSelectedDish(null);
          onOpenReservation();
        }}
      />
    </section>
  );
};

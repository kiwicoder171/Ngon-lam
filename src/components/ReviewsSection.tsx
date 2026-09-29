import React, { useState } from 'react';
import { REVIEWS } from '../data/restaurantData';
import { useLanguage } from '../context/LanguageContext';
import { Star, MessageSquareQuote, ExternalLink, CheckCircle } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'pho' | 'nem' | 'vibe'>('all');

  const filteredReviews = filter === 'all'
    ? REVIEWS
    : REVIEWS.filter((r) => r.category === filter);

  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#2d6a4f]/10 text-[#1b4332] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-[#e9c46a] text-[#e9c46a]" />
              <span>{t('reviews.sectionBadge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] tracking-tight mb-2">
              {t('reviews.title')}
            </h2>
            <p className="text-base text-[#6c584c]">
              {t('reviews.subtitle')}
            </p>
          </div>

          {/* Google Maps Score Card */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#ded8cb] shadow-sm flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 font-black text-2xl">
              4.2
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <a
                href="https://maps.google.com/?q=ร้านอาหารเวียดนาม+หง่อนหลำ+จุฬา+ซอย+9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#1b4332] hover:underline flex items-center gap-1"
              >
                <span>{t('reviews.googleVerified')}</span>
                <ExternalLink className="w-3 h-3 text-[#2d6a4f]" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#1b4332] text-white shadow-xs'
                : 'bg-white text-[#55473e] border border-[#ded8cb] hover:border-[#1b4332]'
            }`}
          >
            {t('reviews.filterAll')}
          </button>
          <button
            onClick={() => setFilter('pho')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === 'pho'
                ? 'bg-[#1b4332] text-white shadow-xs'
                : 'bg-white text-[#55473e] border border-[#ded8cb] hover:border-[#1b4332]'
            }`}
          >
            {t('reviews.filterPho')}
          </button>
          <button
            onClick={() => setFilter('nem')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === 'nem'
                ? 'bg-[#1b4332] text-white shadow-xs'
                : 'bg-white text-[#55473e] border border-[#ded8cb] hover:border-[#1b4332]'
            }`}
          >
            {t('reviews.filterNem')}
          </button>
          <button
            onClick={() => setFilter('vibe')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === 'vibe'
                ? 'bg-[#1b4332] text-white shadow-xs'
                : 'bg-white text-[#55473e] border border-[#ded8cb] hover:border-[#1b4332]'
            }`}
          >
            {t('reviews.filterVibe')}
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-[#e8e2d8] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Author Info */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-12 h-12 rounded-full object-cover border border-emerald-100"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-bold text-[#1b4332] text-base leading-tight">
                        {rev.author}
                      </div>
                      <div className="text-xs text-[#8d7b68] flex items-center gap-1 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-[#52b788]" />
                        <span>{language === 'th' ? rev.authorTypeTh : rev.authorTypeEn}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-xs text-gray-400 font-medium">
                    {language === 'th' ? rev.dateTh : rev.dateEn}
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#3e342f] text-sm sm:text-base leading-relaxed italic mb-4">
                  "{language === 'th' ? rev.textTh : rev.textEn}"
                </p>
              </div>

              {/* Recommended Dish Tag */}
              {rev.dishRecommendedTh && (
                <div className="pt-3 border-t border-[#f4eee6] flex items-center gap-2 text-xs text-[#52b788] font-bold">
                  <span className="text-[#8d7b68] font-medium">
                    {language === 'th' ? 'เมนูโปรด:' : 'Recommended:'}
                  </span>
                  <span className="bg-[#52b788]/10 text-[#1b4332] px-2.5 py-0.5 rounded-md">
                    {language === 'th' ? rev.dishRecommendedTh : rev.dishRecommendedEn}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All on Google Maps Button */}
        <div className="text-center mt-10">
          <a
            href="https://maps.google.com/?q=ร้านอาหารเวียดนาม+หง่อนหลำ+จุฬา+ซอย+9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#f4eee6] text-[#1b4332] font-bold text-sm border border-[#d6cfc2] shadow-sm hover:shadow-md transition-all"
          >
            <MessageSquareQuote className="w-4 h-4 text-[#2d6a4f]" />
            <span>{t('reviews.viewAllGoogle')}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { REVIEWS } from '../data/restaurantData';
import { useLanguage } from '../context/LanguageContext';
import { Star, MessageSquareQuote, ExternalLink, CheckCircle, Award } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [platform, setPlatform] = useState<'all' | 'google' | 'wongnai'>('all');
  const [category, setCategory] = useState<'all' | 'pho' | 'nem' | 'vibe'>('all');

  const filteredReviews = REVIEWS.filter((rev) => {
    const matchesPlatform = platform === 'all' || rev.source === platform;
    const matchesCategory = category === 'all' || rev.category === category;
    return matchesPlatform && matchesCategory;
  });

  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Dual Platform Proof Cards */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
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

          {/* Dual Score Cards: Google Maps & Wongnai */}
          <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
            {/* Google Maps Score Card */}
            <div className="flex-1 sm:flex-initial bg-white p-4 rounded-2xl border border-[#ded8cb] shadow-sm flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 font-black text-xl">
                4.2
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <a
                  href="https://maps.google.com/?q=ร้านอาหารเวียดนาม+หง่อนหลำ+จุฬา+ซอย+9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#1b4332] hover:underline flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#2d6a4f]" />
                </a>
                <p className="text-[10px] text-gray-500">350+ {language === 'th' ? 'รีวิว' : 'reviews'}</p>
              </div>
            </div>

            {/* Wongnai Score Card */}
            <div className="flex-1 sm:flex-initial bg-white p-4 rounded-2xl border border-[#ded8cb] shadow-sm flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#0050f0]/10 flex items-center justify-center text-[#0050f0] font-black text-xl">
                4.0
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <Star className="w-3.5 h-3.5 text-gray-300" />
                </div>
                <a
                  href="https://www.wongnai.com/businesses?q=หง่อนหลำ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0050f0] hover:underline flex items-center gap-1"
                >
                  <span>Wongnai (วงใน)</span>
                  <ExternalLink className="w-3 h-3 text-[#0050f0]" />
                </a>
                <p className="text-[10px] text-gray-500">{language === 'th' ? 'ร้านดังจุฬาฯ' : 'Chula Landmark'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Toolbar: Platform Toggle & Food Category Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#ded8cb]">
          
          {/* Platform Filter Tabs */}
          <div className="flex items-center gap-1 bg-[#f0ece1] p-1 rounded-xl w-fit">
            <button
              onClick={() => setPlatform('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                platform === 'all'
                  ? 'bg-white text-[#1b4332] shadow-xs'
                  : 'text-[#6c584c] hover:text-[#1b4332]'
              }`}
            >
              {t('reviews.platformAll')}
            </button>
            <button
              onClick={() => setPlatform('google')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                platform === 'google'
                  ? 'bg-white text-[#1b4332] shadow-xs'
                  : 'text-[#6c584c] hover:text-[#1b4332]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>Google Maps</span>
            </button>
            <button
              onClick={() => setPlatform('wongnai')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                platform === 'wongnai'
                  ? 'bg-white text-[#0050f0] shadow-xs'
                  : 'text-[#6c584c] hover:text-[#0050f0]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#0050f0]"></span>
              <span>Wongnai</span>
            </button>
          </div>

          {/* Dish / Topic Category Pills */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setCategory('all')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                category === 'all'
                  ? 'bg-[#1b4332] text-white'
                  : 'bg-white text-[#55473e] border border-[#ded8cb] hover:border-[#1b4332]'
              }`}
            >
              {t('reviews.filterAll')}
            </button>
            <button
              onClick={() => setCategory('nem')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                category === 'nem'
                  ? 'bg-[#1b4332] text-white'
                  : 'bg-white text-[#55473e] border border-[#ded8cb] hover:border-[#1b4332]'
              }`}
            >
              {t('reviews.filterNem')}
            </button>
            <button
              onClick={() => setCategory('pho')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                category === 'pho'
                  ? 'bg-[#1b4332] text-white'
                  : 'bg-white text-[#55473e] border border-[#ded8cb] hover:border-[#1b4332]'
              }`}
            >
              {t('reviews.filterPho')}
            </button>
            <button
              onClick={() => setCategory('vibe')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                category === 'vibe'
                  ? 'bg-[#1b4332] text-white'
                  : 'bg-white text-[#55473e] border border-[#ded8cb] hover:border-[#1b4332]'
              }`}
            >
              {t('reviews.filterVibe')}
            </button>
          </div>

        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-3xl border border-[#e8e2d8] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Author Info & Platform Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-11 h-11 rounded-full object-cover border border-emerald-100"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-bold text-[#1b4332] text-sm leading-tight">
                        {rev.author}
                      </div>
                      <div className="text-[11px] text-[#8d7b68] flex items-center gap-1 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-[#52b788]" />
                        <span>{language === 'th' ? rev.authorTypeTh : rev.authorTypeEn}</span>
                      </div>
                    </div>
                  </div>

                  {/* Platform Indicator Tag */}
                  {rev.source === 'wongnai' ? (
                    <span className="px-2 py-0.5 rounded-md bg-[#0050f0]/10 text-[#0050f0] text-[10px] font-black tracking-wide uppercase">
                      Wongnai
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-800 text-[10px] font-black tracking-wide uppercase">
                      Google
                    </span>
                  )}
                </div>

                {/* Rating Stars & Timestamp */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">
                    {language === 'th' ? rev.dateTh : rev.dateEn}
                  </span>
                </div>

                {/* Review Quote */}
                <p className="text-[#3e342f] text-xs sm:text-sm leading-relaxed italic mb-4">
                  "{language === 'th' ? rev.textTh : rev.textEn}"
                </p>
              </div>

              {/* Recommended Dish Tag */}
              {rev.dishRecommendedTh && (
                <div className="pt-3 border-t border-[#f4eee6] flex items-center gap-2 text-xs">
                  <span className="text-[#8d7b68] font-medium text-[11px]">
                    {language === 'th' ? 'เมนูแนะนำ:' : 'Recommended:'}
                  </span>
                  <span className="bg-[#52b788]/10 text-[#1b4332] font-bold px-2 py-0.5 rounded-md text-[11px]">
                    {language === 'th' ? rev.dishRecommendedTh : rev.dishRecommendedEn}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dual External Profile Verification Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
          <a
            href="https://maps.google.com/?q=ร้านอาหารเวียดนาม+หง่อนหลำ+จุฬา+ซอย+9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#f4eee6] text-[#1b4332] font-bold text-xs sm:text-sm border border-[#d6cfc2] shadow-sm hover:shadow-md transition-all"
          >
            <MessageSquareQuote className="w-4 h-4 text-[#2d6a4f]" />
            <span>{t('reviews.viewAllGoogle')}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>

          <a
            href="https://www.wongnai.com/businesses?q=หง่อนหลำ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-blue-50/50 text-[#0050f0] font-bold text-xs sm:text-sm border border-[#0050f0]/30 shadow-sm hover:shadow-md transition-all"
          >
            <Award className="w-4 h-4 text-[#0050f0]" />
            <span>{t('reviews.viewAllWongnai')}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

      </div>
    </section>
  );
};

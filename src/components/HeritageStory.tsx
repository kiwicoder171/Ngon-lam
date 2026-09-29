import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Clock, Calendar, Leaf, Award } from 'lucide-react';

export const HeritageStory: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="story" className="py-16 md:py-24 bg-[#f4eee6] border-y border-[#e6ded2] relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-[#1b4332]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#e9c46a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual collage of kitchen craft & ingredients */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Main Photo: Steaming broth / traditional kitchen */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=900&auto=format&fit=crop"
                  alt="Traditional Vietnamese cooking preparation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="500"
                  height="625"
                />
              </div>

              {/* Sub Photo Overlaid: Fresh Vietnamese herbs */}
              <div className="absolute -bottom-6 -right-6 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-square hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=500&auto=format&fit=crop"
                  alt="Fresh Vietnamese herbs and mint"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="300"
                  height="300"
                />
              </div>

              {/* Heritage stamp */}
              <div className="absolute top-3 left-3 sm:-top-5 sm:-left-5 bg-[#1b4332] text-[#e9c46a] p-3 sm:p-4 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center">
                <Award className="w-6 h-6 mb-1 text-[#e9c46a]" />
                <span className="text-xl font-black leading-none">1995</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-200 mt-1">
                  {language === 'th' ? 'ก่อตั้ง' : 'Founded'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Story Copy & Credibility Stats */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 bg-[#2d6a4f]/10 text-[#1b4332] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#e9c46a]" />
              <span>{t('story.sectionBadge')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] tracking-tight leading-tight mb-6">
              {t('story.title')}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#55473e] leading-relaxed mb-8">
              <p>{t('story.p1')}</p>
              <p>{t('story.p2')}</p>
              <p className="font-medium text-[#1b4332]">{t('story.p3')}</p>
            </div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#ded6c9]">
              <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-[#ded8cb] shadow-2xs">
                <Clock className="w-5 h-5 text-[#2d6a4f] mb-2" />
                <div className="text-2xl font-black text-[#1b4332]">{t('story.stat1')}</div>
                <div className="text-xs text-[#6e5d52] font-medium leading-tight mt-1">{t('story.stat1Label')}</div>
              </div>

              <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-[#ded8cb] shadow-2xs">
                <Calendar className="w-5 h-5 text-[#2d6a4f] mb-2" />
                <div className="text-2xl font-black text-[#1b4332]">{t('story.stat2')}</div>
                <div className="text-xs text-[#6e5d52] font-medium leading-tight mt-1">{t('story.stat2Label')}</div>
              </div>

              <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-[#ded8cb] shadow-2xs">
                <Leaf className="w-5 h-5 text-[#2d6a4f] mb-2" />
                <div className="text-2xl font-black text-[#1b4332]">{t('story.stat3')}</div>
                <div className="text-xs text-[#6e5d52] font-medium leading-tight mt-1">{t('story.stat3Label')}</div>
              </div>

              <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-[#ded8cb] shadow-2xs">
                <Award className="w-5 h-5 text-[#2d6a4f] mb-2" />
                <div className="text-2xl font-black text-[#1b4332]">{t('story.stat4')}</div>
                <div className="text-xs text-[#6e5d52] font-medium leading-tight mt-1">{t('story.stat4Label')}</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

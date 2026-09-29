import React, { useState, useEffect } from 'react';
import { MEDIA_VIDEOS, MediaVideo } from '../data/restaurantData';
import { useLanguage } from '../context/LanguageContext';
import { Tv, Play, ExternalLink, X, Sparkles, CheckCircle2 } from 'lucide-react';

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const MediaShowcase: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<MediaVideo | null>(null);

  // Close modal on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
      }
    };

    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedVideo]);

  return (
    <section id="media" className="py-16 md:py-24 bg-[#fcfaf7] border-t border-[#eee7dc] relative overflow-hidden">
      {/* Background subtle ambient glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#e9c46a]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-700 border border-red-200/50 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
            <Tv className="w-3.5 h-3.5 text-red-600" />
            <span>{t('media.sectionBadge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] tracking-tight mb-4">
            {t('media.title')}
          </h2>
          <p className="text-base sm:text-lg text-[#6c584c] leading-relaxed">
            {t('media.subtitle')}
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MEDIA_VIDEOS.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group bg-white rounded-3xl overflow-hidden border border-[#e8e2d8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={language === 'th' ? video.titleTh : video.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="480"
                  height="360"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-colors" />

                {/* Top-Left Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-[#1b4332]/90 backdrop-blur-xs text-[#e9c46a] text-[11px] font-bold rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#e9c46a]" />
                    {language === 'th' ? video.badgeTh : video.badgeEn}
                  </span>
                </div>

                {/* Top-Right YouTube Tag */}
                <div className="absolute top-3 right-3">
                  <span className="p-1.5 bg-black/60 backdrop-blur-xs text-white rounded-full flex items-center justify-center shadow-xs">
                    <YoutubeIcon className="w-4 h-4 text-red-500 fill-current" />
                  </span>
                </div>

                {/* Center Big Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom preview note */}
                <div className="absolute bottom-2.5 left-3 right-3 text-white text-[11px] font-medium flex items-center justify-between drop-shadow-sm">
                  <span className="truncate max-w-[200px] text-gray-200">
                    {video.channelName}
                  </span>
                  <span className="bg-black/60 px-2 py-0.5 rounded text-[10px] text-emerald-300 font-semibold">
                    {language === 'th' ? 'กดชมคลิป' : 'Watch Video'}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Channel Tag */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8d7b68] mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    <span className="truncate">{video.channelName}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#1b4332] leading-snug group-hover:text-[#2d6a4f] transition-colors line-clamp-2 mb-2.5">
                    {language === 'th' ? video.titleTh : video.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#6c584c] line-clamp-2 leading-relaxed mb-4">
                    {language === 'th' ? video.descriptionTh : video.descriptionEn}
                  </p>
                </div>

                {/* Card Action Bar */}
                <div className="pt-3.5 border-t border-[#f0ece1] flex items-center justify-between text-xs font-bold text-[#2d6a4f] group-hover:text-[#1b4332] transition-colors">
                  <span className="flex items-center gap-1.5">
                    <Play className="w-3.5 h-3.5 fill-current text-red-600" />
                    <span>{t('media.watchVideo')}</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#1b4332] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Responsive Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="bg-[#1b4332] text-white rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 truncate">
                <div className="p-2 rounded-xl bg-red-600 text-white shrink-0">
                  <YoutubeIcon className="w-5 h-5 fill-current" />
                </div>
                <div className="truncate">
                  <span className="text-[11px] font-bold text-[#e9c46a] uppercase tracking-wider block">
                    {language === 'th' ? selectedVideo.badgeTh : selectedVideo.badgeEn} • {selectedVideo.channelName}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold truncate">
                    {language === 'th' ? selectedVideo.titleTh : selectedVideo.titleEn}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedVideo(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer shrink-0"
                title={t('media.close')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Iframe (16:9 Ratio) */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={language === 'th' ? selectedVideo.titleTh : selectedVideo.titleEn}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-[#0f281e] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
              <p className="text-emerald-100/80 leading-relaxed max-w-xl">
                {language === 'th' ? selectedVideo.descriptionTh : selectedVideo.descriptionEn}
              </p>
              
              <a
                href={selectedVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold transition-colors shrink-0 shadow-sm"
              >
                <YoutubeIcon className="w-4 h-4 fill-current" />
                <span>{t('media.watchOnYoutube')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

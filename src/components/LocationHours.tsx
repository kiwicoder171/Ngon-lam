import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Clock, Phone, Navigation, Car, Train, Bike } from 'lucide-react';
import { getRestaurantStatus } from '../data/restaurantData';

interface LocationHoursProps {
  onOpenReservation: () => void;
  onOpenDelivery: () => void;
}

export const LocationHours: React.FC<LocationHoursProps> = ({
  onOpenReservation,
  onOpenDelivery,
}) => {
  const { language, t } = useLanguage();
  const status = getRestaurantStatus();

  return (
    <section id="location" className="py-16 md:py-24 bg-[#f4eee6] border-t border-[#ded8cb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2d6a4f]/10 text-[#1b4332] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#2d6a4f]" />
            <span>{t('location.sectionBadge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] tracking-tight mb-3">
            {t('location.title')}
          </h2>
          <p className="text-base sm:text-lg text-[#6c584c]">
            {t('location.subtitle')}
          </p>
        </div>

        {/* Content Split: Details Cards on Left, Interactive Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Real-time Status & Hours Card */}
            <div className="bg-white p-6 rounded-3xl border border-[#ded8cb] shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-[#1b4332]">
                    <Clock className="w-5 h-5 text-[#2d6a4f]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1b4332] text-base">
                      {t('location.hoursTitle')}
                    </h3>
                    <p className="text-xs text-[#8d7b68]">
                      {language === 'th' ? status.hoursTextTh : status.hoursTextEn}
                    </p>
                  </div>
                </div>

                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                  status.isOpen 
                    ? 'bg-emerald-100 text-emerald-800' 
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse-dot' : 'bg-amber-500'}`} />
                  <span>{language === 'th' ? (status.isOpen ? 'เปิดอยู่' : 'ปิดอยู่') : (status.isOpen ? 'Open Now' : 'Closed')}</span>
                </div>
              </div>

              <div className="p-3 bg-[#faf8f5] rounded-xl text-xs sm:text-sm text-[#55473e] font-medium">
                {language === 'th' ? status.statusTextTh : status.statusTextEn}
              </div>
            </div>

            {/* Address & Direction Card */}
            <div className="bg-white p-6 rounded-3xl border border-[#ded8cb] shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1b4332] text-base mb-1">
                    {t('location.addressTitle')}
                  </h3>
                  <p className="text-sm font-semibold text-[#2c221e] leading-relaxed">
                    {t('location.address')}
                  </p>
                  <p className="text-xs text-[#8d7b68] mt-1">
                    {t('location.landmark')}
                  </p>
                </div>
              </div>

              {/* Transit & Commute tips */}
              <div className="space-y-2 pt-4 border-t border-[#f0ece1] text-xs text-[#55473e]">
                <div className="flex items-center gap-2">
                  <Train className="w-4 h-4 text-[#2d6a4f] shrink-0" />
                  <span>{t('location.transitMRT')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#2d6a4f] shrink-0" />
                  <span>{t('location.transitParking')}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=ร้านอาหารเวียดนาม+หง่อนหลำ+จุฬา+ซอย+9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1b4332] hover:bg-[#081c15] text-white font-bold text-sm shadow-md transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#e9c46a]" />
                  <span>{t('location.getDirections')}</span>
                </a>

                <button
                  onClick={onOpenReservation}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-[#1b4332] text-[#1b4332] hover:bg-[#1b4332] hover:text-white font-bold text-sm transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>{language === 'th' ? 'จองโต๊ะ / ติดต่อร้าน' : 'Reserve / Contact'}</span>
                </button>
              </div>
            </div>

            {/* Quick Delivery Callout */}
            <div className="bg-[#1b4332] text-white p-5 rounded-3xl shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-2xl">
                  <Bike className="w-6 h-6 text-[#e9c46a]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base">
                    {language === 'th' ? 'ไม่อยากเดินทาง? สั่ง Delivery เลย' : "Can't Visit? Order Delivery Direct"}
                  </h4>
                  <p className="text-xs text-emerald-200/80 mt-0.5">
                    LINE MAN & Robinhood
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenDelivery}
                className="px-4 py-2.5 rounded-xl bg-[#e9c46a] hover:bg-[#dfb552] text-[#1b4332] font-black text-xs transition-colors shrink-0 cursor-pointer shadow-md"
              >
                {language === 'th' ? 'สั่งทันที' : 'Order Now'}
              </button>
            </div>

          </div>

          {/* Interactive Map Column */}
          <div className="lg:col-span-6 h-full min-h-[320px] sm:min-h-[420px] lg:min-h-[480px]">
            <div className="w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gray-200 relative min-h-[320px] sm:min-h-[420px]">
              <iframe
                title="Ngon Lam Vietnamese Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7486745196556!2d100.5262113!3d13.7367001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299292a8e8b07%3A0x7d6fbc3b7152060c!2sChulalongkorn%209%20Alley%2C%20Wang%20Mai%2C%20Pathum%20Wan%2C%20Bangkok%2010330!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Map Label Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 pointer-events-none">
                <div className="w-8 h-8 rounded-full bg-[#1b4332] text-[#e9c46a] flex items-center justify-center font-bold text-xs">
                  NL
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1b4332]">
                    {language === 'th' ? 'หง่อนหลำ จุฬา ซอย 9' : 'Ngon Lam Chula 9'}
                  </div>
                  <div className="text-[10px] text-gray-500">
                    {language === 'th' ? 'ใกล้สามย่านมิตรทาวน์' : 'Near Samyan Mitrtown'}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const FacultyCards = () => {
  const faculties = [
    { name: 'Agriculture', description: 'Explore our courses in Agriculture.' },
    { name: 'Allied Health', description: 'Find out more about Allied Health.' },
    { name: 'Art and Islamic', description: 'Discover Art and Islamic studies.' },
    { name: 'Basic Medical', description: 'Learn about Basic Medical Sciences.' },
  ];

  return (
    <div className="text-center justify-center py-8 mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">
        Available <span className="text-orange-600">Faculties</span>
      </h2>
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        pagination={{ clickable: true }}
        speed={1000}
        slidesPerView={1}  
        centeredSlides={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        spaceBetween={10}  
      >
        {faculties.map((faculty, index) => (
          <SwiperSlide key={index} className="slide-inner">
            <div className="w-64 h-64 flex items-center justify-center bg-blue-200 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800">{faculty.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FacultyCards;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow  } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import faculty from '../../assets/images/faculty.jpg'

const FacultyCards = () => {
  const faculties = [
    { name: 'Agriculture', description: 'Explore our courses in Agriculture.', image: faculty },
    { name: 'Allied Health', description: 'Find out more about Allied Health.', image: faculty },
    { name: 'Art and Islamic', description: 'Discover Art and Islamic studies.', image: faculty },
    { name: 'Basic Medical', description: 'Learn about Basic Medical Sciences.', image: faculty },
    // Add more faculties with descriptions as needed
  ];

  return (
    <div className="text-center justify-center px-16 py-8 mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">
        Available <span className="text-orange-600">Faculties</span>
      </h2>
      <Swiper 
       modules={[EffectCoverflow, Navigation, Pagination]}
       pagination={{ clickable: true }}
       speed={1000}
       slidesPerView="auto"
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
      
      spaceBetween={0}
      >
        {faculties.map((faculty, index) => (
          <SwiperSlide key={index} className="slide-inner">
            
              <div className="items-center w-52 h-52 mb-4">
              <img
                  src={faculty.image}
                  alt={faculty.name}
                  className=""
                />
                
              </div>
              {/* <p className="text-gray-600">{faculty.description}</p> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
 
export default FacultyCards;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y  } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
        spaceBetween={10}
        slidesPerView={3} 
        navigation
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    pagination={true}
      scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 1, 
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2, 
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3, 
            spaceBetween: 10,
          },
        }}
      >
        {faculties.map((faculty, index) => (
          <SwiperSlide key={index}>
            <div className=" shadow-md text-center items-center justify-center rounded-lg mx-auto my-4 max-w-40">
              <div className="items-center mb-4">
              <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {faculty.name}
                </h3>
              </div>
              <p className="text-gray-600">{faculty.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
 
export default FacultyCards;

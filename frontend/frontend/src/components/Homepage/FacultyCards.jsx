import React from 'react'
import Slider from 'react-slick';
// import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'


const FacultyCards = () => {
  const faculties = [
    { name: 'Agriculture', image: 'path_to_image' },
    { name: 'Allied Health', image: 'path_to_image' },
    { name: 'Art and Islamic', image: 'path_to_image' },
    { name: 'Basic Medical', image: 'path_to_image' },
    { name: 'Clinical', image: 'path_to_image' },
    { name: 'Communication', image: 'path_to_image' },
    { name: 'Computing', image: 'path_to_image' },
    { name: 'Dentistry', image: 'path_to_image' },
    { name: 'Earth and Environmental', image: 'path_to_image' },
    { name: 'Education', image: 'path_to_image' },
    { name: 'Engineering', image: 'path_to_image' },
    { name: 'Law', image: 'path_to_image' },
    { name: 'Life Science', image: 'path_to_image' },
    { name: 'Management Science', image: 'path_to_image' },
    { name: 'Pharmaceutical', image: 'path_to_image' },
    { name: 'Physical Sciences', image: 'path_to_image' },
    { name: 'Social Sciences', image: 'path_to_image' },
    { name: 'Veterinary', image: 'path_to_image' },
    
  ];

  const settings ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // nextArrow: <FaAngleRight className="text-orange-600" />,
    // prevArrow: <FaAngleLeft className="text-orange-600" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    
    <div className="text-center items-center justify-center px-16 mx-auto">
      <h2 className="text-2xl py-5 text-blue-700 font-bold mb-5">Available <span className='text-orange-600'>Faculties</span></h2>
      <div className="px-16 w-full">
      <Slider {...settings}>
        {faculties.map((faculty, index) => (
          <div key={index} className="p-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full h-48  object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
                {faculty.name}
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
    
  )
}

export default FacultyCards
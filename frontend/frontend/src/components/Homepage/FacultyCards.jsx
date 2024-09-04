import React from 'react'
import Slider from 'react-slick';
import faculty from '../../assets/images/faculty.jpg';
// import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'


const FacultyCards = () => {
  const faculties = [
    { name: 'Agriculture', image: faculty },
    { name: 'Allied Health', image: faculty },
    { name: 'Art and Islamic', image: faculty },
    { name: 'Basic Medical', image: faculty },
    { name: 'Clinical', image: faculty },
    { name: 'Communication', image: faculty },
    { name: 'Computing', image: faculty },
    { name: 'Dentistry', image: faculty },
    { name: 'Earth and Environmental', image: faculty },
    { name: 'Education', image: faculty },
    { name: 'Engineering', image: faculty },
    { name: 'Law', image: faculty },
    { name: 'Life Science', image: faculty },
    { name: 'Management Science', image: faculty },
    { name: 'Pharmaceutical', image: faculty },
    { name: 'Physical Sciences', image: faculty },
    { name: 'Social Sciences', image: faculty },
    { name: 'Veterinary', image: faculty },
    
  ];

  const settings ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    // autoplaySpeed: 1000,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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
                className="w-full h-48 object-cover"
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
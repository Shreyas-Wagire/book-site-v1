import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from 'react-icons/fa';
import { Avatar } from 'flowbite-react';
import proPic from '../assets/profile.jpg';
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-8 px-4 lg:px-24'>
      <h2 className='text-3xl font-bold text-center mb-8'> Customer Reviews</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index} className='shadow-md bg-cyan-100 p-6 rounded-lg border'>
            <div className='space-y-4'>
              <div className='text-yellow-500 flex gap-2'>
                {[...Array(5)].map((_, starIndex) => (
                  <FaStar key={starIndex} />
                ))}
              </div>
              <p className='text-lg'>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nam minus repellendus neque rem
                aliquam quod nobis, sequi sed fugit, sint ullam ducimus eveniet placeat quisquam libero esse!
                Necessitatibus, ratione?"
              </p>
              <Avatar img={proPic} rounded bordered className='w-12 h-12 mx-auto' />
              <h5 className='text-lg font-medium text-center'>Customer Name</h5>
              <p className='text-base text-center'>Job Title, Company</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Review;

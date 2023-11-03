
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function SwiperSliders() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='w-full'>
            <img className='w-full' src="https://i.ibb.co/4dp0wtJ/Highlight-Surface-Pro-9-Platinum-FY24-HOL-VP3-1083x600.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full'>
            <img className='w-full' src="https://i.ibb.co/X3ybdbP/hero-iphone15pro-i70z9oz3hj2i-medium.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full'>
            <img className='w-full' src="https://i.ibb.co/fddpy8p/hero-apple-watch-series-9-order-d0fi9mb84dci-medium.jpg" alt="" />
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

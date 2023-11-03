import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import Card from "./Card";


export default function ProductCategories() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold text-center mb-3">We have <span className="text-green-500">various</span> products</h2>
      <p className="mb-8 text-center sm:w-1/2 mx-auto text-sm sm:text-base">Dive into a world of choice and discovery with our wide range of categories. From the latest gadgets to fashion trends and more, our carefully curated sections have something for everyone. Browse and find exactly what you're looking for in style and convenience.</p>
      
      <div>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
           
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {/* slide 1 */}
          <SwiperSlide>
          <Card title="Sony Bravia 4K TV" image="https://i.ibb.co/3dTxjKs/Sony-Bravia-4-K-TV.jpg"/>
          </SwiperSlide>
          {/* slide 2 */}
          <SwiperSlide>
          <Card title={'Phone'} image="https://i.ibb.co/NTtCfkc/i-Phone-13-Pro.jpg"/>
          </SwiperSlide>
          {/* slide 3 */}
          <SwiperSlide>
          <Card title="Air Drops" image="https://i.ibb.co/v4Xvg2w/Air-Pods-Pro.jpg"/>
          </SwiperSlide>

          <SwiperSlide>
          <Card title="Laptop" image="https://i.ibb.co/GvvV1pt/Mac-Book-Pro.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
          <Card title="Software" image="https://i.ibb.co/nrBsqTv/Microsoft-365.jpg"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

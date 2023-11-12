import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
function App() {

  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{clickable: true}}
      >
        <SwiperSlide>
        {({ isActive, isNext }) => (
          <div className='slide_div'>Current Slide is {isActive && 'Active'} { isNext && 'Next'}</div>
        )}  
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive, isNext }) => (
            <div className='slide_div'>Current Slide is {isActive && 'Active'} { isNext && 'Next'}</div>
          )}
        </SwiperSlide>
        <SwiperSlide>
        {({ isActive , isNext}) => (
            <div className='slide_div'>Current Slide is {isActive && 'Active'} { isNext && 'Next'}</div>
          )}
        </SwiperSlide>
        <SwiperSlide>
        {({ isActive, isNext }) => (
            <div className='slide_div'>Current Slide is {isActive && 'Active'} { isNext && 'Next'}</div>
          )}</SwiperSlide>
        <SwiperSlide>
        {({ isActive, isNext }) => (
            <div className='slide_div'>Current Slide is {isActive && 'Active'} { isNext && 'Next'}</div>
          )}</SwiperSlide>
     </Swiper>
    </>
  )
}

export default App

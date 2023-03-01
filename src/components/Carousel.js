import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import pic_1 from "../images/pic_1.jpg";
import pic_2 from "../images/pic_2.jpg";
import pic_3 from "../images/pic_3.jpg";
import pic_4 from "../images/pic_4.jpg";

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        // slidesPerView={2}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="carouselSlide">
            {" "}
            <img src={pic_2} alt="pic-2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carouselSlide">
            {" "}
            <img src={pic_3} alt="pic-3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carouselSlide">
            {" "}
            <img src={pic_4} alt="pic-4" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carouselSlide">
            {" "}
            <img src={pic_1} alt="pic-1" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;

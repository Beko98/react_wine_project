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
  const carouselData = [
    {
      imgUrl: pic_1,
      text: "lorem ipsum",
    },
    {
      imgUrl: pic_2,
      text: "lorem ipsum",
    },
    {
      imgUrl: pic_3,
      text: "lorem ipsum",
    },
    {
      imgUrl: pic_4,
      text: "lorem ipsum",
    },
  ];

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
        {carouselData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="carouselSlide">
                <img src={slide.imgUrl} alt="pic-2" />
                <h1 className="carouselText">{slide.text}</h1>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./../css/contributors.css";

const contrArr = [
  {
    name: "David Anderson",
    title: "Idea creator",
    img: "https://i.ibb.co/q9rrnkP/ins-11.png",
    speech:
      "Step into a realm of robotic amazement, thanks to our network of suppliers renowned for crafting imaginative play with every creation.",
  },
  {
    name: "Andrew Davis",
    title: "Supplier",
    img: "https://i.ibb.co/B44XRjM/ins-10.png",
    speech:
      "Unwrap the future with robot companions sourced exclusively from the best suppliers, where innovation and enchantment come to life.",
  },
  {
    name: "Jane Smith",
    title: "Supplier",
    img: "https://i.ibb.co/RvJJZK3/ins-8.png",
    speech:
      "Experience excellence in robotics through our curated collection, sourced from top suppliers that specialize in crafting magical moments.",
  },
  {
    name: "Robert Thompson",
    title: "Supplier",
    img: "https://i.ibb.co/C5NM5Xz/ins-7.png",
    speech:
      "Quality meets wonder in every robot we offer, as we partner with leading suppliers to deliver laughter, learning, and boundless fun.",
  },
];

const Contributors = () => {
  return (
    <div className="py-5 container mx-auto">
      <h1 className="bebas-font py-5 fw-bold text-center text-white">
        Top Contributors
      </h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{
          paddingTop: "70px",
          paddingBottom: "70px",
          //   "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "#fff",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {contrArr.map((el, indx) => (
          <SwiperSlide key={indx}>
            <div className="contrib_card p-5">
              <div className="img">
                <img src={el.img} alt="contributor" />
              </div>
              <h4 className="bebas-font fw-bold text-end text-white">
                {el.name}
              </h4>
              <h6 className="bebas-font fw-bold text-end theme-color">
                {el.title}
              </h6>
              <p className="py-3">"{el.speech}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Contributors;

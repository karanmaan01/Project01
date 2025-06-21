import React from "react";
import bg1 from "../assets/pic1.jpg";
import bg2 from "../assets/pic4.jpg";
import bg3 from "../assets/pic5.jpg";
import item1 from "../assets/Tomato.jpg";
import item2 from "../assets/Carrots.jpg";
import item3 from "../assets/Cauliflower.jpg";
import item4 from "../assets/Potatos.jpg";
import item5 from "../assets/Onion.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const products = [
  { img: item1, title: "Organic Tomatoes", price: "₹40/kg" },
  { img: item2, title: "Fresh Carrots", price: "₹35/kg" },
  { img: item3, title: "Cauliflower", price: "₹25/kg" },
  { img: item4, title: "Desi Potatoes", price: "₹30/kg" },
  { img: item5, title: "Farm Fresh Onions", price: "₹28/kg" },
];

const backgroundSlides = [
  { img: bg1, text: "Fresh from the Farm to Your Plate" },
  { img: bg2, text: "Nature’s Best, Handpicked for You" },
  { img: bg3, text: "Farm Fresh Goodness Delivered Daily" },
];

const Home = () => {
  return (
    <div className="w-full bg-gray-100">
      {/* Background Image Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        loop
        pagination={{ clickable: true }}
        className="w-full h-[500px]"
      >
        {backgroundSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[500px] w-full bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <h1
                className="text-4xl md:text-5xl font-black text-white text-center z-10"
                style={{
                  textShadow: `
                    -2px -2px 0 #000,
                    2px -2px 0 #000,
                    -2px 2px 0 #000,
                    2px 2px 0 #000,
                    0px 0px 4px #000
                  `,
                }}
              >
                {slide.text}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Product Slider */}
      <section className="px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Recommended Fresh Veggies For You</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 3000 }}
          loop
        >
          {products.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-black p-4 rounded-xl shadow hover:shadow-xl transition">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-white font-bold">{item.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Home;
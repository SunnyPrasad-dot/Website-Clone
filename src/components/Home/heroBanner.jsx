import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./heroBanner.css";

import i1 from "../../assets/Images/i1.png";
import i2 from "../../assets/Images/i2.png";
import i3 from "../../assets/Images/i3.png";
import i4 from "../../assets/Images/i4.png";
import i5 from "../../assets/Images/i5.png";

export function HeroBanner() {
  const slides = [
    { img: i1, title: "Small Leather Gabbi Handbag In Baby Blue", desc: "JW PEI • $155 to $320" },
    { img: i2, title: "Medium Vegan Suede Bucket Bag In Neutrals", desc: "Noctrala • $257 to $2700" },
    { img: i3, title: "Florence Baroque Pearl Drop Earrings In Gold", desc: "DEAR DARLING • $104 to $120" },
    { img: i4, title: "Monochrome Gg Rectangle Acetate Sunglasses", desc: "GUCCI • $280 to $307" },
    { img: i5, title: "Knee-high Suede Boots With Leather Block Heel In Brown", desc: "VALENTINO GARAVANI • $1574 to $1950" },
  ];

  return (
    <section>
      <div className="container">
        <div className="col-12">
          <div className="info text-center mt-5">
            <p className="fw-medium fs-4">SHOPPING JUST GOT WAY SMARTER</p>
            <h1 className="info-heading display-2 fw-medium">ModeSens before you buy</h1>
            <p className="text-secondary fs-4">
              Search anything and get it at the best price with the world’s <br />
              most intelligent shopping assistant.
            </p>
            <a href="#" className="info-btn btn btn-dark px-5 fs-5">
              JOIN NOW
            </a>
          </div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay]}
            loop={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={30}
            speed={1500}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: "auto" },
            }}

            className="mySwiper"
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card">
                  <img src={item.img} alt={item.title} />
                  {/* WRAP TEXT IN CARD-FOOTER */}
                  <div className="card-footer">
                      <h5>{item.title}</h5>
                      {item.desc && <p>{item.desc}</p>}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
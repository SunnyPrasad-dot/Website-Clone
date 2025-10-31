import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "./heroBanner.css";

// images - keep your imports
// NOTE: Make sure these paths are correct for your project structure!
import i1 from "../../assets/Images/i1.png";
import i2 from "../../assets/Images/i2.png";
import i3 from "../../assets/Images/i3.png";
import i4 from "../../assets/Images/i4.png";
import i5 from "../../assets/Images/i5.png";

export function HeroBanner() {
  const slides = [
    { type: "image", img: i1, title: "Small Leather Gabbi Handbag In Baby Blue", desc: "JW PEI • $155 to $320" },
    { type: "image", img: i2, title: "Medium Vegan Suede Bucket Bag In Neutrals", desc: "Noctrala • $257 to $2700" },
    {
      type: "comparison",
      img: i3,
      title: "Florence Baroque Pearl Drop Earrings In Gold",
      desc: "DEAR DARLING",
      stores: [
        { name: "REVOLVE", price: "$104", discount: "(10% OFF)", originalPrice: "$115", link: "#" },
        { name: "MATCHESFASHION", price: "$248", discount: "", originalPrice: "", link: "#" },
        { name: "NET-A-PORTER", price: "$317", discount: "", originalPrice: "", link: "#" },
      ],
    },
    { type: "image", img: i4, title: "Monochrome Gg Rectangle Acetate Sunglasses", desc: "GUCCI • $280 to $307" },
    { type: "image", img: i5, title: "Knee-high Suede Boots With Leather Block Heel In Brown", desc: "VALENTINO GARAVANI • $1574 to $1950" },
  ];

  const renderCardContent = (item) => {
    if (item.type === "image") {
      return (
        <div className="card image-card">
          <div className="image-card-inner">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="card-footer">
            <h5>{item.title}</h5>
            {item.desc && <p>{item.desc}</p>}
          </div>
        </div>
      );
    }

    // Price comparison card with conditional class for CSS styling
    if (item.type === "comparison") {
      return (
        <div className={`card comparison-card is-comparison-card`}>
          <div className="comparison-header">
            <div className="product-info">
              <div className="product-icon">
                <img src={item.img} alt="" />
              </div>
              <div className="product-text">
                <p className="small-title">{item.title}</p>
                <p className="small-desc">{item.desc}</p>
              </div>
            </div>
            {/* Updated price summary text to match the original video */}
            <p className="price-summary">
              Found at <strong>{item.stores.length} stores</strong>, with the lowest price at
              <strong>{item.stores[0].price}</strong> from <strong>{item.stores[0].name}</strong>
            </p>
          </div>

          <div className="store-list">
            {item.stores.map((store, index) => (
              <div className="store-item d-flex justify-content-between align-items-center" key={index}>
                <div className="store-details d-flex align-items-center">
                  {/* Using first two letters of store name for logo placeholder */}
                  <div className="store-logo me-2">{store.name.split(" ").map(w => w[0]).join("").substring(0,2)}</div>
                  <div className="store-prices">
                    <span className="current-price">
                      {store.price} {store.discount && <span className="discount">{store.discount}</span>}
                    </span>
                    {store.originalPrice && <span className="original-price">${store.originalPrice}</span>}
                  </div>
                </div>
                <a href={store.link} className="visit-btn btn btn-sm btn-dark">
                  VISIT STORE
                </a>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="hero-section">
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

          <div className="swiper-wrapper-outer">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              spaceBetween={32}
              speed={700} // transition speed (ms)
              autoplay={{
                delay: 1100, // center hold time approx 1.1s to match original pacing
                disableOnInteraction: false,
                pauseOnMouseEnter: true, // hover pause
              }}
              className="mySwiper"
            >
              {slides.map((item, index) => (
                <SwiperSlide key={index} className="custom-slide">
                  {renderCardContent(item)}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
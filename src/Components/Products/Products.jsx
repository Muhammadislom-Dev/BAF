import "./Products.css"
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import splideImg3 from "../../Assets/Img/1.png"
import splideImg2 from "../../Assets/Img/3.png"
import splideImg1 from "../../Assets/Img/2.png"
import splideImg4 from "../../Assets/Img/3.png"


// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";


const Products =()=>{

  // http://93.189.40.27:2200/categories/?format=json

  const [data, setData] = useState([])

  useEffect( () => {

      fetch(`http://93.189.40.27:2200/categories/?format=json`)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])
  console.log(data);
  
return(
<div className="products">
  <div className="container">
    <div className="products-top">
      <h2 className="products-title">
        Что мы предлагаем?
      </h2>
      <div className="products-btns">
        <button className="product-btn">
          Продукты
        </button>
        <button className="uslugi-btn">
          Услуги
        </button>
      </div>
    </div>
    <div className="products-slider">
      <Swiper slidesPerView={4} spaceBetween={30} slidesPerGroup={4} loop={true} loopFillGroupWithBlank={true}
        navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
          {
            data && data.map((e) => (
              <SwiperSlide>
                <Link  to={`/productpage${e.id}`} >
                  <div className="splide-header">
                    <img src={e.image} alt="" className="splide-img" />
                  </div>
                  <h2 className="splide-title">
                    {e.name_en} </h2>
                </Link>
            </SwiperSlide>
            ))
          }
        {/* <SwiperSlide>
          <Link to="/categorypage">
          <div className="splide-header">
            <img src={splideImg1} alt="" className="splide-img" />
          </div>
          <h2 className="splide-title">
            Ткани </h2>
            </Link>
        </SwiperSlide> */}
     
      </Swiper>

    </div>
  </div>
</div>
)
}

export default Products;
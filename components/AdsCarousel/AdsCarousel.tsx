import React from "react";
import Slider from "react-slick";
import { isArray } from "../../utils";
import Image from "next/image";
import Link from "next/link";

import styles from "./AdsCarousel.module.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface AdsCarouselInterface {
  items: any
}

const AdsCarousel = (props: AdsCarouselInterface) => {
  const {items} = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dotsClass: styles.slick_dots
  }
  return (
    <div>
      <Slider className={styles.slider} {...settings}>
        {isArray(items) && items.map((item: any, index: number) => (
          <Link key={index} className={styles.item} href={item.link}>
            <Image
              className={styles.image}
              src={item.img || require("../../public/AdsBannerPlaceholder.png")}              
              fill
              alt=""
            />
          </Link>
        ))}
      </Slider>
    </div>
    
  )
}

export default AdsCarousel;
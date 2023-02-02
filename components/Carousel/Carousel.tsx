import React from "react";
import Slider from "react-slick";
import { isArray } from "../../utils";
import Image from "next/image";
import Link from "next/link";
import Icon from "../Icon/Icon";
import classNames from "classnames";

import styles from "./Carousel.module.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  children: any,
  numberShow: number,
  isAuto: boolean,
  className?: any
}

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className={classNames(styles.next_btn, styles.nav_btn)} onClick={onClick}>
      <Icon 
        icon="black-left-cadet"
        size={24}
        />
      </div>
  );
}

const PrevArrow = (props: any) => {
  const { onClick } = props;

  return (
    <div className={classNames(styles.prev_btn, styles.nav_btn)} onClick={onClick}>
      <Icon 
        icon="black-left-cadet" 
        size={24}
      />
    </div>
  );
}

const Carousel = (props: CarouselProps) => {
  const {isAuto, children, numberShow, className} = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: numberShow,
    slidesToScroll: numberShow,
    autoplay: isAuto,
    autoplaySpeed: 5000,
    dotsClass: styles.slick_dots,
  }


  return (
    (numberShow < children.length) ? (
      <div>
        <Slider className={classNames(styles.slider, className)} {...settings}>
          {children}
        </Slider>
      </div>
    ) :
    (
      <div className={classNames(styles.list__wrapper, className)}>
        <div className={styles.list_track}>
          {children}
        </div>
      </div>
    )
  )
}

export default Carousel;
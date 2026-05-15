"use client";

import Slider from "react-slick";
import Image from "next/image";
import styles from "./slider.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider({ images = [] }) {
  // Kiểm tra nếu không có ảnh
  if (!Array.isArray(images) || images.length === 0) {
    return <p className={styles.error}>Không có ảnh hiển thị</p>;
  }

  // Cấu hình slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.imageWrapper}>
              <Image
                src={img}
                alt={`product-${index}`}
                width={600}
                height={300}
                className={styles.mainImg}
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Thumbnail list */}
      <div className={styles.thumbnailList}>
        {images.map((img, i) => (
          <div key={i} className={styles.thumbWrapper}>
            <Image
              src={img}
              width={80}
              height={80}
              alt={`thumb-${i}`}
              className={styles.thumbImg}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
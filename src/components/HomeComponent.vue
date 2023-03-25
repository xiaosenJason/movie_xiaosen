<template>
  <div className="home">
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src="https://via.placeholder.com/800x400" alt="Carousel Item 1">
        </div>
        <div className="swiper-slide">
          <img src="https://via.placeholder.com/800x400" alt="Carousel Item 2">
        </div>
        <div className="swiper-slide">
          <img src="https://via.placeholder.com/800x400" alt="Carousel Item 3">
        </div>
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'SiteHome',
  mounted() {
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  margin-top: -15px;
  z-index: 10;
  cursor: pointer;
}

.swiper-button-prev {
  left: 10px;
  background: red;
}


.swiper-button-next {
  right: 10px;
  background: blue;
}
</style>

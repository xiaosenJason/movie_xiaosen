<template>
  <div class="movie-site">
    <header>
      <nav>
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">电影</a></li>
          <li><a href="#">电视剧</a></li>
          <li><a href="#">综艺</a></li>
          <li><a href="#">动漫</a></li>
        </ul>
        <div class="search-box">
          <input type="text" placeholder="搜索影视"/>
          <button><i class="fa fa-search"></i></button>
        </div>
      </nav>
    </header>
    <main>
      <div class="carousel">
        <!-- Vue Slick Carousel Component -->
        <vue-slick-carousel :options="carouselOptions">
          <div class="carousel-item">
            <img src="https://via.placeholder.com/800x400" alt="Carousel Item 1">
          </div>
          <div class="carousel-item">
            <img src="https://via.placeholder.com/800x400" alt="Carousel Item 2">
          </div>
          <div class="carousel-item">
            <img src="https://via.placeholder.com/800x400" alt="Carousel Item 3">
          </div>
        </vue-slick-carousel>
      </div>
      <div class="movie-list">
        <div class="movie-list-header">
          <h2>电影排行榜</h2>
          <a href="#">更多</a>
        </div>
        <div class="movie-list-body">
          <div class="movie-item">
            <img src="https://via.placeholder.com/300x450" alt="Movie Item 1">
            <h3>电影标题1</h3>
            <span class="score">评分：8.5</span>
          </div>
          <div class="movie-item">
            <img src="https://via.placeholder.com/300x450" alt="Movie Item 2">
            <h3>电影标题2</h3>
            <span class="score">评分：8.0</span>
          </div>
          <div class="movie-item">
            <img src="https://via.placeholder.com/300x450" alt="Movie Item 3">
            <h3>电影标题3</h3>
            <span class="score">评分：7.8</span>
          </div>
          <div class="movie-item">
            <img src="https://via.placeholder.com/300x450" alt="Movie Item 4">
            <h3>电影标题4</h3>
            <span class="score">评分：7.5</span>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <p>&copy; 2023 B站影视网站</p>
    </footer>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';


export default {
  name: 'MovieSite',
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      carouselOptions: {
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px'
      }
    };
  }
};
</script>

<style>
/* 具体样式可以根据需求自行修改 */
/* 头部导航栏 */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f2f2f2;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-right: 1.5rem;
}

nav ul li:last-child {
  margin-right: 0;
}

nav ul li a {
  color: #333;
  font-size: 1.2rem;
  text-decoration: none;
}

nav ul li a:hover {
  color: #ff5c5c;
}

/* 搜索框 */
.search-box {
  display: flex;
}

.search-box input {
  flex-grow: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 5px 0 0 5px;
}

.search-box button {
  padding: 0.5rem;
  border: none;
  border-radius: 0 5px 5px 0;
  background-color: #ff5c5c;
  color: #fff;
}

/* 轮播图 */
.carousel-item {
  position: relative;
}

.carousel-item img {
  width: 100%;
}

/* 电影列表 */
.movie-list {
  margin-top: 3rem;
}

.movie-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.movie-list-header h2 {
  font-size: 1.5rem;
}

.movie-list-header a {
  color: #ff5c5c;
}

.movie-list-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.movie-item {
  margin-right: 1.5rem;
  text-align: center;
}

.movie-item h3 {
  margin-top: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.movie-item .score {
  display: block;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  color: #999;
}
</style>

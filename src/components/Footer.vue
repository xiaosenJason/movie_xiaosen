<template>
  <footer class="footer">
    <div class="container">
      <p>© 2023 My Website. All Rights Reserved.</p>
      <ul class="social-icons">
        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SiteFooter'
})
</script>

<style>
.footer {
  background-color: #f8f8f8;
  color: #666;
  font-size: 14px;
  padding: 20px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-icons {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.social-icons li {
  margin-right: 10px;
}

.social-icons li:last-child {
  margin-right: 0;
}

.social-icons li a {
  color: #666;
  text-decoration: none;
  font-size: 20px;
}
</style>

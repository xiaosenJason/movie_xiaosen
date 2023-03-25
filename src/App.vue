<template>
  <div className="app">
    <Header/>
    <Home/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import Header from './components/SiteHeader.vue'
import Home from './components/HomeComponent.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Home,
    Footer
  }
})
</script>

<style>
.app {
  font-family: 'Open Sans', sans-serif;
}
</style>

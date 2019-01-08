<template>
  <div id="app">
    <div class="wrapper">
      <va-navibar></va-navibar>
      <va-slider :slideMenuItems="slideMenuItems"></va-slider>
      <Layout></Layout>
    </div>
  </div>
</template>

<script>
import VANaviBar from './views/layout/NaviBar'
import VASlider from './views/layout/Slider'
import Layout from './views/layout/Layout'
import store from './vuex/store.js'
import slideMenuItems from './lib/slideMenuItems.js'

export default {
  name: 'app',
  data () {
    return {
      slideMenuItems: slideMenuItems
    }
  },
  created () {
  },
  components: {
    'va-navibar': VANaviBar,
    'va-slider': VASlider,
     Layout
  },
  store
}
</script>

<style>
 body{
   font-size: 14px;
 }
</style>

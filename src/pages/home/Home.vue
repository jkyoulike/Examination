<template>
<div>
    <home-swiper></home-swiper>
    <h2>前端（网站前台部分）</h2>
    <p>前端即网站前台部分，运行在PC端，移动端等浏览器上展现给用户浏览的网页。随着互联网技术的发展，HTML5，CSS3，前端框架的应用，跨平台响应式网页设计能够适应各种屏幕分辨率，完美的动效设计，给用户带来极高的用户体验</p>
    <h2>核心技术</h2>
    <p>HTML、CSS、JavaScript 这三个是前端开发中最基本也是最必须的三个技能。前端的开发中，在页面的布局时， HTML将元素进行定义，CSS对展示的元素进行定位，再通过JavaScript实现相应的效果和交互。虽然表面看起来很简单，但这里面需要掌握的东西绝对不会少。在进行开发前，需要对这些概念弄清楚、弄明白，这样在开发的过程中才会得心应手。</p>
    <h2>Vue.js框架</h2>
    <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式JavaScript框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，方便与第三方库或既有项目整合</p>
</div>
</template>

<script>
import HomeSwiper from './components/swiper'
export default {
  name: 'Home',
  components:{
      HomeSwiper,
  }
}
</script>

<style scoped>
p{
  text-indent: 2rem
}
a{
  text-decoration: none
}
</style>>

</style>
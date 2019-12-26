<template>
<swiper :options="swiperOption">
        <swiper-slide>
            <router-link to="/City" class="a"> 
            <div class="swiper-img">Html5</div>
            </router-link>
        </swiper-slide>
        <swiper-slide>
            <router-link to="/Cite" class="a"> 
            <div class="swiper-img" style="background:rgba(49,213,253);">CSS</div>
            </router-link>
        </swiper-slide>
        <swiper-slide>
            <router-link to="/Java" class="a"> 
            <div class="swiper-img" style="background:rgba(233,183,12);">javascript</div>
            </router-link>
        </swiper-slide>
        <swiper-slide>
            <router-link to="/Cityvue" class="a"> 
            <div class="swiper-img" style="background:rgba(57,187,126);">Vue.js</div>
            </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
 data() {
      return {
        swiperOption: {
            pagination: '.swiper-pagination',
            loop:true,
            speed:1000,
            autoplay: 1000
        },
      }
    }
}
</script>

<style scoped>
.swiper-img{
    width: 100%;
    height: 14rem;
    background:rgba(255,165,0);
    color: #ffffff;
    font-size: 4rem;
    text-align: center;
    line-height: 14rem;
}
.a{
    text-decoration: none;
}
</style>
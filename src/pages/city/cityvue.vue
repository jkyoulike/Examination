<template>
<div>
<div class="q1">
    <img src="@/assets/img/h4.png" alt="">
    <span>Vue.js简介</span>
</div>
<h2>什么是Vue.js?</h2>
<ul>
    <li><p>Vue.js是一套构建用户界面的渐进式框架。</p></li>
    <li><p>Vue 采用自底向上增量开发的设计。</p></li>
    <li><p>Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件</p></li>
    <li><p>学习Vue.js之我们前需要掌握熟练HTML,CSS,Javascript作为储备。</p></li>
    <li><p>Vue.js是三大前端框架之一。</p></li>
</ul>

<router-link to="/" class="a"> 
<div class="btn">返回</div>
</router-link> 
</div>
</template>

<script>
export default {
  name: 'Cityvue',
}
</script>

<style scoped>
.q1{
    height: 4rem;
    line-height: 4rem;
}
.q1 img{
    height: 100%;
    float: left;
}
span{
    line-height: 4rem;
    font-size: 2.5rem;
    color:rgba(64,64,64);
    opacity: 0.8;
}
li{
    line-height: 1.2rem;
}
p{
    font-size: 0.8rem;
}
.btn{
    width: 100%;
    height: 2.8rem;
    background: #cccccc;
    margin-top: 35%;
    font-size: 1.8rem;
    text-align: center;
    line-height: 2.8rem;
    color: rgba(31,168,171)
}
.a{
    text-decoration: none;
}
</style>
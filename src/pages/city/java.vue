<template>
<div>
<div class="q1">
    <img src="@/assets/img/h3.png" alt="">
    <span>Javascript简介</span>
</div>
<h2>什么是Javascript?</h2>
<ul>
    <li><p>JavaScript 是一种轻量级的编程语言</p></li>
    <li><p>JavaScript 是可插入 HTML 页面的编程代码。</p></li>
    <li><p>JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行</p></li>
    <li><p>JavaScript 很容易学习</p></li>
    <li><p>JavaScript可以改变 HTML 内容</p></li>
    <li><p>JavaScript可以改变 HTML 图像</p></li>
    <li><p>JavaScript可以改变 HTML 样式</p></li>
</ul>

<router-link to="/" class="a"> 
<div class="btn">返回</div>
</router-link> 
</div>
</template>

<script>
export default {
  name: 'Java',
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
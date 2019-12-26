<template>
<div>
<div class="q1">
    <img src="@/assets/img/h2.png" alt="">
    <span>CSS3简介</span>
</div>
<h2>什么是 CSS?</h2>
<ul>
    <li><p>CSS 指层叠样式表 (Cascading Style Sheets)</p></li>
    <li><p>样式定义如何显示 HTML 元素</p></li>
    <li><p>样式通常存储在样式表中</p></li>
    <li><p>把样式添加到 HTML中，是为了解决内容与表现分离的问题</p></li>
    <li><p>外部样式表可以极大提高工作效率</p></li>
    <li><p>外部样式表通常存储在 CSS 文件中</p></li>
    <li><p>多个样式定义可层叠为一个</p></li>
</ul>

<router-link to="/" class="a"> 
<div class="btn">返回</div>
</router-link> 
</div>
</template>

<script>
export default {
  name: 'City',
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
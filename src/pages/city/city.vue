<template>
<div>
<div class="q1">
    <img src="@/assets/img/h1.png" alt="">
    <span>HMTL简介</span>
</div>
<h2>什么是HTML?</h2>
<ul>
    <li><p>HTML 是用来描述网页的一种语言。</p></li>
    <li><p>HTML 不是一种编程语言，而是一种标记语言</p></li>
    <li><p>标记语言是一套标记标签 (markup tag)</p></li>
    <li><p>HTML 使用标记标签来描述网页</p></li>
    <li><p>HTML 文档包含了HTML 标签及文本内容</p></li>
    <li><p>HTML文档也叫做 web 页面</p></li>
    <li><p>HTML 标签是由尖括号包围的关键词，比如 < html ></p></li>
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
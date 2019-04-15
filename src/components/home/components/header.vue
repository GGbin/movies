<template>
    <div class="header">
        <div class="sousuo">
            <div class="sousuo_left">
                <i class="iconfont">&#xe61e;</i>北京
            </div>
            <div class="sousuo_right">
                <i class="iconfont">&#xe621;</i>
                <input type="text" placeholder="搜索电影、明星或影院"/>
            </div>
        </div> 
        <div class="swiper-container fa-banner">
            <div class="swiper-wrapper so-banner">
                <div class="swiper-slide"><img src="../../../../static/image/01.png"/></div>
                <div class="swiper-slide"><img src="../../../../static/image/02.png"/></div>
                <div class="swiper-slide"><img src="../../../../static/image/04.jpg"/></div>
                <div class="swiper-slide"><img src="../../../../static/image/05.png"/></div>
                <div class="swiper-slide"><img src="../../../../static/image/06.png"/></div>
            </div>
        </div> 
    </div>   
</template>
<script>
import Swiper from "swiper"
export default {
    mounted(){
       var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            loop:true
        })
    }
}
</script>
<style scoped>
.header{width: 100%;height: auto}
.sousuo{width: 100%;height: .8rem}
.sousuo .sousuo_left{width: 25%;height: .8rem;float: left;text-align: center;line-height: .8rem;font-size: .32rem    }
.sousuo .sousuo_left i{font-size: .4rem;}
.sousuo .sousuo_right{width: 75%;height: .8rem;;float: right;text-align: center;line-height: .8rem;position: relative;;}
.sousuo .sousuo_right i{display:block;text-align:center;line-height:.5rem;font-size:.38rem;width: .5rem;height: .5rem;background: #ccc;font-size:.32rem;position: absolute;left: 0;top: .15rem}
.sousuo .sousuo_right input{width: 4.5rem;height: .5rem;border: none;position: absolute;left: .5rem;top: .15rem;background:#ccc;}
.fa-banner{width: 100%;height:4rem;}
.so-banner{width: 100rem;height: 4rem;}
.so-banner div{float: left;}
.so-banner div img{width: 7.5rem;height: 4rem}
/* .fenye{position: absolute;left: 10rem;bottom: .5rem;} */
</style>

<template>
    <div class="footerFa">
        <ul class="footer">
            <li v-for="(item,index) in list" :key="index">
                <router-link :to="{name:item.name}">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.title}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {icon:"&#xe6af;",title:"电影",name:"home"},
                {icon:"&#xe61d;",title:"影院",name:"list"},
                {icon:"&#xe604;",title:"优惠",name:"sell"},
                {icon:"&#xe619;",title:"我的",name:"my"}
            ]
        }
    }
}
</script>
<style>
.footerFa{width: 100%;height: 1rem;position: fixed;left: 0;bottom: 0;background: #fff}
.footer{width: 100%;height: 1rem;display: flex;justify-content: space-around;}
.footer li{width: 100%;height: 1rem;text-align: center;font-size:.28rem}
.footer li a{color: black}
.footer li a i{display: block;font-size: .36rem;margin-top: .2rem;}
</style>

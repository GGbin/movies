<template>
    <div>
        <Header-com/>
        <div class="onshow">
            <div :class="flag?'active':''" @click="handleChange"><span>正在上映</span></div>
            <div :class="flag?'':'active'" @click="handleChange"><span>即将上映</span></div>
        </div>
        <Now-com v-show="flag"/>
        <Future-com v-show="!flag"/>
    </div>
</template>
<script>
import Header from "./components/header.vue"
import Now from "./components/now.vue"
import Future from "./components/future.vue"
export default {
    components:{
        "Header-com":Header,
        "Now-com":Now,
        "Future-com":Future
    },
    data(){
        return{
            flag:true
        }
    },
    methods:{
        handleChange(){
            this.flag = !this.flag
        }
    }
}
</script>
<style>
.onshow{width: 100%;height: .8rem;display: flex;justify-content: space-around;border-bottom: 1px solid #eeeeee}
.onshow div{width: 100%;height: .8rem;text-align: center;line-height: .8rem;font-size: .3rem;}
.onshow div span{padding-bottom: .2rem;}
.active span{color: orangered;border-bottom: 1px solid orangered}
</style>

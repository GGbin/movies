<template> 
    <div class="movie-fa">
       <ul class="movie-list">
           <li class="movie-item">
               <img src="../../../../static/image/01.png">
               <div class="list-center">
                   <p>波希米亚狂想曲</p>
                   <p>观众评分<span>8.6</span></p>
                   <p>主演：<span></span></p>
                   <p>英国 美国&nbsp;|&nbsp;<span>135分钟</span></p>
               </div>
               <div class="list-right">购票</div>
           </li>
       </ul>
    </div>
</template>
<script>
 import Vuex from "vuex";
import axios from "axios";
export default {
    data(){
        return{
            array:[]
        }
    },
    created(){
        this.handleGetData()
    },
    computed:{
        // ...Vuex.mapState({
        //     array:state=>state.home.list
        // }) 
    },
    methods:{
    //    ...Vuex.mapActions({
    //        handleGetData:"home/handleGetdata"
    //    })
        handleGetData(){
            axios({
                method:"get",
                url:"/api/ajax/moreComingList?token=&movieIds=1167831%2C1206415%2C1216383%2C581264%2C1206605%2C507792%2C1230119%2C1207260%2C248906%2C1238775"
            }).then((res)=>{
                console.log(res)
            })
        }
    }
}
</script>
<style>
.movie-fa{width: 100%;margin-top: .05rem}
.movie-list{width: 100%;}
.movie-item{width: 100%;height: 2.5rem;padding: .2rem .2rem;border-bottom: 1px solid #eee}
.movie-item img{width: 1.3rem;height: 1.8rem;display: inline-block;float: left;}
.list-center{float: left;margin-left: .3rem;}
.list-center p:nth-child(1){width: 3rem;height: .3rem;font-size: .32rem;line-height: .3rem;margin-top: .1rem}
.list-center p:nth-child(2){width: 3rem;height: .3rem;font-size: .26rem;line-height: .3rem;margin-top: .1rem;color: rgba(38, 44, 44, 0.746)}
.list-center p:nth-child(3){width: 3rem;height: .3rem;font-size: .26rem;line-height: .3rem;margin-top: .1rem;color: rgba(38, 44, 44, 0.746)}
.list-center p:nth-child(4){width: 3rem;height: .3rem;font-size: .26rem;line-height: .3rem;margin-top: .1rem;color: rgba(38, 44, 44, 0.746)}
.list-right{width: 1rem;height: .5rem;border: 1px solid red;margin-top: .5rem;margin-right:.5rem;float: right;line-height: .5rem;text-align: center;color: red}
</style>

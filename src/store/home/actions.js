import axios from "axios";
export default{
    handleGetdata({commit}){
        axios({
            method:"get",
            url:"/api/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5449165"
        }).then((res)=>{
            console.log(res)
            commit("getData",res.data)
        })

    }
}
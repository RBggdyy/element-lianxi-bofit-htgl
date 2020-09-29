<template>
<div class="box">
     <div class="menu" >
         <!-- <router-link :to="v.path" v-for="(v,i) in route" :key="i" @click.native="funxuanze(v.id)"  > -->
         <!-- <img :src="  v.imgsrccur " alt="" v-if="id == v.id">
         <img :src="  v.imgsrc " alt="" v-else>
         <span>{{v.txt}}</span> -->
         <!-- </router-link> -->
     </div>
     <!-- <div class="cont"> -->
         <!-- <router-view></router-view> -->
     <!-- </div> -->
        <!-- <FooterBar :keyid="1"></FooterBar> -->
    </div>
</template>
<script>

// import FooterBar from "../components/footerBar";
export default {
    components:{
        // FooterBar 
    },
     mounted(){
       this.funxuanze();
     },
     data(){
        return{
            route:[
                {id:0,path:'/fangkong/dengguang',txt:"灯光","imgsrc":"../../static/img/icon/dengguangone.png","imgsrccur":"../../static/img/icon/dengguangtwo.png"},
                {id:1,path:'/fangkong/tv',txt:"电视","imgsrc":"../../static/img/icon/tvone.png","imgsrccur":"../../static/img/icon/tvtwo.png"},
                {id:2,path:'/fangkong/kongtiao',txt:"空调","imgsrc":"../../static/img/icon/kongtiaoone.png","imgsrccur":"../../static/img/icon/kongtiaotwo.png"},
                {id:3,path:'/fangkong/chuanglian',txt:"窗帘","imgsrc":"../../static/img/icon/dengguangone.png","imgsrccur":"../../static/img/icon/dengguangtwo.png"},
            ],
            id:0,
        }
    },
    methods:{
       funxuanze(id){
        //    this.id = id;
        //    console.log(this.id)
       }
    },

}
</script>

<style scoped>
.box{
     overflow: hidden;
}
.menu{
display: flex;
justify-content: space-around;
width: 3.33rem;
margin: 0 auto;
margin-top: .35rem;
}
.menu>a{
    width: .73rem;
    height: .73rem;
    /* background-image: url('../../static/img/Banner/weixuanzhong.png'); */
    background-size: .73rem .73rem;
    font-size: .13rem;
    color:rgb(51,51,51);
    text-align: center;
}
.menu>a>img{
 width: .28rem;
 height: .28rem;
 margin-top: .08rem;
}
.menu>a>span{
 display: block;
}
.menu>.router-link-active{
    color: white;
    /* background-image: url('../../static/img/Banner/xuanzhong.png'); */
}
</style>


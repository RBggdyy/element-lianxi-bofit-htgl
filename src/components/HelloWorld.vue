<template>
  <div class="home-container">
      <el-container >
          <el-aside :width="isCollapse ? '80px':'200px'" v-model="isCollapse" >
              <el-menu
                :default-active="this.$route.path"
                router
                background-color="#001529"
                text-color="#fff"
                active-text-color="#ffd04b"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :collapse="isCollapse"
               >
                <img
                :style="{'height': '60px', 'width': '150px', 'margin': '20px 13px',}"
                name="logo"
                :src="imgUrl"/>
                <div class="logo-mask"></div>
                <template v-for="data in menuDataSources">
                    <el-menu-item v-if="!data.children" :key="data.id" :index="data.path">
                      <!-- @click="menuClick(data)" 方法2-->
                      <i :class="data.icon"></i>
                      <span slot="title">{{data.name}}</span>
                    </el-menu-item>
                      <!-- 一级菜单 -->
                      <el-submenu  v-else :key="data.id" :index="data.path">
                          <template slot="title">
                            <i :class="data.icon"></i>
                            <span>{{data.name}}</span>
                          </template>
                          <!-- 二级菜单 -->
                          <el-menu-item  v-for="item in data.children" :key="item.id" :index="item.path" >
                             <!-- @click="menuClick(item)"方法2 -->
                            <i :class="item.icon"></i>
                            <span>{{item.name}}</span>
                          </el-menu-item>
                      </el-submenu>
                </template>
              </el-menu>
          </el-aside>
          <el-container>
              <el-header class="header">
                    <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="toggleCollapsed" style="font-size:25px;color:black" />
                    <div class="header">
                        <el-avatar style="margin-right:20px" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                        <el-dropdown >
                          <span class="el-dropdown-link">
                            {{userName}}
                            <i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                          <el-dropdown-menu slot="dropdown" @click.native="layout">
                              <el-dropdown-item >
                                <i class="el-icon-switch-button"/>退出
                              </el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                    </div>
              </el-header>
              <el-main>
                <router-view></router-view>
              </el-main>
              <el-footer>Footer</el-footer>
          </el-container>
      </el-container>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      isCollapse: false,
      imgUrl: require("@/assets/siderlogo2.png"),
      userName:sessionStorage.getItem("userName"),
      menuDataSources:[
          {    id:1,
              path:"/HelloWorld/work",
              name:"导航一",
              icon:'el-icon-location'
          },
          {
              id:2,
              path:"",
              name:"导航二",
              icon:'el-icon-menu',
              children:[
                  {
                    id:3,
                    path:"/HelloWorld/run",
                    name:"选项1",
                    icon:'el-icon-location'
                  },
              ]
          },
          {
              id:4,
              path:"/HelloWorld/authority",
              name:"导航三",
              icon:'el-icon-document'
          },
          {
              id:5,
              path:"/HelloWorld/organization",
              name:"导航四",
              icon:'el-icon-setting'
          },
        ]
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      toggleCollapsed() {
        this.isCollapse = !this.isCollapse;
      },
      // menuClick:function(e) {
      //   this.$router.push(e.path)
      // },
      layout: function(){
        let _this=this;
          this.$confirm('确定要退出吗', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '退出成功!'
            });
            sessionStorage.clear();
            _this.$router.push("/")
          }).catch(() => {});
      },
  },
}
</script>
<style scoped>
.home-container{
  height:100vh;
  width: 100%;
}
.el-header, .el-footer {
    background-color: #ffffff;
    color: #333;
    /* text-align: center; */
    /* line-height: 60px; */
  }
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    /* text-align: center; */
    /* line-height: 200px; */
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center; */
    /* line-height: 160px; */
  }

  /* body > .el-container {
    margin-bottom: 40px;
  } */

/* =============== */
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 199px;
    min-height: 969px;
  }
  .el-menu-vertical-demo{
    width: 80px;
    min-height: 969px;
  }
  .logo-mask{
    position: absolute;
    top:0;
    right:0px;
    width: 25px;
    height: 80px;
    background-color: rgb(0, 21, 41);
  }
  .el-dropdown-link{
    font-weight: 600;
  }
  .el-menu-item.is-active{
    background-color: #1890FF !important;
    color: #fff!important;
  }
</style>

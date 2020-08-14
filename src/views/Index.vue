<template>
  <div>
    <el-container>
      <el-header>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="推荐" name="/recommend"></el-tab-pane>
          <el-tab-pane label="歌单" name="/songlist"></el-tab-pane>
          <el-tab-pane label="歌手" name="/singer"></el-tab-pane>
          <el-tab-pane label="最新" name="/new"></el-tab-pane>
        </el-tabs>
      </el-header>
      <el-container >
        <el-aside width="200px">Aside</el-aside>
        <el-main > <router-view></router-view></el-main>
      </el-container>
    </el-container>
   
  </div>
</template>

<script>
export default {
  name: "Index",
   data() {
      return {
        activeName: '/recommend'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    watch: {
      activeName:{
        handler(newvalue){
          this.$router.push(newvalue)
        },
        immediate: false
      }
    },
};
</script>
<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
// /deep/ .el-tabs{
//  height: 500px
// } 

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
<template>
    <a-layout id="components-layout-demo-fixed-sider">
      <Sider/>
      <a-layout :style="{ marginLeft: &quot;220px&quot; }">
        <Header/>
        <Main/>
        <Footer/>
      </a-layout>
    </a-layout>
  </template>
  
  <script>
  import Sider from '@/layout/Sider.vue';
  import Main from '@/layout/Main';
  import Footer from '@/layout/Footer';
  import Header from '@/layout/Header';
  import {checkToken} from '@/api/admin'

  export default {
  
    components: {Sider, Main, Footer, Header},
  
    mounted() {
      checkToken().then(res => {
        console.log(res)
        if (res.code === 401) {
          return
        }
        this.$message.success(
          '欢迎管理员 ' + this.$store.state.user.details.email,
          6,
        );
      })

    }
  
  }
  </script>
  
  <style scoped>
  #components-layout-demo-fixed-sider .logo {
    padding: 10px 15px;
    height: 50px;
    font-size: 15px;
    margin: 16px;
    color: #ffffff;
    letter-spacing: 2px;
  }
  
  .logo img {
    width: 32px;
    height: 32px;
    margin-right: 5px;
  }
  
  .header {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
  
  </style>
  
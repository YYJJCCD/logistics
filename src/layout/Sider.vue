<template>
    <a-layout-sider id="sider" width="220">
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-sub-menu v-for="item in data" :key="item.title">
          <span slot="title">
            <a-icon :type="item.icon"/>
            <span>{{ item.title }}</span>
          </span>
          <a-menu-item v-for="child in item.children" :key="child.title">
            <router-link :to="child.path">
              {{ child.title }}
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
</template>
<script>
  export default {
    data() {
      return {
        data: [
          {
            title: "基础信息管理",
            icon: "home",
            children: [
              { title: "商品管理", path: "/commodity" },
              { title: "来往单位", path: "/company" },
              { title: "员工管理", path: "/employee" },
              { title: "仓库管理", path: "/warehouse" },
            ]
          },
          {
            title: "销售信息管理",
            icon: "pay-circle",
            children: [
              { title: "销售开票", path: "/sale/create" },
              { title: "销售记录", path: "/sale/record" },
            ]
          },
          {
            title: "配送信息管理",
            icon: "car",
            children: [
              { title: "申请配送", path: "/delivery/create" },
              { title: "配送列表", path: "/delivery/list" },
            ]
          },
          {
            title: "运输信息管理",
            icon: "rocket",
            children: [
              { title: "车辆资料", path: "/vehicle" },
              { title: "驾驶员资料", path: "/driver" },
            ]
          },
          {
            title: "系统决策管理",
            icon: "line-chart",
            children: [
              { title: "入库分析", path: "/analyze/in" },
              { title: "出库分析", path: "/analyze/out" },
            ]
          },
          {
            title: "系统信息管理",
            icon: "tool",
            children: [
              { title: "安全设置", path: "/security" },
              { title: "操作员管理", path: "/admin" },
              { title: "权限列表", path: "/role" },
            ]
          },
        ]
      }
    },

  }
</script>

<style scoped>
  #sider{
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
  }
  #sider .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
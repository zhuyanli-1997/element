<template>
  <div id="header">
    <van-card
      desc="蜂鸟专送/38分钟送达"
      title="粥品香坊(回龙观)"
      thumb="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg"
    />
    <van-notice-bar
      :scrollable="false"
      color=""
      background=""
      @click="show = true"
      text="在粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊。"
    />
    <van-overlay :show="show" @click="show = false" />
    <nav id="nav">
      <ul>
        <router-link tag="li" to="/goods">
          <p>商品</p>
        </router-link>
        <router-link tag="li" to="/ratings">
          <p>评论</p>
        </router-link>
        <router-link tag="li" to="/seller">
          <p>商家</p>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      show: false,
    };
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
#nav {
  width: 100%;
  height: 50px;
  background: white;
  border-top: 2px #ebe8e3 solid;
  // position: fixed;
  // left: 0;
  // bottom: 0;
}
#nav ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
#nav ul li {
  flex: 1;
  height: 40px;
}
#nav ul li .active {
  color: #f03d37;
}
#nav ul i {
  font-size: 20px;
}
#nav ul p {
  font-size: 12px;
  line-height: 18px;
}
</style>

<template>
  <div class="detail">
    <van-nav-bar left-arrow @click-left="onClickLeft" />
    <img
      src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
      alt=""
    />
    <div class="content">
      <p class="title">皮蛋瘦肉粥</p>
      <div class="dec">
        <span class="sell-count">月售229</span>
        <span class="rating">好评率100%</span>
      </div>
      <div class="price">
        <span class="now">￥10</span>
      </div>
      <div class="buy">加入购物车</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {};
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.push("/goods");
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
.content {
  position: relative;
  padding: 18px;
}
.content .dec {
  margin-bottom: 18px;
  line-height: 10px;
  height: 10px;
  font-size: 0;
}
.content .dec .sell-count {
  margin-right: 12px;
}
.content .dec .sell-count,
.content .dec .rating {
  font-size: 10px;
  color: #93999f;
}
.content .price {
  font-weight: 700;
  line-height: 24px;
  .now {
    margin-right: 8px;
    font-size: 14px;
    color: #f01414;
  }
}
.buy {
  position: absolute;
  right: 18px;
  bottom: 18px;
  z-index: 10;
  height: 24px;
  line-height: 24px;
  padding: 0 12px;
  box-sizing: border-box;
  border-radius: 12px;
  font-size: 10px;
  color: #fff;
  background: #00a0dc;
  opacity: 1;
}
</style>

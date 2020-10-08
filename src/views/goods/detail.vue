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
    <div class="split"></div>
    <div class="info">
      <h1 class="title">商品信息</h1>
      <p class="text">
        一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足
      </p>
    </div>
    <div class="split"></div>
    <div class="rating">
      <h1 class="title">商品评价</h1>
      <div class="ratingselect">
        <div class="rating-type border-1px">
          <span class="block positive active">
            全部
            <span class="count">3</span>
          </span>
          <span class="block positive active">
            推荐
            <span class="count">2</span>
          </span>
          <span class="block positive active">
            吐槽
            <span class="count">1</span>
          </span>
        </div>
        <!-- 开关 -->
        <div class="switch">
          <span class="icon-check-circle"></span>
          <span class="text">只看有评价的内容</span>
        </div>
      </div>
      <div class="rating-wrapper">
        <ul>
          <li>
            <div class="user">
              <span class="name">123456****</span>
              <!-- <img
                src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                alt=""
                height="12"
                class="avatar"
              /> -->
            </div>
            <div class="time">2020-10-08 10:30</div>
            <p class="text">
              <span></span>
              <span>很喜欢的粥</span>
            </p>
          </li>
          <li></li>
          <li></li>
        </ul>
        <div class="no-rating" style="display:none">暂无评价</div>
      </div>
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
.split {
  width: 100%;
  height: 16px;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  background: #f3f5f7;
}
.info {
  padding: 18px;
}
.info .title {
  line-height: 14px;
  margin-bottom: 6px;
  font-size: 14px;
  color: #07111b;
}
.info .text {
  line-height: 24px;
  padding: 0 8px;
  font-size: 12px;
  color: #4d555d;
}
.rating {
  padding-top: 18px;
}
.rating .title {
  line-height: 14px;
  margin-left: 18px;
  font-size: 14px;
  color: #07111b;
}
.ratingselect .rating-type {
  padding: 18px 0;
  margin: 0 18px;
  position: relative;
  font-size: 0;
}
.ratingselect .rating-type .block.positive.active {
  background: #00a0dc;
}
.ratingselect .rating-type .block.positive {
  background: rgba(0, 160, 220, 0.2);
}
.ratingselect .rating-type .block.active {
  color: #fff;
}
.ratingselect .rating-type .block {
  display: inline-block;
  padding: 8px 12px;
  margin-right: 8px;
  line-height: 16px;
  border-radius: 1px;
  font-size: 12px;
  color: #4d555d;
}
.ratingselect .rating-type .block .count {
  margin-left: 2px;
  font-size: 8px;
}
.ratingselect .rating-type .block.positive {
  background: rgba(0, 160, 220, 0.2);
}
.ratingselect .rating-type .block {
  display: inline-block;
  padding: 8px 12px;
  margin-right: 8px;
  line-height: 16px;
  border-radius: 1px;
  font-size: 12px;
  color: #4d555d;
}
.ratingselect .rating-type .block.negative {
  background: rgba(77, 85, 93, 0.2);
}
.ratingselect .rating-type .block {
  display: inline-block;
  padding: 8px 12px;
  margin-right: 8px;
  line-height: 16px;
  border-radius: 1px;
  font-size: 12px;
  color: #4d555d;
}
.ratingselect .switch {
  padding: 12px 18px;
  line-height: 24px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  color: #93999f;
  font-size: 0;
}
.ratingselect .switch.on .icon-check_circle {
  color: #00c850;
}
.ratingselect .switch .icon-check_circle {
  display: inline-block;
  margin-right: 4px;
  font-size: 24px;
}
.ratingselect .switch .text {
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
}
.rating .rating-wrapper {
  padding: 0 18px;
}
.rating .rating-wrapper .rating-item {
  position: relative;
  padding: 16px 0;
  position: relative;
}
</style>

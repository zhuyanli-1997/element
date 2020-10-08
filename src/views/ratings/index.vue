<template>
  <div class="rating">
    <Header></Header>
    <div class="ratings">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">4.2</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家69.2%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <div class="star">
              <van-rate
                v-model="value"
                :size="15"
                color="#ffd21e"
                void-icon="star"
                void-color="#eee"
              />
            </div>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <div class="star">
              <van-rate
                v-model="value"
                :size="15"
                color="#ffd21e"
                void-icon="star"
                void-color="#eee"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <div class="ratingselect">
        <div class="rating-type">
          <span class="block positive">
            全部
            <span class="count">24</span>
          </span>
          <span class="block positive">
            满意
            <span class="count">18</span>
          </span>
          <span class="block negative">
            不满意
            <span class="count">6</span>
          </span>
        </div>
        <div class="switch"></div>
      </div>
      <!-- <div class="ratingselect">
        <van-tabs v-model="active">
          <van-tab v-for="item in index" :key="item">
            <template #title>{{ item }} </template>
            内容 {{ item }}
          </van-tab>
        </van-tabs>
      </div> -->
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  name: "ratings",
  data() {
    return {
      value: 2.5,
      active: 0,
      index: ["全部", "满意", "不满意"],
    };
  },
  computed: {},
  components: {
    Header,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.ratings {
  position: absolute;
  top: 174px;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
}
.ratings .overview {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 18px 0;
}
.ratings .overview .overview-left {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 137px;
  flex: 0 0 137px;
  padding: 6px 0;
  width: 137px;
  border-right: 1px solid rgba(7, 17, 27, 0.1);
  text-align: center;
}
.ratings .overview .overview-left .score {
  margin-bottom: 6px;
  line-height: 28px;
  font-size: 24px;
  color: #f90;
}
.ratings .overview .overview-left .title {
  margin-bottom: 8px;
  line-height: 12px;
  font-size: 12px;
  color: #07111b;
}
.ratings .overview .overview-left .rank {
  line-height: 10px;
  font-size: 10px;
  color: #93999f;
}
.ratings .overview .overview-right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 6px 0 6px 24px;
}
.split {
  width: 100%;
  height: 16px;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  background: #f3f5f7;
}
.ratingselect .rating-type {
  padding: 18px 0;
  margin: 0 18px;
  position: relative;
  font-size: 0;
}
.block.positive {
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
.ratingselect .rating-type .block .count {
  margin-left: 2px;
  font-size: 8px;
}
.ratingselect .rating-type .block.positive.active {
  background: #00a0dc;
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
</style>

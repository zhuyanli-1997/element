<template>
  <div class="ratings">
    <Header></Header>
    <div class="overview">
      <div class="overview-left">
        <h1 class="overview">4.2</h1>
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
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  name: "ratings",
  data() {
    return {
      value: 2.5,
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
<style lang="scss" scoped></style>

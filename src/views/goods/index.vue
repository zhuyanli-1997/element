<template>
  <div class="goods">
    <Header></Header>
    <van-tree-select
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
      height="400px"
    >
      <template #content>
        <div v-if="activeIndex === 0">
          <van-card
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114"
            @click="detail"
          >
            <!-- <template #tags>
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </template> -->
            <template #footer>
              <van-button size="mini">-</van-button>
              <span>1</span>
              <van-button size="mini" @click="addBtn">+</van-button>
            </template>
          </van-card>
          <van-card
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114"
          >
            <template #footer>
              <van-button size="mini">-</van-button>
              <span>1</span>
              <van-button size="mini">+</van-button>
            </template>
          </van-card>
          <van-card
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114"
          >
            <template #footer>
              <van-button size="mini">-</van-button>
              <span>1</span>
              <van-button size="mini">+</van-button>
            </template>
          </van-card>
        </div>

        <div v-if="activeIndex === 1">
          <van-card
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114"
          >
            <template #footer>
              <van-button size="mini">-</van-button>
              <span>1</span>
              <van-button size="mini">+</van-button>
            </template>
          </van-card>
          <van-card
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          >
            <template #footer>
              <van-button size="mini">-</van-button>
              <span>1</span>
              <van-button size="mini">+</van-button>
            </template>
          </van-card>
        </div>
      </template>
    </van-tree-select>
    <!--  -->
    <van-submit-bar :price="3050" button-text="去结算" @submit="onSubmit" />
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  name: "goods",
  data() {
    return {
      active: 0,
      activeId: 1,
      activeIndex: 0,
      items: [
        { text: "热销榜" },
        { text: "单人精彩套餐" },
        { text: "冰爽饮品限时特惠" },
        { text: "精选热菜" },
        { text: "爽口凉菜" },
        { text: "精选套餐" },
        { text: "果拼果汁" },
        { text: "小吃主食" },
        { text: "特色粥品" },
      ],
    };
  },
  computed: {},
  components: {
    Header,
  },
  created() {},
  mounted() {},
  methods: {
    addBtn() {},
    onSubmit() {
      alert("支付");
    },
    detail() {
      this.$router.push("/detail");
    },
  },
};
</script>
<style lang="scss" scoped></style>

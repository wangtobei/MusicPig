<template>
  <div class="block">
    <el-carousel height="133px">
      <el-carousel-item v-for="item in banner.slice(1,5)">
        <el-image :src="item.imageUrl" :fit="fit"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { carousel } from "@/axios/carousel.js";
export default {
  data() {
    return {
      banner: new Array(),
      fit: "fill",
    };
  },
  methods: {},
  created() {
    let baseURL = this.$store.state.baseapi;
    carousel(baseURL).then((res) => (this.banner = res.data.banners));
  },
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.block {
  margin-top: 3.8em;
}
</style>
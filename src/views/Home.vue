<template>
  <div class="home">
    <carousel></carousel>
    <newsong></newsong>
    <recommend></recommend>
    <mvlist></mvlist>
    <el-image
      style="width: 100px; height: 120px"
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599659507504&di=fccb0d5fb3d615fcc672361db1369004&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F63%2F96%2F41%2F591c332f83d43.png%2521%2Ffwfh%2F804x950%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
      ></el-image>
      <br><br><br><br><br>
  </div>
</template>

<script>
// @ is an alias to /src

import carousel from "@/components/carousel/carousel";
import newsong from "@/components/newsong/newsong";
import recommend from "@/components/playlist/recommend";
import mvlist from "@/components/mv/mvlist";
export default {
  name: "Home",
  components: {
    carousel,
    newsong,
    recommend,
    mvlist,
  },
};
</script>

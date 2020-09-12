<template>
  <div class="about">
    <div class="head">
      <el-avatar src="http://q1.qlogo.cn/g?b=qq&nk=1498580056&s=5" :size="100"></el-avatar>
    </div>
    <!-- <h3 style="color:rgb(245, 108, 108)">小猪音乐</h3> -->
   <div class="block timeline">
  <el-timeline :reverse="reverse">
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp">
      {{activity.content}}
    </el-timeline-item>
  </el-timeline>
</div>
    
  </div>
</template>
<script>
  export default {
    data() {
      return {
        reverse: true,
        activities: [
        //   {
        //   content: '小猪音乐可以添加列表了',
        //   timestamp: '又是一天晚上'
        // },
        {
          content: '又加了点功能',
          timestamp: '八北'
        }, {
          content: '加了点功能',
          timestamp: '某一个夜黑风高的清晨......'
        }, {
          content: '做个小项目练练手',
          timestamp: '某一个风和日丽的晚上......'
        }]
      };
    }
  };
</script>
<style scoped>
.about {
  margin-top: 6em;
}
.head {
  width: 100px;
  margin: auto;
}
.info{
  width: 300px;
  margin-top: 1em;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.5em;
  font-weight: 600;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  color:darkmagenta
}
.timeline{
  width: 80%;
  margin: auto;
  margin-top: 20px;
}
</style>
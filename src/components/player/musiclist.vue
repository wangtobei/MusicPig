<template>
  <div>
    <el-drawer
      :visible.sync="drawer"
      :with-header="true"
      direction="btt"
      @open="getlists"
      size="350px"
    >
      <div class="listdiv">
        <span v-for="tag in tags" :key="tag.id">
          <el-alert
            type="success"
            :title="tag.name"
            class="list"
            @close="deleteitem(tag.id)"
          ></el-alert>
        </span>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import { musicDetail } from "@/axios/getMusicDetailById";
export default {
  data() {
    return {
      currid: this.$store.state.musicdetail.songs[0].id,
      tags: [],
      ids: [],
    };
  },
  computed: {
    drawer: {
      get: function () {
        return this.$store.state.showlist;
      },
      set: function () {
        this.$store.commit("changeshowlist");
      },
    },
  },
  methods: {
    getlists() {
      this.ids = this.$store.state.musiclist;
      const baseURL = this.$store.state.baseapi;
      musicDetail(baseURL, this.ids).then(
        (res) => (this.tags = res.data.songs)
      );
    },
    deleteitem(id) {
      this.$store.commit("deleteitem", id);
    },
  },
};
</script>
<style scoped>
.list {
  margin-bottom: 0.5em;
}
.listdiv {
  overflow: scroll;
  width: 90%;
  height: 250px;
  margin: auto;
  margin-bottom: 20px;
}
</style>
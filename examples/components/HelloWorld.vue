<template>
    <div>
       <button @mouseover="hintToolTip">toolTip</button>
       <button @click="hintMessge">提示</button>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data () {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    hintToolTip ($event) {
      this.$toolTip($event, {
          content: "这是一个toolTip1",
          direction: "top"
      });
    },
    hintMessge ($event) {
      this.$message({
          message: '这是一个message',
          time: 3000
        })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

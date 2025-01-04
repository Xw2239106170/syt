<template>
  <div class="block text-center">
    <el-carousel height="400px">
      <el-carousel-item v-for="(item, index) in bannerList" :key="index">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  bannerList: {
    type: Array as () => string[],
    required: true,
    default: () => []
  }
})
</script>
<style scoped lang="scss">
@use './index.scss';
</style>

<template>
  <div class="card-container center">
    <div class="card-left">
      <div class="left-top">
        <span>航天中心医院</span>
      </div>
      <div class="left-bottom">
        <div class="bottom-tag">
          <el-icon class="tag-icon"><Star /></el-icon>
          <span>三级乙等</span>
        </div>
        <div class="bottom-tag">
          <el-icon class="tag-icon"><Clock /></el-icon>
          <span>每天八点放号</span>
        </div>
      </div>
    </div>
    <div class="card-right center">
      <div class="right-img">
        <img src="../../assets/images/logo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Star, Clock } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
@use './index.scss';
</style>

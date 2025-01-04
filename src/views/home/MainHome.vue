<template>
  <div class="home-container">
    <div class="header-banner">
      <banner-img :bannerList="bannerList"></banner-img>
      <div class="header-input center">
        <el-autocomplete
          class="el-autocomplete"
          v-model="bannerInput"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入医院名称"
          @select="handleSelect"
          style="width: 600px;"
        />
        <button class="input-btn">搜索</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'

// 头部banner
const bannerInput = ref<string>('')
const bannerList = ref<string[]>([
  'https://aiwebstudy.oss-cn-beijing.aliyuncs.com/83b612bf-8a74-40c9-8d16-ba566d3ce13f.png',
  'https://aiwebstudy.oss-cn-beijing.aliyuncs.com/83b612bf-8a74-40c9-8d16-ba566d3ce13f.png',
  'https://aiwebstudy.oss-cn-beijing.aliyuncs.com/83b612bf-8a74-40c9-8d16-ba566d3ce13f.png',
  'https://aiwebstudy.oss-cn-beijing.aliyuncs.com/83b612bf-8a74-40c9-8d16-ba566d3ce13f.png'
])

// 自动补全
interface LinkItem {
  label: string
  value: string
}
const links = ref<LinkItem[]>([])
// 查询符合条件数据
let timeout: ReturnType<typeof setTimeout>
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString ? links.value.filter(createFilter(queryString)) : links.value

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 3000 * Math.random())
}

// 筛选函数
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
  }
}

// 模拟数据
const loadAll = () => {
  return [
    { value: 'vue', label: 'https://github.com/vuejs/vue' },
    { value: 'element', label: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', label: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', label: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', label: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', label: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', label: 'https://github.com/babel/babel' }
  ]
}

const handleSelect = (item: Record<string, any>) => {
  console.log(item)
}

onMounted(() => {
  links.value = loadAll()
})
</script>

<style lang="scss" scoped>
@use './index.scss';
</style>

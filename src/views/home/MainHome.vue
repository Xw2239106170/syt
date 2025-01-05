<template>
  <div class="home-container">
    <div class="header-banner">
      <banner-img :bannerList="bannerList"></banner-img>
      <div class="header-input center">
        <el-autocomplete
          v-model="bannerInput"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入医院名称"
          @select="handleSelect"
          style="width: 800px"
        />
        <el-button type="primary" :icon="Search" class="input-btn"></el-button>
      </div>
    </div>
    <div class="home-main">
      <el-row :gutter="20">
        <el-col :span="20">
          <div class="main-top">
            <h3>医院</h3>
            <div class="top-level">
              <h4>等级:</h4>
              <div class="level-tag"><tag-check :tags="tags"></tag-check></div>
            </div>
            <div class="top-level">
              <h4>地区:</h4>
              <div class="level-tag"><tag-check :tags="tagsArea"></tag-check></div>
            </div>
          </div>
          <div class="main-bottom">
              <HospitalCard></HospitalCard>
          </div>
        </el-col>
        <el-col :span="4">这是客体</el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Postcard, Search } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'

// 头部banner
const bannerInput = ref<string>('')
const bannerList = ref<string[]>([
  'https://aiwebstudy.oss-cn-beijing.aliyuncs.com/83b612bf-8a74-40c9-8d16-ba566d3ce13f.png',
  'https://aiwebstudy.oss-cn-beijing.aliyuncs.com/83b612bf-8a74-40c9-8d16-ba566d3ce13f.png',
  'https://aiwebstudy.oss-cn-beijing.aliyuncs.com/83b612bf-8a74-40c9-8d16-ba566d3ce13f.png',
  'https://aiwebstudy.oss-cn-beijing.aliyuncs.com/83b612bf-8a74-40c9-8d16-ba566d3ce13f.png'
])

// 自动补全输入框
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

// 标签定义
interface tagList {
  checked: boolean
  label: string
}

const tags = ref<tagList[]>([
  { checked: true, label: '全部' },
  { checked: false, label: '三级甲等' },
  { checked: false, label: '二级甲等' },
  { checked: false, label: '二级乙等' }
])
const tagsArea = ref<tagList[]>([
  { checked: true, label: '北极' },
  { checked: false, label: '南极' },
  { checked: false, label: '湖南' },
  { checked: false, label: '湖北' },
  { checked: false, label: '河北' },
  { checked: false, label: '河南' },
  { checked: false, label: '东北' },
  { checked: false, label: '吉林' },
  { checked: false, label: '吉林' },
  { checked: false, label: '辽林' },
  { checked: false, label: '海南' }
])
</script>

<style lang="scss" scoped>
@use './index.scss';
</style>

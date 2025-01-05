<template>
  <div>
    <el-check-tag
      class="tag"
      v-for="item in tags"
      :key="item"
      :checked="item.checked"
      @change="onChange(item)"
      >{{ item.label }}</el-check-tag
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { PropType } from 'vue'

const onChange = (obj: tagList) => {
  obj.checked = !obj.checked
}

defineProps({
  tags: {
    type: Array as PropType<tagList[]>,
    required: true,
    default: () => []
  }
})

interface tagList {
  checked: boolean
  label: string
}
</script>

<style scoped lang="scss">
.tag {
  margin-right: 10px;
  font-size: 12px;
}
</style>

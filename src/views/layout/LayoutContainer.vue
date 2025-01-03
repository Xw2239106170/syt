<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

// 顶部banner
const hospitalSearch = ref<String>()
const searchHospital = (name: string) => {
  // 搜索核心
  console.log('你搜索的是' + hospitalSearch.value)
}

// 弹出层
interface qrCode{
  img: string,
  word:string
}

const qrCodeInfo = ref<qrCode[]>(
  [{img:'https://aiwebstudy.oss-cn-beijing.aliyuncs.com/ff9b6ea2-215a-47b7-8289-72d507bc57fc.png', word:'扫码关注，快速预约挂号'},{img:'https://aiwebstudy.oss-cn-beijing.aliyuncs.com/ff9b6ea2-215a-47b7-8289-72d507bc57fc.png', word:'扫码下载APP'}]
)
const footer = ref<string[]>(['帮助中心','合作伙伴','用户协议','隐私协议'])
const dialogVisible = ref<boolean>()
const phoneNumber = ref<string>()
const handleClose = () => {
  console.log('关闭')
  dialogVisible.value = false
}
// 发送验证码
const sendCode = () => {
    console.log("你输入的电话号码是" + phoneNumber.value)
}
</script>
<template>
  <div class="common-layout">
    <el-container class="layout-container center">
      <el-header class="layout-header">
        <div class="header-left">
          <div class="left-img">
            <img src="../../assets/images/logo.png" alt="" />
          </div>
          <div class="left-logo">
            <span>尚医通 统一挂号平台</span>
          </div>
        </div>
        <div class="header-search center">
          <div class="mt-4">
            <input class="search-input" type="text" placeholder="点击输入医院的名称" />
          </div>
          <el-button :icon="Search" circle size="large" />
        </div>
        <div class="header-right">
          <el-link target="_blank" class="right-helper" :underline="false">帮助中心</el-link>
          <el-link target="_blank" :underline="false" @click="dialogVisible = true"
            >登录/注册</el-link
          >
        </div>
      </el-header>
      <el-main class="layout-main">
        <RouterView></RouterView>
      </el-main>
      <el-footer class="layout-footer">
        <div class="footer-left center">
          <span>京ICP备13018369号</span>
          <span>电话挂号010-56253825</span>
        </div>
        <div class="footer-right center">
          <el-link target="_blank" class="right-helper" :underline="false" v-for="(item, index) in footer" :key="index">{{ item }}</el-link>
        </div>
      </el-footer>
    </el-container>
  </div>

  <el-dialog v-model="dialogVisible" width="850" :before-close="handleClose">
    <div class="login-drawer">
      <div class="drawer-left center">
        <div class="left-title"><span>电话号码</span></div>
        <div class="left-input">
          <input type="text" v-model="phoneNumber" placeholder="请输入您的手机号码" />
        </div>
        <div class="left-btn">
          <button @click="sendCode">发送验证码</button>
        </div>
        <div class="left-switch">
          <div class="switch-icon">
            <svg
              t="1735902705513"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4355"
              width="50"
              height="50"
            >
              <path
                d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z"
                fill="#28C445"
                p-id="4356"
              ></path>
              <path
                d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z"
                fill="#28C445"
                p-id="4357"
              ></path>
            </svg>
          </div>
          <span>第三方验证登录</span>
        </div>
      </div>
      <div class="drawer-right">
          <div class="right-top center" v-for="(item, index) in qrCodeInfo" :key="index">
            <div class="qr-code">
              <img :src="item.img" alt="">
              <span>{{ item.word }}</span>
            </div>

          </div>
          <div class="right-bottom center">
            <span> xxxxxx官方指定平台</span>
            <span>快速挂号 安全放心</span>
          </div>
      </div>
    </div>
  </el-dialog>
</template>

<style scoped lang="scss">
@use './index.scss';


</style>

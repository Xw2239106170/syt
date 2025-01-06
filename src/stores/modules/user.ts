import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('User', () => {
  // 设置user的Token
  const token = ref<string>('')
  const SetUserToken = (value:string) => {
      token.value = value
  }
  const getUserToken = ():string => {
      return token.value
  }

  return {
    token,
    SetUserToken,
    getUserToken
   }
})

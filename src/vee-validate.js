import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN', {
  // 中文的提示信息
  messages: zh_CN.messages,
  // 属性的提示
  attributes: {
    code:'密码',
    account: '用户名',
  }
});

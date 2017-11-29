(function (window) {
  // 插件对象
  const MyPlugin = {}
  // 必须给对象添加install方法
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue函数对象的myGlobalMethod()')
    }
    // 2. 添加全局资源
    Vue.directive('my-directive', function (el, binding) {
      el.textContent = binding.value.toUpperCase()
    })
    // 4. 添加实例方法
    Vue.prototype.$myMethod = function () {
      console.log('vm的$myMethod()')
    }
  }
  
  window.MyPlugin = MyPlugin
})(window)
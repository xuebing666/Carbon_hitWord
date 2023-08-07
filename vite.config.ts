//vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
   
  server: {
    host: "0.0.0.0", //打开显示本地地址
    open: true,// 是否自动启动浏览器
    port: 3000,//端口号
     //代理解决跨域
    proxy: { // 本地开发环境通过代理实现跨域
      // 正则表达式写法
      // https://m.kuaikanmanhua.com/search/mini/hot_word?&page=1&size=5
      '/api': {
        target: 'https://m.kuaikanmanhua.com', // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
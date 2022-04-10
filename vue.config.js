module.exports = {
    devServer: {
      proxy: {
          '/api': {
              target: 'http://192.168.3.83:8080',    // api接口基础路径
              changeOrigin: true,                 // 是否支持跨域
              ws: true/*,
              pathRewrite: {
                '^/api': '/api/v1'                       // 重写路径：去掉路径中开头的 '/api'
              }*/
          }
      }
    }
}
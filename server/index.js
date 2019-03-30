require('@babel/register')({
  presets: ['@babel/preset-react', '@babel/preset-env'],
  plugins: [
    // class 中箭头函数的写法
    ['@babel/plugin-proposal-class-properties', { loose: false }]
  ]
})
require('@babel/polyfill')

// 处理 Node  import less 文件
require('css-modules-require-hook')({
  extensions: ['.css', '.less'],
  generateScopedName: '[name]__[local]-[hash:base64:8]'
})
// 处理 Node import 静态资源文件
require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif', 'jpeg', 'webp'],
  limit: 10000
})

require('./app.js')

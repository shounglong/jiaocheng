module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      //设置Element-ui按需导入
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    //路由懒加载插件
    '@babel/plugin-syntax-dynamic-import'
  ]
}

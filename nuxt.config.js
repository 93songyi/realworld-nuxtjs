// Nuxt.JS的配置文件

// 自定义配置对应路由
module.exports = {
  router: {
    // extendRoutes ：扩展创建的路由
    // routes 路由配置表
    // resolve 解析路由模板
    // linkActiveClass: 'active',
    extendRoutes(routes, resolve) {
      // 清除自动生成的路由配置
      routes.splice(0)

      routes.push(
        ...[
          // 默认加载layout组件
          {
            path: '/',
            component: resolve(__dirname, 'pages/layout/'), // resolve两个参数 第一个是绝对路径 后面是组件路径
            children: [
              {
                path: '',
                name: 'home',
                component: resolve(__dirname, 'pages/home/'),
              },
              // 登录
              {
                path: '/login',
                name: 'login',
                component: resolve(__dirname, 'pages/login/'),
              },
              // 注册
              {
                path: '/register',
                name: 'register',
                component: resolve(__dirname, 'pages/login/'),
              },
              {
                path: '/settings',
                name: 'settings',
                component: resolve(__dirname, 'pages/settings/'),
              },
              {
                path: '/article/:slug',
                name: 'article',
                component: resolve(__dirname, 'pages/article/'),
              },
              {
                path: '/edit',
                name: 'edit',
                component: resolve(__dirname, 'pages/edit/'),
              },
              {
                path: '/profile',
                name: 'profile',
                component: resolve(__dirname, 'pages/profile/'),
              },
            ],
          },
        ]
      )
    },
  },

  server: {
    host: '0.0.0.0',
    port: 80,
  },

  // 注册插件
  plugins: ['~/plugins/request.js', '~/plugins/dayjs.js'],
}

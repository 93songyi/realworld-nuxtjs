<template>
  <div class="container">
    <!-- 顶部栏 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <nuxt-link class="nav-link active" to="/">Home</nuxt-link>
          </li>
          <!-- 根据当前登录情况判断是否展示创建账号和登录 -->
          <template v-if="user">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/edit">
                <i class="ion-compose"></i>&nbsp;New Post
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/settings">
                <i class="ion-gear-a"></i>
                &nbsp;Settings
              </nuxt-link>
            </li>
            <!-- 展示个人详情 -->
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                :to="{
                  name: 'profile',
                  query: {
                    username: user.username
                  }
                }"
              >
                <img class="user-pic" :src="user.image" />
                {{ user.username }}
              </nuxt-link>
            </li></template
          >

          <template v-else>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/login"> Sign in </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/register"> Sign up </nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <!-- 中间的单页面子组件 -->
    <nuxt-child />
    <!-- 底部 不需要修改 -->
    <footer style="max-width: 1110px">
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'layout',
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style>
</style>
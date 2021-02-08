<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>
          <form @submit.prevent="formSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="current.image"
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="current.username"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="current.bio"
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="current.email"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="current.password"
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <nuxt-link
                class="preview-link"
                :to="{
                  name: 'profile',
                  query: {
                    username: current.username
                  }
                }"
              >
                <button class="btn btn-lg btn-primary pull-xs-right">
                  Update Settings
                </button>
              </nuxt-link>
            </fieldset>
          </form>
          <hr />
          <button @click="logout" class="btn btn-outline-danger">
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { updateUser } from '@/api/user'
export default {
  name: 'settings',
  data() {
    return {
      current: {
        bio: '', // 介绍描述
        username: '', // 用户名
        image: '', // 头像
        email: '840600097@qq.com', // 邮箱
        password: '19930805Wxs' // 密码
      }
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  created() {
    this.current = Object.assign({}, this.user)
  },
  methods: {
    ...mapMutations(['setUser']),
    async formSubmit() {
      try {
        // 提交表单请求登录
        await updateUser({
          user: this.current
        })
      } catch (err) {
        console.log(err.response.data.errors)
      }
    },

    logout() {
      this.setUser(null);
      this.$router.push({name:'login'})
    }
  }
}
</script>

<style>
</style>
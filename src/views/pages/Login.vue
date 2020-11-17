<!-- ======================================================
    Login.vue
=========================================================== -->

<template>
  <div
    class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    id="page-login"
  >
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col hidden lg:block lg:w-1/2">
              <img
                src="@/assets/images/pages/login.png"
                alt="login"
                class="mx-auto"
              />
            </div>
            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="p-8">
                <div class="vx-card__title mb-8">
                  <h4 class="mb-4">Login</h4>
                  <p>欢迎回来，请登录到您的帐户</p>
                </div>
                <vs-input
                  data-vv-validate-on="blur"
                  v-validate="'required|max:10'"
                  type="username"
                  name="username"
                  icon="icon icon-lock"
                  icon-pack="feather"
                  label-placeholder="用户名"
                  v-model="username"
                  class="w-full mt-6 no-icon-border"
                />
                <span class="text-danger text-sm">{{
                  errors.first("username")
                }}</span>

                <vs-input
                  data-vv-validate-on="blur"
                  v-validate="'required|min:6|max:10'"
                  type="password"
                  name="password"
                  icon="icon icon-lock"
                  icon-pack="feather"
                  label-placeholder="密码"
                  v-model="password"
                  class="w-full mt-6 no-icon-border"
                />
                <span class="text-danger text-sm">{{
                  errors.first("password")
                }}</span>

                <div class="flex flex-wrap justify-between my-5">
                  <vs-checkbox v-model="remeberMe" class="mb-3"
                    >记住</vs-checkbox
                  >
                  <router-link to="/pages/forgot-password"
                    >忘记密码?</router-link
                  >
                </div>
                <vs-button type="border" @click="registerUser"
                  >注册用户</vs-button
                >
                <vs-button
                  class="float-right"
                  :disabled="!validateForm"
                  @click="login"
                  >登录</vs-button
                >
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
import { userLogin } from "@/api/login.js";
export default {
  data() {
    return {
      url: "http://192.168.1.110",
      username: "",
      password: "",
      remeberMe: false,
    };
  },
  computed: {
    validateForm() {
      return !this.errors.any() && this.username != "" && this.password != "";
    },
  },
  created() {
    localStorage.removeItem("token");
    localStorage.removeItem("levelCy");
    localStorage.removeItem("branch");
    localStorage.removeItem("head_img");
    localStorage.removeItem("username");
    localStorage.removeItem("sex");
  },
  methods: {
    login() {
      let data = new FormData();
      data.append("username", this.username);
      data.append("password", this.password);
      data.append("remeberMe", this.remeberMe);
      localStorage.removeItem("userRole");
      userLogin(data).then((response) => {
          console.log(response)
        if (response.Status === "ok") {
          this.$message({
            showClose: true,
            message: "登陆成功",
            type: "success",
            offset: 92,
            duration: 2000,
          });
          localStorage.setItem("token", response.token);
        //   axios.defaults.headers["token"] = localStorage.getItem("token");

          localStorage.setItem("head_img", response.user_info.head_img);
          localStorage.setItem("sex", response.user_info.sex);
          localStorage.setItem("username", response.user_info.username);
          // 关于权限
          //    this.$acl.change(response.user_info.username)
          //    this.$store.dispatch('updateUserRole', response.user_info.username)
          // 关于权限
          this.$acl.change(response.user_info.level_cy);
          this.$store.dispatch(
            "updateLevelCy",
            response.user_info.level_cy
          );
          this.$store.dispatch("updateBranch", response.user_info.branch);
          if (this.$route.query.redirect) {
            let redirect = this.$route.query.redirect;
            this.$router.push(redirect);
          } else {
            //默认登录成功后进入的页面
            this.$router.push("/dashboard/analytics");
          }
        } else {
          this.$message({
            showClose: true,
            message: "登陆失败",
            type: "error",
            offset: 92,
            duration: 2000,
          });
        }
      });

      // const payload = {
      //      remeberMe: this.remeberMe,
      //     userDetails: {
      //         username: this.username,
      //         password: this.password,
      //     },
      //     notify: this.$vs.notify
      // }
      // this.$store.dispatch('auth/loginAttempt', payload);
      //含有异步操作，例如向后台提交数据   this.$store.dispatch(‘action方法名’,值)
    },

    // loginAuth0() {
    //     if (this.$store.state.auth.isUserLoggedIn()) {
    //         this.notifyAlreadyLogedIn();
    //         return false
    //     }
    //     this.$auth.login({ target: this.$route.query.to });
    // },

    //通知已登录
    notifyAlreadyLogedIn() {
      this.$vs.notify({
        title: "Login Attempt",
        text: "You are already logged in!",
        iconPack: "feather",
        icon: "icon-alert-circle",
        color: "warning",
      });
    },
    //注册用户
    registerUser() {
      if (this.$store.state.auth.isUserLoggedIn()) {
        this.notifyAlreadyLogedIn();
        return false;
      }
      this.$router.push("/pages/register");
    },
  },
};
</script>

<style lang="scss">
#page-login {
  .social-login {
    .bg-facebook {
      background-color: #1551b1;
    }
    .bg-twitter {
      background-color: #00aaff;
    }
    .bg-google {
      background-color: #4285f4;
    }
    .bg-github {
      background-color: #333;
    }
  }
}
</style>

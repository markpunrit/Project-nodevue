<template>
  <div class="w3">
    <back-header />
    <div class="w3-container">
      <h1><b>Log in</b></h1>

      <div class="w3-section w3-bottombar w3-padding-10"></div>
    </div>
    <div class="center">
      <form v-on:submit.prevent="onLogin">
        <div class="container">
          <label for="uname"><b>Email</b></label>
          <input
            type="text"
            placeholder="Email"
            name="uname"
            v-model="email"
            required
          />

          <label for="psw"><b>Password</b></label>
          <input
            type="password"
            placeholder="Password"
            name="psw"
            v-model="password"
            required
          />

          <button type="submit">Login</button>
          <div class="d">
            Don't have an account?
            <router-link :to="{ name: 'user-create' }">Sign Up</router-link>
          </div>
        </div>
        <div class="error" v-if="error">{{ error }}</div>
      </form>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /> <br />
    <back-footer />
  </div>
</template>
<script>
import AuthenService from "@/services/AuthenService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async onLogin() {
      try {
        const response = await AuthenService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$router.push({
          name: "MainAdmin",
        });
      } catch (error) {
        console.log(error);
        this.error = error.response.data.error;
        this.email = "";
        this.password = "";
      }
    },
  },
};
</script>
<style scoped>
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #ffb7b7;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}
.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}
.center {
  padding: 12px;
  padding-left: 630px;
  padding-right: 440px;
}
form {
  font-size: 17px;
}
.d {
  padding-left: 110px;
}
.error {
  color: red;
  padding-left: 140px;
}
.w3-container {
  margin-left: 300px;
  background-color: rgb(240, 243, 242);
}
.w3 {
  background-color: rgb(240, 243, 242);
}
h1 {
  font-family: "Itim", cursive;
}
</style>

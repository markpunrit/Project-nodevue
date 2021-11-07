<template>
  <div class="w3">
    <back-admin />
    <!-- !PAGE CONTENT! -->
    <div class="w3-main">
      <!-- Header -->
      <header id="suibian">
        <div class="w3-container">
          <back-logout />
        </div>
      </header>
      <div class="w3-row-padding-18">
        <div class="w3-third w3-container w3-margin-bottom">
          <div class="box w3-center">
            <h1><b>คอร์สเรียนภาษาจีน</b></h1>
            Chinese language course.
            <hr />

            <button class="w3-button" v-on:click="navigateTo('/chineses')">
              ดูทั้งหมด
            </button>
          </div>
          <br />
          <div class="box w3-center">
            <h1><b>การจองคอร์สเรียน</b></h1>
            Book the course.
            <hr />
            <p>
              <button class="w3-button" v-on:click="navigateTo('/books')">
                ดูทั้งหมด
              </button>
            </p>
          </div>
          <br />
          <div class="box w3-center">
            <h1><b>ผู้ดูแลระบบ</b></h1>
            Admin.
            <hr />
            <p>
              <button class="w3-button" v-on:click="navigateTo('/users')">
                ดูทั้งหมด
              </button>
            </p>
          </div>
        </div>
      </div>
      <div class="w3-row-padding w3-padding-18" id="about"></div>
      <!-- End page content -->
    </div>
    <back-footer />
  </div>
</template>
<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },

    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>
<style scoped>
.w3 {
  max-width: 1600px;
  background-color: rgb(240, 243, 242);
}
.w3-main {
  margin-left: 300px;
}
.w3-button {
  font-size: 17px;
}
h1 {
  font-family: "Itim", cursive;
  margin-left: 15px;
}
.box {
  background-color: white;
  width: 500px;
  padding: 24px;
  margin: 2px;
}
.w3-button {
  background-color: #ffb7b7;
}
.w3-third {
  padding-left: 318px;
}
</style>
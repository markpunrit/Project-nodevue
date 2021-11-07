<template>
  <div class="w3">
    <back-admin />
    <!-- !PAGE CONTENT! -->
    <div class="w3-main">
      <!-- Header -->
      <div class="w3-container">
        <back-logout />

        <div v-if="users.length">
          <h1>ผู้ดูแลระบบทั้งหมด {{ users.length }} คน</h1>
          <div class="w3-row-padding-10">
            <div v-for="user in users" v-bind:key="user.id">
              <div class="w3-third w3-container">
                <div class="w3-container w3-white w3-center">
                  <p>
                    <b>id: {{ user.id }}</b>
                  </p>
                  <p>ชื่อ-นามสกุล: {{ user.name }} - {{ user.lastname }}</p>
                  <p>Email: {{ user.email }}</p>
                  
                  <hr />
                  
                    <p><button
                    class="w3-button"
                    v-on:click="navigateTo('/user/' + user.id)">ดูข้อมูลทั้งหมด</button>
                     <button class="w3-button w3-black" v-on:click="navigateTo('/mainadmin')">กลับ</button>
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w3-row-padding w3-padding-18" id="about"></div>
        <!-- End page content -->
      </div>
    </div>
    <back-footer />
  </div>
</template>
<script>
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    try {
      this.users = (await UsersService.index()).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteUser(user) {
      let result = confirm("Want to delete");
      if (result) {
        try {
          await UsersService.delete(user);
          this.refreshData();
        } catch (error) {
          console.log(error);
        }
      }
    },
    async refreshData() {
      this.users = (await UsersService.index()).data;
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
h1 {
  font-family: "Itim", cursive;
  padding-left: 15px;
}
.w3 {
  max-width: 1600px;
  background-color: rgb(240, 243, 242);
}
.w3-button {
  background-color: #ffb7b7;
}
.w3-main {
  margin-left: 300px;
}
.w3-container {
  margin-bottom: 17px;
}
</style>
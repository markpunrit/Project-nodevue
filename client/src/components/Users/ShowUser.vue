<template>
  <div class="w3">
    <back-admin />
    <!-- !PAGE CONTENT! -->
    <div class="w3-main">
      <!-- Header -->
      <div class="w3-container">
        <back-logout />
    
        <div class="w3-row-padding-10">
			<h1>ข้อมูลทั้งหมดของ ID {{user.id}} !!!</h1>
			<div class="w3-third w3-container">
              <div class="w3-container w3-white w3-center">
    <p>id: {{ userId }}</p>
    <p>ชื่อ - นามสกุล {{ user.name }} - {{ user.lastname }}</p>
    <p>email: {{ user.email }}</p>
    <p> <button
                      class="w3-button"
                      v-on:click="navigateTo('/user/edit/' + user.id)"
                    >
                      แก้ไขข้อมูล
                    </button>
                    <button class="w3-button" v-on:click="deleteUser(user)">
                      ลบข้อมูล
                    </button>
                    <button class="w3-button w3-black" v-on:click="navigateTo('/uses')">กลับ</button>

                    </p>
              </div>     
 </div>
			
		</div>
	  </div>
	</div><br><br><br><br><br><br><br><br><br><br><br><br>
    <back-footer />
	</div>
</template>
<script>
import UserService from "@/services/UsersService";
export default {
  data() {
    return {
      user: null,
    };
  },
  async created() {
    try {
      let userId = this.$route.params.userId;
      this.user = (await UserService.show(userId)).data;
    } catch (error) {
      console.log(error);
    }
  },
methods: {
		navigateTo(route) {
			this.$router.push(route);
		},
		async deleteUser(user) {
      let result = confirm("ต้องการลบใช่ไหม ?");
      if (result) {
        try {
          await UserService.delete(user);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    }
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
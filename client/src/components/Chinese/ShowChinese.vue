<template>
	<div class="w3">
    <back-admin />
    <!-- !PAGE CONTENT! -->
    <div class="w3-main">
      <!-- Header -->
      <div class="w3-container">
        <back-logout />
		<div class="w3-row-padding-10">
			<h1>ข้อมูลทั้งหมดของ ID {{chinese.id}} !!!</h1>
			<div class="w3-third w3-container">
              <div class="w3-container w3-white w3-center">
		<p>id: {{ chinese.id }}</p>
		<p>name: {{ chinese.name }}</p>
		<p>hours: {{ chinese.hours }}</p>
		<p>price: {{ chinese.price }}</p>
		<p>date: {{ chinese.date }}</p>
		<p>
                  <button
                    class="w3-button"
                    v-on:click="navigateTo('/chinese/edit/' + chinese.id)"
                  >
                    แก้ไขข้อมูล
                  </button>
                  <button class="w3-button" v-on:click="deleteChinese(chinese)">
                    ลบข้อมูล
                  </button>
                
			<button class="w3-button w3-black" v-on:click="navigateTo('/chineses')">กลับ</button>
		</p>    
            </div>
          </div>
        </div>
        <div class="w3-row-padding w3-padding-18" id="about"></div>
        <!-- End page content -->
      </div>
    </div><br><br><br><br><br><br><br><br>
    <back-footer />
  </div>
</template>
<script>
import ChineseService from "@/services/ChineseService";
export default {
	data() {
		return {
			chinese: null,
		};
	},
	async created() {
		try {
			let chineseId = this.$route.params.chineseId;
			this.chinese = (await ChineseService.show(chineseId)).data;
		} catch (error) {
			console.log(error);
		}
	},
	methods: {
		navigateTo(route) {
			this.$router.push(route);
		},
		async deleteChinese(chinese) {
      let result = confirm("ต้องการลบใช่ไหม ?");
      if (result) {
        try {
          await ChineseService.delete(chinese);
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

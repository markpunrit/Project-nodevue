<template >
  <div class="w3">
    <back-admin />
    <!-- !PAGE CONTENT! -->
    <div class="w3-main">
      <!-- Header -->
      <div class="w3-container">
        <back-logout />
      
      <div v-if="chineses.length">
        <h1>คอร์สเรียนทั้งหมด {{ chineses.length }}</h1>
          <div class="w3-row-padding-10">
            <div v-for="chinese in chineses" v-bind:key="chinese.id">
            <div class="w3-third w3-container">
              <div class="w3-container w3-white w3-center">
                <p>
                  <b>id: {{ chinese.id }}</b>
                </p>
                <p>
                  <b>Course : {{ chinese.name }}</b>
                </p>
                <p>จำนวนชั่วโมง : {{ chinese.hours }}</p>
                <p>ราคา : {{ chinese.price }}</p>
                <p>วัน/เวลา : {{ chinese.date }}</p>
                <hr />
                <p>
                  <button
                    class="w3-button"
                    v-on:click="navigateTo('/chinese/' + chinese.id)">ดูข้อมูลทั้งหมด</button>
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
import ChineseService from "@/services/ChineseService";
export default {
  data() {
    return {
      chineses: [],
    };
  },
  async created() {
    this.chineses = (await ChineseService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    
    async refreshData() {
      this.chineses = (await ChineseService.index()).data;
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

<template>
<div class="w3">
    <back-admin />
    <!-- !PAGE CONTENT! -->
    <div class="w3-main">
      <!-- Header -->
      <div class="w3-container">
        <back-logout />
      
      <div v-if="books.length">
        <h1>การจองคอร์สเรียนทั้งหมด {{ books.length }}</h1>
          <div class="w3-row-padding-10">
            <div v-for="book in books" v-bind:key="book.id">
            <div class="w3-third w3-container">
              <div class="w3-container w3-white w3-center">
                <p>
                  <b>id: {{ book.id }}</b>
                </p>
                <p>
                  <b>ชื่อ-สกุล : {{ book.name }} - {{ book.lastname }}</b>
                </p>
                
                <p>Course : {{ book.course }}</p>
                <hr />
                <p><button
                    class="w3-button"
                    v-on:click="navigateTo('/book/' + book.id)">ดูข้อมูลทั้งหมด</button>
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
import BookService from "@/services/BookService";


export default {
  data() {
    return {
      books: [],
    };
  },
  async created() {
    this.books = (await BookService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async refreshData() {
      this.books = (await BookService.index()).data;
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
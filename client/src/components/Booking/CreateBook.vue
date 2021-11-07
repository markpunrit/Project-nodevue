<template 
>
  <div class="w3">
    <back-header />
    <div class="w3-container">
      <h1><b>Register</b></h1>

      <div class="w3-section w3-bottombar w3-padding-10"></div>
    </div>
    <div class="center">
      <form v-on:submit.prevent="createBook">
        <div class="container">
          <label for="uname"><b>Name</b></label>
          <input
            type="text"
            placeholder="Name"
            name="uname"
            v-model="book.name"
            required
          />

          <label for="uname"><b>Lastname</b></label>
          <input
            type="text"
            placeholder="Lastname"
            name="lname"
            v-model="book.lastname"
            required
          />

          <label for="uname"><b>Tel</b></label>
          <input
            type="text"
            placeholder="Tel"
            name="uname"
            v-model="book.tel"
            required
          />
          <label for="uname"><b>Email</b></label>
          <input
            type="text"
            placeholder="Email"
            name="uname"
            v-model="book.email"
            required
          />

          <label for="psw"><b>เลือกคอร์สที่ต้องการ</b></label>

          <select v-model="book.course" required>
            <option v-for="chinese in chineses" v-bind:key="chinese.id">
              {{ chinese.name }}
            </option>
          </select>

          <button type="submit" >Register</button>
        </div>
      </form>
      <hr />
    </div>
    <back-footer />
  </div>
</template>
<script>
import BookService from "@/services/BookService";
import ChineseService from "@/services/ChineseService";

export default {
  data() {
    return {
      book: {
        email: "",
        tel: "",
        name: "",
        lastname: "",
        course: "",
      },
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
    async createBook() {
      try {
        await BookService.post(this.book);
        this.$router.push({
          name: "reserve",
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
input[type="text"],
select {
  width: 100%;
  padding: 15px 25px;
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
.center {
  padding: 12px;
  padding-left: 630px;
  padding-right: 440px;
}
form {
  font-size: 17px;
}
.error {
  color: red;
  padding-left: 140px;
}
h1 {
  font-family: "Itim", cursive;
}
.w3-container {
  margin-left: 300px;
  background-color: rgb(240, 243, 242);
}
.w3 {
  background-color: rgb(240, 243, 242);
}
</style>
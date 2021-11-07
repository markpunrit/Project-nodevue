<template>
<div class="w3">
    <back-admin />
    <div class="w3-container">
      <back-logout />
    </div>

    <div class="center">
      <h1> แก้ไขคอร์สเรียน </h1>
      <form v-on:submit.prevent="editBook">
        <div class="container">
          <label for="uname"><b>หลักสูตร</b></label>
          <input
            type="text"
            placeholder="Course"
            name="uname"
            v-model="book.name"
            required
          />

          <label for="uname"><b>จำนวนชั่วโมง</b></label>
          <input
            type="text"
            placeholder="Hours"
            name="lname"
            v-model="book.lastname"
            required
          />

          <label for="uname"><b>ราคา</b></label>
          <input
            type="text"
            placeholder="Price"
            name="uname"
            v-model="book.email"
            required
          />

          <label for="psw"><b>วัน/เวลาที่สอน</b></label>
          <input
            type="text"
            placeholder="Date"
            name="psw"
            v-model="book.tel"
            required
          />
          <label for="psw"><b>เลือกคอร์สที่ต้องการ</b></label>

          <select v-model="book.course" required>
            <option v-for="chinese in chineses" v-bind:key="chinese.id">
              {{ chinese.name }}
            </option>
          </select>


          <button type="submit">Edit</button>
        </div>
      </form>
    </div>
    <br /><br /><br />
    <back-footer />
  </div>
</template>
<script>
import ChineseService from "@/services/ChineseService";
import BookService from "@/services/BookService";

export default {
    data(){
        return{
        book: {
        email: "",
        tel: "",
        name: "",
        lastname: "",
        course: "",
      },
      chineses: {
        name: "",
      },
        }
    },
    async created() {
    this.chineses = (await ChineseService.index()).data;
  },
    methods:{
        async editBook(){
            try{
                await BookService.put(this.book)
                this.$router.push({
                    name: 'books'
                })

            }catch(error){
                console.log(error)
            }
        }
    }, 
    async created(){
        try{
            let bookId = this.$route.params.bookId
            this.book = (await BookService.show(bookId)).data
        }catch(error){
            console.log(error)
        }
    }
}
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

h1 {
  font-family: "Itim", cursive;
  padding-left: 110px;
}
.w3-container {
  margin-left: 300px;
  background-color: rgb(240, 243, 242);
}
.w3 {
  background-color: rgb(240, 243, 242);
}
</style>
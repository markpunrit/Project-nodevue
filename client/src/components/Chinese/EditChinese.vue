<template>
  <div class="w3">
    <back-admin />
    <div class="w3-container">
      <back-logout />
    </div>

    <div class="center">
      <h1>แก้ไขคอร์สเรียน</h1>
      <form v-on:submit.prevent="editChinese">
        <div class="container">
          <label for="uname"><b>หลักสูตร</b></label>
          <input
            type="text"
            placeholder="Course"
            name="uname"
            v-model="chinese.name"
            required
          />

          <label for="uname"><b>จำนวนชั่วโมง</b></label>
          <input
            type="text"
            placeholder="Hours"
            name="lname"
            v-model="chinese.hours"
            required
          />

          <label for="uname"><b>ราคา</b></label>
          <input
            type="text"
            placeholder="Price"
            name="uname"
            v-model="chinese.price"
            required
          />

          <label for="psw"><b>วัน/เวลาที่สอน</b></label>
          <input
            type="text"
            placeholder="Date"
            name="psw"
            v-model="chinese.date"
            required
          />

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

export default {
  data() {
    return {
      chinese: {
        name: "",
        hours: "",
        price: "",
        date: "",
      },
    };
  },
  methods: {
    async editChinese() {
      try {
        await ChineseService.put(this.chinese);
        this.$router.push({
          name: "chineses",
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    try {
      let chineseId = this.$route.params.chineseId;
      this.chinese = (await ChineseService.show(chineseId)).data;
    } catch (error) {
      console.log(error);
    }
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
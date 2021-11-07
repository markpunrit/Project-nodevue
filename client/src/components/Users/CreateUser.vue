<template>
  <div class="w3">
    <back-admin />
    <div class="w3-container">
      <back-logout />
    </div>
    <div class="center">
      <form v-on:submit.prevent="createUser">
        <h1> เพิ่มผู้ดูแล </h1>
        <div class="container">
          <label for="uname"><b>Name</b></label>
          <input
            type="text"
            placeholder="Name"
            name="uname"
            v-model="user.name"
            required
          />

          <label for="uname"><b>Lastname</b></label>
          <input
            type="text"
            placeholder="Lastname"
            name="lname"
            v-model="user.lastname"
            required
          />

          <label for="uname"><b>Email</b></label>
          <input
            type="text"
            placeholder="Email"
            name="uname"
            v-model="user.email"
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

          <button type="submit">Create</button>
        </div>
      </form>
    </div>
    <br /><br /><br />
    <back-footer />
  </div>
</template>
<script>
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
      user: {
        name: "",
        lastname: "",
        email: "",
        password: "",
        status: "active",
      },
    };
  },
    async refreshData() {
      this.users = (await UsersService.index()).data;
    },
  methods: {
    async createUser() {
      try {
        await UsersService.post(this.user);
        this.$router.push({
          name: 'users',
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
  padding: 0px;
}

span.psw {
  float: right;
  padding-top: 16px;
}
.center {
  padding: 12px;
  padding-left: 600px;
  padding-right: 450px;
}
form {
  font-size: 17px;
}
.w3-container {
  margin-left: 300px;
  background-color: rgb(240, 243, 242);
}
.w3 {
  background-color: rgb(240, 243, 242);
}
h1{
  font-family: "Itim", cursive;
  padding-left: 150px;
  
}
</style>
<template>
<div class="w3">
    <back-admin />
    <div class="w3-container">
      <back-logout />
    </div>

    <div class="center">
      <h1> แก้ไขข้อมูล </h1>
      <form v-on:submit.prevent = "editChinese">
        <div class="container">
          <label for="uname"><b>ชื่อ</b></label>
          <input
            type="text"
            placeholder="Name"
            name="uname"
            v-model="user.name"
            required
          />

          <label for="uname"><b>นามสกุล</b></label>
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
          <label for="uname"><b>Password</b></label>
          <input
            type="text"
            placeholder="Password"
            name="uname"
            v-model="user.password"
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
<script>import UsersService from '@/services/UsersService'

export default {
    data(){
        return{
            user:{
                name: '',
                lastname: '',
                email: '',
                password: '',
                status: 'active'
            }
        }
    },
    methods:{
        async editUser(){
            try{
                await UsersService.put(this.user)
                this.$router.push({
                    name: 'users'
                })

            }catch(error){
                console.log(error)
            }
        }
    }, 
    async created(){
        try{
            let userId = this.$route.params.userId
            this.user = (await UsersService.show(userId)).data
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
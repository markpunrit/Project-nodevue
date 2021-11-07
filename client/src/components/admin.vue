<template>
  <div class="w3">
    <back-style />
    <nav class="w3-sidebar w3-collapse w3-white w3-animate-left" id="mySidebar">
      <br />
      <div class="w3-img">
        <img src="./pic/15.png" style="width: 35%" /><br /><br />
      </div>
      <div class="w3-bar-block">
        <router-link
          :to="{ name: 'MainAdmin' }"
          class="w3-bar-item w3-button w3-text-teal"
          ><i class="fa fa-th-large fa-fw w3-margin-right"></i>Home
          Page</router-link
        >

        <router-link
          :to="{ name: 'chinese-create' }"
          class="w3-bar-item w3-button"
          ><i class="fa fa-plus fa-fw w3-margin-right"></i
          >เพิ่มคอร์สเรียน</router-link
        >
        <router-link
          :to="{ name: 'user-create' }"
          onclick="w3_close()"
          class="w3-bar-item w3-button"
          ><i class="fa fa-address-book fa-fw w3-margin-right"></i
          >เพิ่มผู้ดูแลระบบ</router-link
        >
        <router-link
          :to="{ name: 'chineses' }"
          onclick="w3_close()"
          class="w3-bar-item w3-button"
          ><i class="fa fa-book fa-fw w3-margin-right"></i
          >คอร์สเรียนภาษาจีน</router-link
        >
        <router-link
          :to="{ name: 'books' }"
          onclick="w3_close()"
          class="w3-bar-item w3-button"
          ><i class="fa fa-leanpub fa-fw w3-margin-right"></i
          >การจองคอร์สเรียน</router-link
        >
        <router-link
          :to="{ name: 'users' }"
          onclick="w3_close()"
          class="w3-bar-item w3-button"
          ><i class="fa fa-user fa-fw w3-margin-right"></i
          >ผู้ดูแลระบบ</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.w3 {
  max-width: 1600px;
  background-color: rgb(229, 231, 231);
}
.w3-sidebar {
  z-index: 3;
  width: 300px;
  text-align: center;
}
.w3-bar-block {
  font-size: 17px;
}
.w3-button {
  font-size: 18px;
}
</style>

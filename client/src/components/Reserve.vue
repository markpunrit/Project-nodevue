<template >
  <div class="w3">
    <back-style />
    <nav class="w3-sidebar w3-collapse w3-white w3-animate-left" id="mySidebar">
      <br />
      <div class="w3-img">
        <img src="./pic/15.png" style="width: 35%" /><br /><br />
      </div>
      <div class="w3-bar-block">
        <a
          href="#suibian"
          onclick="w3_close()"
          class="w3-bar-item w3-button w3-text-teal"
          ><i class="fa fa-th-large fa-fw w3-margin-right"></i>All COURSES</a
        >
        <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button"
          ><i class="fa fa-user fa-fw w3-margin-right"></i>ABOUT</a
        >
        <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button"
          ><i class="fa fa-envelope fa-fw w3-margin-right"></i>CONTACT</a
        >
      </div>
    </nav>

    <!-- Overlay effect when opening sidebar on small screens -->
    <div
      class="w3-overlay w3-hide-large w3-animate-opacity"
      onclick="w3_close()"
      title="close side menu"
      id="myOverlay"
    ></div>

    <!-- !PAGE CONTENT! -->
    <div class="w3-main">
      <!-- Header -->
      <header id="suibian">
        <div class="w3-container">
          <h1><b>Suíbiàn</b></h1>
          <div class="w3-section w3-bottombar w3-padding-10"></div>
          <h1 class="p"> ลงทะเบียนสำเร็จ !!! </h1>
          <p class="c">
          ระบบลงทะเบียนสำเร็จ หากต้องการทำการเปลียนแปลงหรือยกเลิก กรุณาติดต่อตาม contact ด้านล่างค่ะ
        </p>
        </div>
        
      </header>
      <!-- First Photo Grid-->
      <back-main />
      <!-- Images of Me -->
      <div class="w3-row-padding w3-padding-16">
        <div class="w3-col m6">
          <img src="./pic/1.jpg" alt="Me" style="width: 100%" />
        </div>
        <div class="w3-col m6">
          <img src="./pic/2.jpg" alt="Me" style="width: 100%" />
        </div>
      </div>

      <div class="w3-container w3-padding-large"  id="about">
        <h4><b>About Website</b></h4>
        <p>
          suíbiàn เปิดการเรียนการสอนภาษาจีนแบบออนไลน์
          ช่วยให้ผู้เรียนสามารถเรียนภาษาจีนจากที่ไหนก็ได้ทั่วทุกมุมโลก
          คุณสามารถเข้าถึงบทเรียนและความรู้ต่างๆได้ง่ายและรวดเร็ว
          เหมาะสำหรับผู้ที่ไม่สะดวกในการเดินทาง
          สอนโดยเหล่าซือที่ผ่านการคัดเลือกอย่างดี มากด้วยความรู้และ ประสบการณ์
          มีการติดตามและวัดผลการเรียนรู้ตลอดจนจบคอร์ส เพื่อให้มั่นใจว่า
          นักเรียนจะได้รับประสบการณ์การเรียนภาษาออนไลน์ที่มีประสิทธิภาพ
        </p>
        <hr />
      </div>

      <!-- Contact Section -->
      <div class="w3-container w3-padding-large w3-grey">
        <h4 id="contact"><b>Contact</b></h4>
        <div class="w3-row-padding w3-center w3-padding-24">
          <div class="w3-third w3-dark-grey">
            <p><i class="fa fa-envelope w3-xxlarge w3-text-light-grey"></i></p>
            <p>Suibian@gmail.com</p>
          </div>
          <div class="w3-third w3-teal">
            <p><i class="fa fa-phone w3-xxlarge w3-text-light-grey"></i></p>
            <p>025747734</p>
          </div>
          <div class="w3-third w3-dark-grey">
            <p><img src="./pic/3.png" alt="Me" style="width: 14.5%" /><br>LINE</p>
            
    
          </div>
        </div>
      </div>

      

      <!-- End page content -->
    </div>
    <back-footer/>
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
.w3-button1 {
  background-color: #ffb7b7;
}
.w3 {
  max-width: 1600px;
  background-color: rgb(240, 243, 242);
}
.w3-sidebar {
  z-index: 3;
  width: 300px;
  text-align: center;
}
.w3-overlay {
  cursor: pointer;
}
.w3-main {
  margin-left: 300px;
}
.w3-button {
  font-size: 15px;
}
h1{
   font-family: "Itim", cursive;
}
.w3-container {
   margin-bottom: 32px;
   }
.p{
    padding-left: 450px;
}
.c{
    padding-left: 270px;
}
</style>

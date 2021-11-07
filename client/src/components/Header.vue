<template>
	<div class="w3">
		<back-style />
    <nav class="w3-sidebar w3-collapse w3-white w3-animate-left" id="mySidebar">
      <br />
      <div class="w3-img">
        <img
          src="./pic/15.png" style="width:35%;"
        /><br /><br />
      </div>
      <div class="w3-bar-block">
        <router-link :to="{ name: 'MainUser' }" class="w3-bar-item w3-button w3-text-teal"><i class="fa fa-th-large fa-fw w3-margin-right"></i>Home Page</router-link>    
      </div>
      
    </nav>
      <!-- Overlay effect when opening sidebar on small screens -->
    <div
      class="w3-overlay w3-hide-large w3-animate-opacity"
      onclick="w3_close()"
      title="close side menu"
      id="myOverlay"
    ></div>
  </div>

	
</template>

<script>
export default {};
</script>
<style scoped>
.w3 {
  max-width: 1600px;
  background-color:rgb(229, 231, 231);
  
}
.w3-sidebar {
  z-index: 3;
  width: 300px;
  text-align: center;
}
.w3-bar-block{
  font-size: 17px;
}
.w3-button{
  font-size: 18px;
}
</style>

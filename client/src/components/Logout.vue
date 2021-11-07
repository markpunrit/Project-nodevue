<template >
  <div>
    <br />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
      rel="stylesheet"
    />
    <div class="w3">
      <button
        class="w3-button w3-white w3-hide-small w3-button w3-black"
        style="margin-left: 1099px"
        v-on:click="logout"
      >
       Log out
      </button>
      <div class="w3-section w3-bottombar w3-padding-10"></div>
    </div>
   
  </div>
</template>
<script>
export default {

  methods: {
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
h2,
h4,
h5 {
  font-family: "Itim", cursive;
}
.card-body {
  font-size: 16px;
}
.w3-button {
  font-size: 17px;
}
</style>

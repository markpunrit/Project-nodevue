<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
      rel="stylesheet"
    />
    <!--<back-header/>-->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app{
  font-family: "Itim", cursive;
  font-size: 16px;
  color: #2c3e50;
}
</style>

<template >
  <div v-if="chineses.length">
    <back-style />
    <div v-for="chinese in chineses" v-bind:key="chinese.id" >
      <div class="w3-row-padding-18">
        <div class="w3-third w3-container w3-margin-bottom">
          <div class="w3-container w3-white w3-center">
            <p>
              <b>Course : {{ chinese.name }}</b>
            </p>
            <p>จำนวนชั่วโมง : {{ chinese.hours }}</p>
            <p>ราคา : {{ chinese.price }}</p>
            <p>วัน/เวลา : {{ chinese.date }}</p>
            <hr />
            <p>
               <router-link
          :to="{ name: 'book-create' }"
          ><button
                class="w3-button" 
                
              >จองเลย!!!
              </button></router-link
        >
            </p>
          </div>
        </div>
      </div>
    </div>
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
	
}
</script>
<style scoped>
.w3-button {
  background-color: #ffb7b7;
}
</style>

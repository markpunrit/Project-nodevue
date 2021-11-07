<template>
	<div class="w3">
    <back-admin />
    <div class="w3-main">
      <!-- Header -->
      <div class="w3-container">
        <back-logout />
        <div class="w3-row-padding-10">
			<h1>ข้อมูลทั้งหมดของ ID {{book.id}} !!!</h1>
			<div class="w3-third w3-container">
              <div class="w3-container w3-white w3-center">
		<p>Name: {{ book.name }}</p>
		<p>Lastname: {{ book.lastname }}</p>
		<p>Email: {{ book.email }}</p>
		<p>Tel: {{ book.tel }}</p>
		<p>Course: {{book.course}}</p><hr/>
		<p>
			<button
                    class="w3-button" v-on:click="navigateTo('/book/edit/' + book.id)">แก้ไข</button>
			<button class="w3-button" v-on:click="deleteBook(book)">
                    ลบข้อมูล
                  </button>


			<button
                    class="w3-button w3-black" v-on:click="navigateTo('/books')">กลับ</button>
					
		</p>
			  </div>
			</div>
		</div>
	  </div>
	</div><br><br><br><br><br>
    <back-footer />
	</div>
</template>
<script>
import BookService from "@/services/BookService";
export default {
	data() {
		return {
			book: null,
		};
	},
	async created() {
		try {
			let bookId = this.$route.params.bookId;
			this.book = (await BookService.show(bookId)).data;
		} catch (error) {
			console.log(error);
		}
	},
	
	methods: {
		navigateTo(route) {
			this.$router.push(route);
		},
		async deleteBook(book) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await BookService.delete(book);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
	},
};
</script>
<style scoped>
h1 {
  font-family: "Itim", cursive;
  padding-left: 15px;
}
.w3 {
  max-width: 1600px;
  background-color: rgb(240, 243, 242);
}
.w3-button {
  background-color: #ffb7b7;
}
.w3-main {
  margin-left: 300px;
}
.w3-container {
  margin-bottom: 17px;
}
</style>

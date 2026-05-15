<template>
  <h2>Posts - GET ({{ data?.data?.length }})</h2>

  <div class="container">
    <div class="posts">
      <div v-for="item in data?.data" :key="item.id">
        <h3>{{ item.title }}</h3>
        <p>{{ item.body }}</p>
        <hr>
      </div>
    </div>
    <form action="" class="form" @submit.prevent="submitPost">
      <h3>POSTING FORM</h3>
      <div>
        <label for="">User ID</label>
        <input type="number" v-model="userId">
      </div>
      <br>
      <div>
        <label for="">Title</label>
        <input type="text" v-model="title">
      </div>
      <br>
      <div>
        <label for="">Body</label>
        <input type="text" v-model="body">
      </div>
      <br>
      <br>
      <button>POST</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {},

      userId: '',
      title: '',
      body: '',
    }
  },
  methods: {
    getPosts() {
      axios.get('posts/')
        .then((rep) => {
          this.data = rep
        }).catch((error) => {
          console.log(error)
        })
    },
    submitPost(){
      const data = {
        "userId":this.userId,
        // "id": 1,
        "title": this.title,
        "body": this.body
      }
      axios.post('posts/', data)
        .then((response)=> {
          console.log(response);
          
        }).catch((error)=> {
          console.log(error);
          
        })
    }
  },
  mounted() {
    this.getPosts()
  }
}
</script>

<style>
.container {
  position: relative;
  display: flex;
  align-items: start;
  gap: 30px;

  form{
    position: sticky;
    top: 0;

    button {
      display: block;
      width: 100%;
    }
  }
}
</style>
<template>
  <h2>Posts - GET ({{ data?.data?.length }})</h2>
  <div v-for="item in data?.data" :key="item.id">
    <h3>{{ item.title }}</h3>
    <p>{{ item.body }}</p>
    <hr>
  </div>
</template>
<script>
export default {
  data(){
    return {
      data: {}
    }
  },
  methods: {
    getPosts(){

      axios.get('posts/')
      .then((rep) => {
        this.data = rep
      }).catch((error)=> {
        console.log(error)
      })
    }
  },
  mounted(){
    this.getPosts()
  }
}
</script>
<template>
  <h2>Posts - GET ({{ data?.data?.length }})</h2>

  <div class="container">
    <div class="posts">
      <div v-for="item in data?.data" :key="item.id">
        <div class="title">
          <h3>{{ item.title }}</h3>
          <button @click="handleHotUpdate(item)">Edit</button>
          <button @click="handleHotUpdate(item)">PATCH</button>
          <button @click="deletePost(item.id); patch = true">DELETE</button>
        </div>
        <p>{{ item.body }}</p>
        <hr>
      </div>
    </div>
    <form action="" class="form" @submit.prevent="handleSubmit">
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
      <button v-if="id">{{ loading ? 'UPDATING...' : 'UPDATE' }}</button>
      <button v-else>{{ loading ? 'POSTING...' : 'POST' }}</button>
    </form>
  </div>
  <div v-if="created" class="success">Post {{ updated ? 'updated' : 'created' }} successfully!</div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      userId: '',
      title: '',
      body: '',
      id: '',
      created: false,
      loading: false,
      updated: false,

      patch: false
    }
  },
  watch: {
    created(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.created = false
          this.updated = false
        }, 3000)
      }
    }
  },
  methods: {
    handleSubmit(){
      if(this.patch) {
        this.patchPost()
      } else if(this.id){
        this.updatePost()
      } else {
        this.submitPost()
      }
    },
    handleHotUpdate(post) {
      this.userId = post.userId
      this.title = post.title
      this.body = post.body,
      this.id = post.id
    },
    getPosts() {
      axios.get('posts/')
        .then((rep) => {
          this.data = rep
        }).catch((error) => {
          console.log(error)
        })
    },
    submitPost() {
      this.loading = true
      const data = {
        "userId": this.userId,
        // "id": 1,
        "title": this.title,
        "body": this.body
      }
      axios.post('posts/', data)
        .then((response) => {
          console.log(response);
          this.created = true
          this.data.data.unshift(response.data)
          this.resetForm()
        }).catch((error) => {
          console.log(error);
        })
    },
    updatePost() {
      this.loading = true
      const data = {
        "userId": this.userId,
        // "id": 1,
        "title": this.title,
        "body": this.body
      }
      
      axios.put(`posts/${this.id}`, data)
        .then((response) => {
          this.created = true
          this.updated = true

          console.log('Reponse ', response);
          
          // this.data.data.unshift(response.data)
          const postIndex = this.data.data.findIndex((post)=> post.id == response.data.id )

          console.log('Post position ', postIndex);

          // setTimeout(() => {
            this.id = ''
            this.resetForm()

            this.data.data[postIndex] = response.data
          // }, 3000)
          
        }).catch((error) => {
          console.log(error);
        })
    },
    patchPost() {
      this.loading = true
      const postIndex = this.data.data.findIndex((post)=> post.id == this.id )



      // const data = {
      //   "userId": this.userId,
      //   // "id": 1,
      //   "title": this.title,
      //   "body": this.body
      // }
      const data = {}

      if(this.data.data[postIndex].title != this.title) {
        data.title = this.title
      }
      if(this.data.data[postIndex].userId != this.userId) {
        data.userId = this.title
      }
      if(this.data.data[postIndex].body != this.body) {
        data.body = this.body
      }

      axios.patch(`posts/${this.id}`, data)
        .then((response) => {
          this.created = true
          this.updated = true

          console.log('Reponse ', response);
          
          // this.data.data.unshift(response.data)

          console.log('Post position ', postIndex);

          // setTimeout(() => {
            this.id = ''
            this.resetForm()

            this.data.data[postIndex] = response.data
          // }, 3000)
          
          this.patch = false
        }).catch((error) => {
          console.log(error);
        })
    },
    
    deletePost(id){
      const comfirmation = window.confirm('Are you sure you want to delete this post?')
      if(comfirmation) {
        axios.delete(`posts/${id}`).then(() => {
          this.data.data = this.data.data.filter((post)=> post.id != id)
        }).catch((error)=> console.log(error))
      }
    },
    resetForm() {
      this.loading = false
      this.userId = ''
      this.title = ''
      this.body = ''
    }
  },
  mounted() {
    this.getPosts()
  }
}
</script>


<!-- <style src="../../style.css"></style> -->
<style>
.container {
  position: relative;
  display: flex;
  align-items: start;
  gap: 30px;

  form {
    position: sticky;
    top: 0;

    button {
      display: block;
      width: 100%;
    }
  }
}

.success {
  position: fixed;
  top: 15px;
  right: 10px;
  padding: 25px 50px;
  background-color: green;
  color: white;
  border-radius: 10px;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: start;
}
</style>
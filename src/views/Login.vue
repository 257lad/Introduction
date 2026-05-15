<template>
  <div>
    <form action="" @submit.prevent="login">
      <div>
        <label for="">Username</label>
        <input type="text" name="" id="" v-model="username">
      </div>
      <div>
        <label for="">Password</label>
        <input type="text" name="" id="" v-model="password">
      </div>
      <p v-if="access" class="access"> Access granted</p>
      <p v-if="token"> {{ token }}</p>
      <p class="error">{{ error }}</p>
      <button> Login</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: '',
      access: false,
      token: ''
    }
  },
  methods: {
    login() {
      this.access = false 
      this.error = ''
      this.token = ''
      const data = {
        "username": this.username,
        "password": this.password
      }
      axios.post('login/', data)
        .then((repsonse) => {
          console.log(repsonse);
          this.access = true
          this.token = repsonse.data.access

          localStorage.setItem('token', this.token)

        }).catch((error) => {
          console.log(error.response);
          this.error = error.response.data.detail
          
        })
    }
  }
}
</script>
<style>
label {
  display: block;
}
.error{
  color: red;
}
.access {
  color: green;
}
</style>
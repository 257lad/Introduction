<template>
  <!-- Page affichant les posts récupérés depuis l'API -->
  <!-- Affiche le nombre total de posts et la liste détaillée ci-dessous -->
  <h2>Posts - GET ({{ data?.data?.length }})</h2>

  <div class="container">
    <div class="posts">
      <!-- Boucle sur les posts renvoyés par l'API -->
      <!-- `item` contient les propriétés du post (id, title, body, userId, ... ) -->
      <div v-for="item in data?.data" :key="item.id">
        <div class="title">
          <!-- Titre du post -->
          <h3>{{ item.title }}</h3>
          <!-- Actions rapides: Edit (pré-remplit le formulaire), PATCH partiel, DELETE -->
          <button @click="handleHotUpdate(item)">Edit</button>
          <button @click="handleHotUpdate(item)">PATCH</button>
          <button @click="deletePost(item.id); patch = true">DELETE</button>
        </div>
        <!-- Contenu du post -->
        <p>{{ item.body }}</p>
        <hr>
      </div>
    </div>
    <!-- Formulaire pour créer ou éditer un post. Soumission gérée par `handleSubmit`. -->
    <form action="" class="form" @submit.prevent="handleSubmit">
      <h3>POSTING FORM</h3>
      <div>
        <!-- Identifiant de l'utilisateur lié au post (numérique) -->
        <label for="">User ID</label>
        <input type="number" v-model="userId">
      </div>
      <br>
      <div>
        <!-- Titre du post -->
        <label for="">Title</label>
        <input type="text" v-model="title">
      </div>
      <br>
      <div>
        <!-- Corps / contenu du post -->
        <label for="">Body</label>
        <input type="text" v-model="body">
      </div>
      <br>
      <br>
      <button v-if="id">{{ loading ? 'UPDATING...' : 'UPDATE' }}</button>
      <button v-else>{{ loading ? 'POSTING...' : 'POST' }}</button>
    </form>
  </div>
  <!-- Notification de succès affichée brièvement après création ou mise à jour -->
  <div v-if="created" class="success">Post {{ updated ? 'updated' : 'created' }} successfully!</div>
</template>

<script>
export default {
  // Données réactives du composant
  data() {
    return {
      // Contiendra la réponse axios complète (ex: { data: [...] })
      data: {},
      // Champs du formulaire
      userId: '',
      title: '',
      body: '',
      // `id` utilisé pour l'édition d'un post existant
      id: '',
      // Flags d'affichage
      created: false,
      loading: false,
      updated: false,

      // Flag pour indiquer si l'on fait un PATCH partiel
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
    // Gère la soumission du formulaire: POST, PUT ou PATCH selon l'état
    handleSubmit() {
      if (this.patch) {
        this.patchPost()
      } else if (this.id) {
        this.updatePost()
      } else {
        this.submitPost()
      }
    },
    handleHotUpdate(post) {
      // Pré-remplit le formulaire avec les valeurs du post sélectionné
      this.userId = post.userId
      this.title = post.title
      this.body = post.body,
        this.id = post.id
    },
    getPosts() {
      // Récupère tous les posts via l'API
      axios.get('posts/')
        .then((rep) => {
          this.data = rep
        }).catch((error) => {
          console.log(error)
        })
    },
    submitPost() {
      // Crée un nouveau post
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
          // Ajoute le post nouvellement créé en tête de la liste
          this.data.data.unshift(response.data)
          this.resetForm()
        }).catch((error) => {
          console.log(error);
        })
    },
    updatePost() {
      // Met à jour entièrement un post existant (PUT)
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

          // Recherche l'index du post modifié dans le tableau local
          const postIndex = this.data.data.findIndex((post) => post.id == response.data.id)

          console.log('Post position ', postIndex);

          this.id = ''
          this.resetForm()
          
          // Met à jour l'élément local avec la réponse du serveur
          this.data.data[postIndex] = response.data
        }).catch((error) => {
          console.log(error);
        })
    },
    patchPost() {
      // PATCH partiel: n'envoie que les champs modifiés
      this.loading = true
      const postIndex = this.data.data.findIndex((post) => post.id == this.id)

      // Prépare un objet `data` ne contenant que les champs modifiés
      const data = {}

      if (this.data.data[postIndex].title != this.title) {
        data.title = this.title
      }
      if (this.data.data[postIndex].userId != this.userId) {
        data.userId = this.title
      }
      if (this.data.data[postIndex].body != this.body) {
        data.body = this.body
      }

      axios.patch(`posts/${this.id}`, data)
        .then((response) => {
          this.created = true
          this.updated = true

          console.log('Reponse ', response);

          console.log('Post position ', postIndex);

          this.id = ''
          this.resetForm()

          this.data.data[postIndex] = response.data

          this.patch = false
        }).catch((error) => {
          console.log(error);
        })
    },

    // Supprime un post après confirmation utilisateur
    deletePost(id) {
      const comfirmation = window.confirm('Are you sure you want to delete this post?')
      if (comfirmation) {
        axios.delete(`posts/${id}`).then(() => {
          // Retire le post supprimé du tableau local
          this.data.data = this.data.data.filter((post) => post.id != id)
        }).catch((error) => console.log(error))
      }
    },
    resetForm() {
      // Remet les champs du formulaire à zéro et arrête l'état de chargement
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
  gap: 10px;
}
</style>
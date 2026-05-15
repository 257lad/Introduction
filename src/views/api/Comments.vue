<template>
    <h2>Comments</h2>
    <div v-for="item in comments.data" :key="item.id">
        <h2>{{ item.name }}</h2>
        <small>{{ item.email }}</small>
        <p>{{ item.body }}</p>
    </div>
</template>
<script>

export default {
    data() {
        return {
            comments: {}
        }
    },
    methods: {
        getComments() {
            axios.get('comments')
                .then((response) => {
                    this.comments = response
                    console.log(response);

                }).catch((error) => console.log(error))
        }
    },
    mounted() {
        this.getComments()
    }
}
</script>
<style></style>
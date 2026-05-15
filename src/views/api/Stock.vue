<template>
    <h2>Stock</h2>
    <div v-for="item in stocks" :key="item.id">
        <h2>{{ item.produit.nom }}</h2>
        <h3>Prix {{ item.prix_achat }}</h3>
        <p>{{ item.body }}</p>
    </div>
    <p class="error">{{ error.detail }}</p>
</template>
<script>

export default {
    data() {
        return {
            stocks: {},
            error: ''
        }
    },
    methods: {
        getStocks() {
            axios.get('stocks/')
                .then((response) => {
                    this.stocks = response.data.results
                    console.log(this.stocks);
                }).catch((error) => {
                    console.log(error)
                    this.error = error.response.data
                })
        }
    },
    mounted() {
        this.getStocks()
    }
}
</script>
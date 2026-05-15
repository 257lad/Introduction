<template>
    <div class="home">
        <header class="hero">
            <h1>NetConnect Pro</h1>
            <p>Fast, Reliable, Affordable Internet for Everyone</p>
            <button class="cta-button">Get Started Today</button>
        </header>

        <section class="features">
            <h2>Why Choose Us?</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <h3>⚡ Lightning Fast</h3>
                    <p>Speeds up to 1 Gbps with 99.9% uptime guarantee</p>
                </div>
                <div class="feature-card">
                    <h3>💰 Best Prices</h3>
                    <p>Competitive rates starting from just $29.99/month</p>
                </div>
                <div class="feature-card">
                    <h3>🎧 24/7 Support</h3>
                    <p>Round-the-clock customer support in multiple languages</p>
                </div>
                <div class="feature-card">
                    <h3>🔒 Secure</h3>
                    <p>Enterprise-grade security with free VPN protection</p>
                </div>
            </div>
        </section>

        <section class="products">
            <h2>Featured Products</h2>
            <p>Enhance your internet experience with our premium networking equipment</p>
            <div class="products-grid">
                <div class="product-card" v-for="product in featuredProducts" :key="product.id"
                    @click="viewProduct(product.id)">
                    <div class="product-image">
                        <span class="product-icon">{{ product.icon }}</span>
                    </div>
                    <h3>{{ product.name }}</h3>
                    <p class="product-description">{{ product.description }}</p>
                    <div class="product-price">${{ product.price }}</div>
                    <button class="view-details-btn">View Details</button>
                </div>
            </div>
            <div class="view-all-products">
                <router-link to="/products" class="view-all-btn">View All Products</router-link>
            </div>
        </section>

        <section class="stats">
            <div class="stat">
                <h3>2M+</h3>
                <p>Active Users</p>
            </div>
            <div class="stat">
                <h3>150+</h3>
                <p>Countries Served</p>
            </div>
            <div class="stat">
                <h3>500+</h3>
                <p>Network Partners</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            featuredProducts: [
                {
                    id: 1,
                    name: 'UltraSpeed Router Pro',
                    description: 'Next-gen WiFi 6 router with 8 antennas for maximum coverage',
                    price: '149.99',
                    icon: '📡'
                },
                {
                    id: 2,
                    name: 'Mesh WiFi System',
                    description: 'Whole-home coverage with 3-pack mesh nodes',
                    price: '299.99',
                    icon: '🏠'
                },
                {
                    id: 3,
                    name: 'Fiber Optic Cable Kit',
                    description: '100ft premium fiber optic cable with connectors',
                    price: '79.99',
                    icon: '🔌'
                },
                {
                    id: 4,
                    name: 'WiFi Range Extender',
                    description: 'Dual-band extender for eliminating dead zones',
                    price: '49.99',
                    icon: '📶'
                }
            ]
        }
    },
    methods: {
        viewProduct(productId) {
            // this.$router.push(`/product/${productId}`)
            this.$router.push({
                path: `/product/${productId}`,
                query: {
                    name: 'router',
                    price: 10000
                }
            })
        }
    }
}
</script>

<style lang="css" scoped>
.home {
    min-height: 100vh;
}

.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 80px 20px;
    text-align: center;
}

.hero h1 {
    font-size: 48px;
    margin-bottom: 20px;
}

.hero p {
    font-size: 20px;
    margin-bottom: 30px;
}

.cta-button {
    background-color: #ff6b6b;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.cta-button:hover {
    background-color: #ff5252;
}

.features {
    padding: 60px 20px;
    background-color: #f8f9fa;
}

.features h2 {
    text-align: center;
    font-size: 36px;
    margin-bottom: 40px;
    color: #333;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.feature-card {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.feature-card h3 {
    color: #667eea;
    font-size: 20px;
    margin-bottom: 15px;
}

.feature-card p {
    color: #666;
    line-height: 1.6;
}

.stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 60px 20px;
    text-align: center;
}

.stat h3 {
    font-size: 40px;
    margin-bottom: 10px;
}

.stat p {
    font-size: 16px;
}

.products {
    padding: 60px 20px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.products h2 {
    text-align: center;
    font-size: 36px;
    margin-bottom: 15px;
    color: #333;
}

.products>p {
    text-align: center;
    font-size: 18px;
    color: #666;
    margin-bottom: 50px;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto 40px;
}

.product-card {
    background: white;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.product-image {
    margin-bottom: 20px;
}

.product-icon {
    font-size: 48px;
}

.product-card h3 {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
}

.product-description {
    color: #666;
    font-size: 14px;
    margin-bottom: 15px;
    line-height: 1.5;
}

.product-price {
    font-size: 24px;
    font-weight: bold;
    color: #667eea;
    margin-bottom: 20px;
}

.view-details-btn {
    background: #667eea;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.view-details-btn:hover {
    background: #5a67d8;
}

.view-all-products {
    text-align: center;
}

.view-all-btn {
    display: inline-block;
    background: #ff6b6b;
    color: white;
    padding: 12px 30px;
    text-decoration: none;
    border-radius: 25px;
    font-weight: bold;
    transition: background-color 0.3s;
}

.view-all-btn:hover {
    background: #ff5252;
}
</style>
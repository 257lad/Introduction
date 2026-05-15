<template>
  <div class="product-details">
    <div v-if="product" class="product-container">
      <nav class="breadcrumb">
        <router-link to="/">Home</router-link> >
        <router-link to="/products">Products</router-link> >
        <span>{{ product.name }}</span>
      </nav>

      <div class="product-content">
        <div class="product-image-section">
          <div class="product-image">
            <span class="product-icon-large">{{ product.icon }}</span>
          </div>
          <div class="product-gallery">
            <div class="gallery-item active">
              <span class="gallery-icon">{{ product.icon }}</span>
            </div>
            <div class="gallery-item">
              <span class="gallery-icon">📦</span>
            </div>
            <div class="gallery-item">
              <span class="gallery-icon">🔧</span>
            </div>
          </div>
        </div>

        <div class="product-info">
          <h1>{{ product.name }}</h1>
          <div class="product-rating">
            <span class="stars">★★★★★</span>
            <span class="rating-text">(4.8/5 from 1,234 reviews)</span>
          </div>
          <div class="product-price">${{ product.price }}</div>
          <p class="product-description">{{ product.description }}</p>

          <div class="product-features">
            <h3>Key Features</h3>
            <ul>
              <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>

          <div class="product-specs">
            <h3>Specifications</h3>
            <div class="specs-grid">
              <div v-for="(value, key) in product.specifications" :key="key" class="spec-item">
                <span class="spec-label">{{ key }}:</span>
                <span class="spec-value">{{ value }}</span>
              </div>
            </div>
          </div>

          <div class="purchase-section">
            <div class="quantity-selector">
              <label>Quantity:</label>
              <button @click="decreaseQuantity" :disabled="quantity <= 1">-</button>
              <span>{{ quantity }}</span>
              <button @click="increaseQuantity">+</button>
            </div>
            <button class="add-to-cart-btn" @click="addToCart">
              Add to Cart - ${{ (product.price * quantity).toFixed(2) }}
            </button>
            <button class="buy-now-btn">Buy Now</button>
          </div>
        </div>
      </div>

      <div class="product-tabs">
        <div class="tab-buttons">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="{ active: activeTab === tab.id }"
            @click="activeTab = tab.id"
          >
            {{ tab.name }}
          </button>
        </div>

        <div class="tab-content">
          <div v-if="activeTab === 'description'" class="tab-pane">
            <h3>Product Description</h3>
            <p>{{ product.longDescription }}</p>
          </div>

          <div v-if="activeTab === 'reviews'" class="tab-pane">
            <h3>Customer Reviews</h3>
            <div class="reviews">
              <div v-for="review in product.reviews" :key="review.id" class="review">
                <div class="review-header">
                  <span class="review-stars">{{ '★'.repeat(review.rating) }}</span>
                  <span class="review-author">{{ review.author }}</span>
                  <span class="review-date">{{ review.date }}</span>
                </div>
                <p class="review-text">{{ review.text }}</p>
              </div>
            </div>
          </div>

          <div v-if="activeTab === 'shipping'" class="tab-pane">
            <h3>Shipping & Returns</h3>
            <div class="shipping-info">
              <div class="shipping-item">
                <h4>🚚 Free Shipping</h4>
                <p>Free standard shipping on orders over $50</p>
              </div>
              <div class="shipping-item">
                <h4>⚡ Fast Delivery</h4>
                <p>2-3 business days delivery within continental US</p>
              </div>
              <div class="shipping-item">
                <h4>🔄 Easy Returns</h4>
                <p>30-day return policy with free return shipping</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="related-products">
        <h3>You Might Also Like</h3>
        <div class="related-grid">
          <div
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            class="related-card"
            @click="viewProduct(relatedProduct.id)"
          >
            <span class="related-icon">{{ relatedProduct.icon }}</span>
            <h4>{{ relatedProduct.name }}</h4>
            <p class="related-price">${{ relatedProduct.price }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="product-not-found">
      <h2>Product Not Found</h2>
      <p>The product you're looking for doesn't exist.</p>
      <router-link to="/" class="back-home-btn">Back to Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  data() {
    return {
      quantity: 1,
      activeTab: 'description',
      tabs: [
        { id: 'description', name: 'Description' },
        { id: 'reviews', name: 'Reviews' },
        { id: 'shipping', name: 'Shipping' }
      ],
      products: [
        {
          id: 1,
          name: 'UltraSpeed Router Pro',
          description: 'Next-gen WiFi 6 router with 8 antennas for maximum coverage',
          longDescription: 'Experience blazing-fast internet speeds with our UltraSpeed Router Pro. Featuring the latest WiFi 6 technology, this router delivers speeds up to 9.6 Gbps with 8 high-performance antennas for maximum coverage and minimal dead zones. Perfect for gaming, streaming 4K content, and connecting multiple devices simultaneously.',
          price: '149.99',
          icon: '📡',
          features: [
            'WiFi 6 Technology',
            '8 High-Performance Antennas',
            'Speeds up to 9.6 Gbps',
            'MU-MIMO Support',
            'Parental Controls',
            'Guest Network'
          ],
          specifications: {
            'WiFi Standard': 'WiFi 6 (802.11ax)',
            'Max Speed': '9.6 Gbps',
            'Antennas': '8 External',
            'Ports': '4 Gigabit LAN + 1 WAN',
            'Security': 'WPA3 Encryption',
            'Dimensions': '11.6 x 7.5 x 1.8 inches'
          },
          reviews: [
            {
              id: 1,
              author: 'John D.',
              rating: 5,
              date: '2024-01-15',
              text: 'Amazing router! My internet speeds have doubled and the coverage is excellent throughout my house.'
            },
            {
              id: 2,
              author: 'Sarah M.',
              rating: 5,
              date: '2024-01-10',
              text: 'Easy to set up and the app interface is intuitive. Highly recommend for anyone looking to upgrade their home network.'
            }
          ]
        },
        {
          id: 2,
          name: 'Mesh WiFi System',
          description: 'Whole-home coverage with 3-pack mesh nodes',
          longDescription: 'Eliminate WiFi dead zones with our advanced mesh WiFi system. This 3-pack provides seamless coverage for homes up to 6,000 square feet. Each node automatically optimizes connections and provides consistent speeds throughout your entire home.',
          price: '299.99',
          icon: '🏠',
          features: [
            'Seamless Mesh Coverage',
            '3-Pack System',
            'Auto-Optimization',
            'Easy App Control',
            'Voice Assistant Compatible',
            'Parental Controls'
          ],
          specifications: {
            'Coverage': 'Up to 6,000 sq ft',
            'Nodes': '3-Pack',
            'WiFi Standard': 'WiFi 6',
            'Max Speed': '12 Gbps',
            'Ports per Node': '2 Gigabit LAN',
            'Security': 'WPA3 Encryption'
          },
          reviews: [
            {
              id: 1,
              author: 'Mike R.',
              rating: 5,
              date: '2024-01-20',
              text: 'Finally got rid of all the dead zones in my house! The mesh system works perfectly.'
            }
          ]
        },
        {
          id: 3,
          name: 'Fiber Optic Cable Kit',
          description: '100ft premium fiber optic cable with connectors',
          longDescription: 'Professional-grade fiber optic cable kit for high-speed data transmission. Includes 100 feet of premium fiber optic cable with LC connectors for reliable, high-bandwidth connections.',
          price: '79.99',
          icon: '🔌',
          features: [
            '100ft Length',
            'LC Connectors',
            'High Bandwidth',
            'Low Attenuation',
            'Professional Grade',
            'Easy Installation'
          ],
          specifications: {
            'Length': '100 feet',
            'Connector Type': 'LC',
            'Fiber Type': 'Single-mode',
            'Bandwidth': '10 Gbps',
            'Attenuation': '<0.5 dB/km',
            'Jacket': 'PVC'
          },
          reviews: [
            {
              id: 1,
              author: 'TechPro',
              rating: 4,
              date: '2024-01-12',
              text: 'Great quality cable for the price. Easy to work with and reliable connections.'
            }
          ]
        },
        {
          id: 4,
          name: 'WiFi Range Extender',
          description: 'Dual-band extender for eliminating dead zones',
          longDescription: 'Extend your WiFi coverage with our dual-band range extender. Compatible with all WiFi routers, it eliminates dead zones and provides strong, reliable connections throughout your home or office.',
          price: '49.99',
          icon: '📶',
          features: [
            'Dual-Band Support',
            'Easy Setup',
            'Universal Compatibility',
            'Ethernet Port',
            'LED Signal Indicator',
            'Wall-Plug Design'
          ],
          specifications: {
            'WiFi Bands': '2.4GHz & 5GHz',
            'Max Speed': '1.2 Gbps',
            'Ports': '1 Gigabit Ethernet',
            'Security': 'WPA2/WPA3',
            'Power': 'Wall Plug',
            'Dimensions': '3.5 x 2.5 x 1.2 inches'
          },
          reviews: [
            {
              id: 1,
              author: 'Lisa K.',
              rating: 4,
              date: '2024-01-08',
              text: 'Simple setup and works great! No more weak WiFi in the backyard.'
            }
          ]
        }
      ]
    }
  },
  computed: {
    product() {
      const productId = parseInt(this.$route.params.id)
      console.log(this.$route.query.name)
      return this.products.find(p => p.id === productId)
    },
    relatedProducts() {
      if (!this.product) return []
      return this.products.filter(p => p.id !== this.product.id).slice(0, 3)
    }
  },
  methods: {
    increaseQuantity() {
      this.quantity++
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    addToCart() {
      alert(`Added ${this.quantity} ${this.product.name}(s) to cart!`)
    },
    viewProduct(productId) {
      this.$router.push(`/product/${productId}`)
    }
  }
}
</script>

<style lang="css" scoped>
.product-details {
  min-height: 100vh;
  padding: 20px;
  background-color: #f8f9fa;
}

.breadcrumb {
  margin-bottom: 30px;
  font-size: 14px;
  color: #666;
}

.breadcrumb a {
  color: #667eea;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.product-container {
  max-width: 1200px;
  margin: 0 auto;
}

.product-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

.product-image-section {
  text-align: center;
}

.product-image {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 60px;
  margin-bottom: 30px;
}

.product-icon-large {
  font-size: 120px;
}

.product-gallery {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.gallery-item {
  width: 60px;
  height: 60px;
  background: #f8f9fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid transparent;
}

.gallery-item.active {
  border-color: #667eea;
}

.gallery-icon {
  font-size: 24px;
}

.product-info h1 {
  font-size: 32px;
  color: #333;
  margin-bottom: 10px;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.stars {
  color: #ffd700;
  font-size: 16px;
}

.rating-text {
  color: #666;
  font-size: 14px;
}

.product-price {
  font-size: 36px;
  font-weight: bold;
  color: #667eea;
  margin-bottom: 20px;
}

.product-description {
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
}

.product-features, .product-specs {
  margin-bottom: 30px;
}

.product-features h3, .product-specs h3 {
  color: #333;
  font-size: 20px;
  margin-bottom: 15px;
}

.product-features ul {
  list-style: none;
  padding: 0;
}

.product-features li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  color: #555;
}

.product-features li:before {
  content: "✓";
  color: #667eea;
  font-weight: bold;
  margin-right: 10px;
}

.specs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.spec-label {
  font-weight: bold;
  color: #333;
}

.spec-value {
  color: #666;
}

.purchase-section {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 8px;
  margin-top: 30px;
}

.quantity-selector {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.quantity-selector label {
  font-weight: bold;
  color: #333;
}

.quantity-selector button {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.quantity-selector button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quantity-selector span {
  font-size: 18px;
  font-weight: bold;
  min-width: 30px;
  text-align: center;
}

.add-to-cart-btn, .buy-now-btn {
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 15px;
  transition: all 0.3s;
}

.add-to-cart-btn {
  background: #667eea;
  color: white;
}

.add-to-cart-btn:hover {
  background: #5a67d8;
}

.buy-now-btn {
  background: #ff6b6b;
  color: white;
}

.buy-now-btn:hover {
  background: #ff5252;
}

.product-tabs {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

.tab-buttons {
  display: flex;
  border-bottom: 1px solid #eee;
}

.tab-buttons button {
  padding: 20px 30px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
}

.tab-buttons button.active {
  color: #667eea;
  border-bottom-color: #667eea;
}

.tab-content {
  padding: 30px;
}

.tab-pane h3 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.tab-pane p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.reviews .review {
  border-bottom: 1px solid #eee;
  padding: 20px 0;
}

.reviews .review:last-child {
  border-bottom: none;
}

.review-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
}

.review-stars {
  color: #ffd700;
}

.review-author {
  font-weight: bold;
  color: #333;
}

.review-date {
  color: #666;
  font-size: 14px;
}

.review-text {
  color: #555;
  line-height: 1.6;
}

.shipping-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.shipping-item {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.shipping-item h4 {
  color: #333;
  margin-bottom: 10px;
}

.shipping-item p {
  color: #666;
  line-height: 1.5;
}

.related-products {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.related-products h3 {
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.related-card {
  text-align: center;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.related-card:hover {
  border-color: #667eea;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.related-icon {
  font-size: 32px;
  display: block;
  margin-bottom: 10px;
}

.related-card h4 {
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
}

.related-price {
  font-weight: bold;
  color: #667eea;
}

.product-not-found {
  text-align: center;
  padding: 80px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

.product-not-found h2 {
  color: #333;
  font-size: 32px;
  margin-bottom: 15px;
}

.product-not-found p {
  color: #666;
  font-size: 18px;
  margin-bottom: 30px;
}

.back-home-btn {
  display: inline-block;
  background: #667eea;
  color: white;
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.back-home-btn:hover {
  background: #5a67d8;
}

@media (max-width: 768px) {
  .product-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .product-info h1 {
    font-size: 24px;
  }

  .product-price {
    font-size: 28px;
  }

  .specs-grid {
    grid-template-columns: 1fr;
  }

  .tab-buttons {
    flex-wrap: wrap;
  }

  .tab-buttons button {
    flex: 1;
    min-width: 120px;
  }

  .related-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
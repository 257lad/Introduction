<template>
  <div class="products-page">
    <header class="products-header">
      <h1>Our Products</h1>
      <p>Premium networking equipment for your home and business</p>
    </header>

    <div class="products-container">
      <aside class="filters-sidebar">
        <h3>Filter Products</h3>

        <div class="filter-section">
          <h4>Category</h4>
          <label v-for="category in categories" :key="category.id" class="filter-option">
            <input
              type="checkbox"
              :value="category.id"
              v-model="selectedCategories"
              @change="filterProducts"
            />
            {{ category.name }}
          </label>
        </div>

        <div class="filter-section">
          <h4>Price Range</h4>
          <div class="price-range">
            <input
              type="range"
              min="0"
              max="500"
              v-model="maxPrice"
              @input="filterProducts"
              class="price-slider"
            />
            <div class="price-display">
              <span>$0</span>
              <span>${{ maxPrice }}</span>
            </div>
          </div>
        </div>

        <div class="filter-section">
          <h4>Sort By</h4>
          <select v-model="sortBy" @change="sortProducts" class="sort-select">
            <option value="name">Name (A-Z)</option>
            <option value="price-low">Price (Low to High)</option>
            <option value="price-high">Price (High to Low)</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </aside>

      <main class="products-main">
        <div class="products-controls">
          <p class="results-count">{{ filteredProducts.length }} products found</p>
          <div class="view-toggle">
            <button
              :class="{ active: viewMode === 'grid' }"
              @click="viewMode = 'grid'"
            >
              Grid
            </button>
            <button
              :class="{ active: viewMode === 'list' }"
              @click="viewMode = 'list'"
            >
              List
            </button>
          </div>
        </div>

        <div :class="['products-grid', { 'list-view': viewMode === 'list' }]">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            :class="['product-card', { 'list-item': viewMode === 'list' }]"
            @click="viewProduct(product.id)"
          >
            <div class="product-image">
              <span class="product-icon">{{ product.icon }}</span>
            </div>
            <div class="product-info">
              <h3>{{ product.name }}</h3>
              <div class="product-rating">
                <span class="stars">{{ '★'.repeat(product.rating) }}</span>
                <span class="rating-count">({{ product.reviewCount }})</span>
              </div>
              <p class="product-description">{{ product.description }}</p>
              <div class="product-price">${{ product.price }}</div>
              <div class="product-features">
                <span v-for="feature in product.keyFeatures" :key="feature" class="feature-tag">
                  {{ feature }}
                </span>
              </div>
              <button class="view-details-btn" @click.stop="viewProduct(product.id)">
                View Details
              </button>
            </div>
          </div>
        </div>

        <div v-if="filteredProducts.length === 0" class="no-products">
          <h3>No products found</h3>
          <p>Try adjusting your filters to see more products.</p>
          <button @click="clearFilters" class="clear-filters-btn">Clear Filters</button>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      viewMode: 'grid',
      sortBy: 'name',
      maxPrice: 500,
      selectedCategories: [],
      categories: [
        { id: 'routers', name: 'Routers' },
        { id: 'mesh', name: 'Mesh Systems' },
        { id: 'cables', name: 'Cables' },
        { id: 'extenders', name: 'Range Extenders' },
        { id: 'accessories', name: 'Accessories' }
      ],
      allProducts: [
        {
          id: 1,
          name: 'UltraSpeed Router Pro',
          description: 'Next-gen WiFi 6 router with 8 antennas for maximum coverage and blazing speeds',
          price: '149.99',
          icon: '📡',
          rating: 5,
          reviewCount: 1234,
          category: 'routers',
          keyFeatures: ['WiFi 6', '8 Antennas', '9.6 Gbps']
        },
        {
          id: 2,
          name: 'Mesh WiFi System',
          description: 'Whole-home coverage with 3-pack mesh nodes for seamless connectivity',
          price: '299.99',
          icon: '🏠',
          rating: 5,
          reviewCount: 856,
          category: 'mesh',
          keyFeatures: ['3-Pack', '6,000 sq ft', 'WiFi 6']
        },
        {
          id: 3,
          name: 'Fiber Optic Cable Kit',
          description: '100ft premium fiber optic cable with LC connectors for high-speed data transmission',
          price: '79.99',
          icon: '🔌',
          rating: 4,
          reviewCount: 432,
          category: 'cables',
          keyFeatures: ['100ft', 'LC Connectors', '10 Gbps']
        },
        {
          id: 4,
          name: 'WiFi Range Extender',
          description: 'Dual-band extender for eliminating dead zones and extending WiFi coverage',
          price: '49.99',
          icon: '📶',
          rating: 4,
          reviewCount: 678,
          category: 'extenders',
          keyFeatures: ['Dual-Band', '1.2 Gbps', 'Easy Setup']
        },
        {
          id: 5,
          name: 'Gaming Router Elite',
          description: 'Professional gaming router with low latency and advanced QoS features',
          price: '199.99',
          icon: '🎮',
          rating: 5,
          reviewCount: 567,
          category: 'routers',
          keyFeatures: ['Gaming Optimized', 'Low Latency', 'QoS']
        },
        {
          id: 6,
          name: 'Network Switch 8-Port',
          description: '8-port Gigabit Ethernet switch for expanding your network connections',
          price: '89.99',
          icon: '🔀',
          rating: 4,
          reviewCount: 345,
          category: 'accessories',
          keyFeatures: ['8 Ports', 'Gigabit', 'Plug & Play']
        },
        {
          id: 7,
          name: 'WiFi 6 Mesh Router',
          description: 'Single router mesh system with WiFi 6 for future-proof networking',
          price: '179.99',
          icon: '🌐',
          rating: 5,
          reviewCount: 789,
          category: 'routers',
          keyFeatures: ['WiFi 6', 'Mesh Ready', 'Future Proof']
        },
        {
          id: 8,
          name: 'Ethernet Cable Cat6',
          description: '50ft Cat6 Ethernet cable for high-speed wired connections',
          price: '24.99',
          icon: '🔗',
          rating: 4,
          reviewCount: 234,
          category: 'cables',
          keyFeatures: ['Cat6', '50ft', '1 Gbps']
        }
      ]
    }
  },
  computed: {
    filteredProducts() {
      let products = this.allProducts.filter(product => {
        const priceMatch = parseFloat(product.price) <= this.maxPrice
        const categoryMatch = this.selectedCategories.length === 0 ||
                             this.selectedCategories.includes(product.category)
        return priceMatch && categoryMatch
      })

      // Sort products
      switch (this.sortBy) {
        case 'price-low':
          products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
          break
        case 'price-high':
          products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
          break
        case 'rating':
          products.sort((a, b) => b.rating - a.rating)
          break
        default: // name
          products.sort((a, b) => a.name.localeCompare(b.name))
      }

      return products
    }
  },
  methods: {
    filterProducts() {
      // Filtering is handled by computed property
    },
    sortProducts() {
      // Sorting is handled by computed property
    },
    clearFilters() {
      this.selectedCategories = []
      this.maxPrice = 500
      this.sortBy = 'name'
    },
    viewProduct(productId) {
      this.$router.push(`/product/${productId}`)
    }
  }
}
</script>

<style lang="css" scoped>
.products-page {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.products-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.products-header h1 {
  font-size: 44px;
  margin-bottom: 15px;
}

.products-header p {
  font-size: 18px;
}

.products-container {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
}

.filters-sidebar {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  height: fit-content;
}

.filters-sidebar h3 {
  color: #333;
  font-size: 24px;
  margin-bottom: 30px;
  border-bottom: 2px solid #667eea;
  padding-bottom: 10px;
}

.filter-section {
  margin-bottom: 30px;
}

.filter-section h4 {
  color: #333;
  font-size: 18px;
  margin-bottom: 15px;
}

.filter-option {
  display: block;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 14px;
}

.filter-option input {
  margin-right: 8px;
}

.price-range {
  padding: 20px 0;
}

.price-slider {
  width: 100%;
  margin-bottom: 10px;
}

.price-display {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
}

.sort-select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.products-main {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.products-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.results-count {
  color: #666;
  font-size: 16px;
}

.view-toggle {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
}

.view-toggle button {
  padding: 8px 16px;
  border: none;
  background: white;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.view-toggle button.active {
  background: #667eea;
  color: white;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.products-grid.list-view {
  grid-template-columns: 1fr;
  gap: 20px;
}

.product-card {
  background: white;
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.product-card:hover {
  border-color: #667eea;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.product-card.list-item {
  display: flex;
  align-items: center;
  padding: 20px;
}

.product-card.list-item .product-image {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  margin-right: 20px;
}

.product-card.list-item .product-info {
  flex: 1;
}

.product-image {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-card:not(.list-item) .product-image {
  border-bottom: 1px solid #eee;
}

.product-icon {
  font-size: 48px;
}

.product-info {
  padding: 20px;
}

.product-info h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.stars {
  color: #ffd700;
  font-size: 14px;
}

.rating-count {
  color: #666;
  font-size: 12px;
}

.product-description {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 15px;
}

.product-price {
  font-size: 20px;
  font-weight: bold;
  color: #667eea;
  margin-bottom: 15px;
}

.product-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.feature-tag {
  background: #f0f0f0;
  color: #666;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
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
  width: 100%;
}

.view-details-btn:hover {
  background: #5a67d8;
}

.no-products {
  text-align: center;
  padding: 60px 20px;
  color: #666;
}

.no-products h3 {
  font-size: 24px;
  margin-bottom: 15px;
}

.clear-filters-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;
}

.clear-filters-btn:hover {
  background: #5a67d8;
}

@media (max-width: 1024px) {
  .products-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .filters-sidebar {
    order: 2;
  }

  .products-main {
    order: 1;
  }
}

@media (max-width: 768px) {
  .products-controls {
    flex-direction: column;
    gap: 15px;
    align-items: stretch;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .products-grid.list-view .product-card {
    flex-direction: column;
    text-align: center;
  }

  .products-grid.list-view .product-card .product-image {
    width: 100%;
    height: 150px;
    margin-right: 0;
    margin-bottom: 15px;
  }
}
</style>
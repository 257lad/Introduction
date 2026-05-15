<template>
  <div class="services">
    <header class="services-header">
      <h1>Our Services</h1>
      <p>Comprehensive Internet Solutions for Every Need</p>
    </header>

    <section class="services-content">
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">🏠</div>
          <h3>Home Internet</h3>
          <p class="price">From $29.99/month</p>
          <p class="description">Perfect for everyday browsing, streaming, and gaming</p>
          <ul class="features">
            <li>Up to 500 Mbps speeds</li>
            <li>Unlimited data</li>
            <li>Free router</li>
            <li>Free modem</li>
            <li>24/7 support</li>
          </ul>
        </div>

        <div class="service-card featured">
          <div class="service-icon">🏢</div>
          <h3>Business Internet</h3>
          <p class="price">From $79.99/month</p>
          <p class="description">Enterprise-grade solutions for your business</p>
          <ul class="features">
            <li>Up to 1 Gbps speeds</li>
            <li>Unlimited data</li>
            <li>Dedicated IP address</li>
            <li>SLA guarantee</li>
            <li>Priority support</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">📱</div>
          <h3>Mobile Data</h3>
          <p class="price">From $19.99/month</p>
          <p class="description">High-speed 5G mobile connectivity on-the-go</p>
          <ul class="features">
            <li>5G network coverage</li>
            <li>Flexible data plans</li>
            <li>International roaming</li>
            <li>No contracts</li>
            <li>Family plans available</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">🔒</div>
          <h3>VPN & Security</h3>
          <p class="price">Free with all plans</p>
          <p class="description">Protect your online privacy and security</p>
          <ul class="features">
            <li>Military-grade encryption</li>
            <li>50+ VPN locations</li>
            <li>Ad blocker</li>
            <li>Malware protection</li>
            <li>Always on</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">☁️</div>
          <h3>Cloud Storage</h3>
          <p class="price">From $9.99/month</p>
          <p class="description">Secure cloud storage for your files</p>
          <ul class="features">
            <li>Up to 2TB storage</li>
            <li>Auto-sync across devices</li>
            <li>Advanced sharing options</li>
            <li>Version history</li>
            <li>24/7 support</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">🎮</div>
          <h3>Gaming Network</h3>
          <p class="price">From $49.99/month</p>
          <p class="description">Optimized for seamless gaming experience</p>
          <ul class="features">
            <li>Ultra-low latency</li>
            <li>800+ Mbps speeds</li>
            <li>Gaming VPN included</li>
            <li>DDoS protection</li>
            <li>24/7 tech support</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="comparison">
      <h2>Service Comparison</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Home Internet</th>
            <th>Business Internet</th>
            <th>Mobile Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Max Speed</td>
            <td>500 Mbps</td>
            <td>1 Gbps</td>
            <td>300 Mbps</td>
          </tr>
          <tr>
            <td>Data Limit</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
            <td>Flexible</td>
          </tr>
          <tr>
            <td>Support</td>
            <td>24/7 Standard</td>
            <td>24/7 Priority</td>
            <td>24/7 Standard</td>
          </tr>
          <tr>
            <td>SLA</td>
            <td>Best Effort</td>
            <td>99.9% Uptime</td>
            <td>Best Effort</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style lang="css" scoped>
.services {
  min-height: 100vh;
}

.services-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.services-header h1 {
  font-size: 44px;
  margin-bottom: 15px;
}

.services-header p {
  font-size: 18px;
}

.services-content {
  padding: 60px 20px;
  background-color: #f8f9fa;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.service-card {
  background: white;
  padding: 40px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.service-card.featured {
  border: 3px solid #667eea;
  transform: scale(1.05);
}

.service-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.service-card h3 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.price {
  font-size: 20px;
  color: #667eea;
  font-weight: bold;
  margin-bottom: 10px;
}

.description {
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
}

.features {
  list-style: none;
  padding: 0;
  text-align: left;
}

.features li {
  color: #555;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.features li:last-child {
  border-bottom: none;
}

.comparison {
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
}

.comparison h2 {
  text-align: center;
  font-size: 36px;
  color: #333;
  margin-bottom: 40px;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.comparison-table thead {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.comparison-table th {
  padding: 20px;
  text-align: left;
  font-weight: bold;
}

.comparison-table td {
  padding: 20px;
  border-bottom: 1px solid #eee;
  color: #555;
}

.comparison-table tbody tr:hover {
  background-color: #f8f9fa;
}
</style>
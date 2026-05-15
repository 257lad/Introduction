<template>
  <div class="about">
    <header class="about-header">
      <h1>About NetConnect Pro</h1>
      <p>Revolutionizing Internet Access Worldwide</p>
    </header>

    <section class="about-content">
      <div class="about-section">
        <h2>Our Story</h2>
        <p>
          Founded in 2015, NetConnect Pro started with a simple mission: to make high-speed internet 
          accessible and affordable for everyone. What began as a small regional provider has grown into 
          a global network serving millions of customers across 150+ countries.
        </p>
        <p>
          Our founders believed that internet access should be a right, not a luxury. Today, we continue 
          to invest in cutting-edge technology and infrastructure to deliver the fastest and most reliable 
          service to our customers.
        </p>
      </div>

      <div class="about-section">
        <h2>Our Mission</h2>
        <p>
          To provide world-class internet connectivity with exceptional customer service while maintaining 
          the highest standards of security and privacy.
        </p>
      </div>

      <div class="about-section">
        <h2>Our Values</h2>
        <ul class="values-list">
          <li><strong>Innovation:</strong> We constantly innovate to stay ahead in technology</li>
          <li><strong>Reliability:</strong> 99.9% uptime is our promise to you</li>
          <li><strong>Transparency:</strong> No hidden fees, honest pricing</li>
          <li><strong>Sustainability:</strong> Green initiatives for a better future</li>
          <li><strong>Community:</strong> Giving back to the communities we serve</li>
        </ul>
      </div>

      <div class="about-section">
        <h2>Our Team</h2>
        <p>
          Our team consists of over 5,000 dedicated professionals working across multiple continents. 
          From engineers to customer support specialists, every team member is committed to delivering 
          excellence. We invest heavily in employee training and development to ensure we provide the best service.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="css" scoped>
.about {
  min-height: 100vh;
}

.about-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.about-header h1 {
  font-size: 44px;
  margin-bottom: 15px;
}

.about-header p {
  font-size: 18px;
}

.about-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 20px;
}

.about-section {
  margin-bottom: 50px;
}

.about-section h2 {
  color: #667eea;
  font-size: 28px;
  margin-bottom: 20px;
}

.about-section p {
  color: #555;
  line-height: 1.8;
  font-size: 16px;
  margin-bottom: 15px;
}

.values-list {
  list-style: none;
  padding: 0;
}

.values-list li {
  color: #555;
  font-size: 16px;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  line-height: 1.6;
}

.values-list li:last-child {
  border-bottom: none;
}

.values-list strong {
  color: #764ba2;
}
</style>
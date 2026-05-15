<template>
  <div class="not-found">
    <div class="error-container">
      <div class="error-code">404</div>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <p>It might have been moved, deleted, or you entered the wrong URL.</p>

      <div class="error-actions">
        <router-link to="/" class="btn-primary">
          Go Home
        </router-link>
        <router-link to="/services" class="btn-secondary">
          View Services
        </router-link>
      </div>

      <div class="error-suggestions">
        <h3>Popular Pages:</h3>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/services">Our Services</router-link></li>
        </ul>
      </div>
    </div>

    <div class="error-illustration">
      <div class="signal-bars">
        <div class="bar bar-1"></div>
        <div class="bar bar-2"></div>
        <div class="bar bar-3"></div>
        <div class="bar bar-4"></div>
        <div class="bar bar-5"></div>
      </div>
      <div class="no-signal">No Signal</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="css" scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
}

.error-container {
  text-align: center;
  max-width: 600px;
  margin-right: 60px;
}

.error-code {
  font-size: 120px;
  font-weight: bold;
  margin-bottom: 20px;
  opacity: 0.8;
  background: linear-gradient(45deg, #ff6b6b, #ffa500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.not-found h1 {
  font-size: 48px;
  margin-bottom: 20px;
  color: white;
}

.not-found p {
  font-size: 18px;
  margin-bottom: 15px;
  opacity: 0.9;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 40px 0;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  padding: 12px 30px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: #ff6b6b;
  color: white;
  border: 2px solid #ff6b6b;
}

.btn-primary:hover {
  background: #ff5252;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
}

.error-suggestions {
  margin-top: 40px;
}

.error-suggestions h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: white;
}

.error-suggestions ul {
  list-style: none;
  padding: 0;
}

.error-suggestions li {
  margin: 8px 0;
}

.error-suggestions a {
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.error-suggestions a:hover {
  opacity: 1;
  text-decoration: underline;
}

.error-illustration {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.signal-bars {
  display: flex;
  align-items: flex-end;
  height: 80px;
  margin-bottom: 20px;
}

.bar {
  width: 8px;
  margin: 0 2px;
  background: #ff6b6b;
  border-radius: 2px;
  animation: signal 1.5s ease-in-out infinite;
}

.bar-1 { height: 20px; animation-delay: 0s; }
.bar-2 { height: 35px; animation-delay: 0.1s; }
.bar-3 { height: 50px; animation-delay: 0.2s; }
.bar-4 { height: 65px; animation-delay: 0.3s; }
.bar-5 { height: 80px; animation-delay: 0.4s; }

@keyframes signal {
  0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
  50% { opacity: 1; transform: scaleY(1); }
}

.no-signal {
  font-size: 18px;
  opacity: 0.7;
  font-weight: bold;
}

@media (max-width: 768px) {
  .not-found {
    flex-direction: column;
    text-align: center;
  }

  .error-container {
    margin-right: 0;
    margin-bottom: 40px;
  }

  .error-code {
    font-size: 80px;
  }

  .not-found h1 {
    font-size: 32px;
  }

  .error-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary, .btn-secondary {
    width: 200px;
  }
}
</style>
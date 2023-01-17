<template>
<div id="app">
  <Navigation />
  <router-view class="animated fadeIn" />
  <div id="arrowUpIconContainer" class="">
    <a href="#"><img src="@/assets/arrowUp.png" alt="topOfPage"></a>
  </div>
</div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0 8px 8px 8px;
}

#arrowUpIconContainer {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 0 1rem 1rem 0;
}

#arrowUpIconContainer>a>img {
  width: 1.5rem;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border-radius: 10px;
  /* margin: 30px auto 0 auto; */
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}

p {
  padding: 15px;
}

.page {
  padding: 4em 1rem 0 1rem;
}

@media (min-width: 650px) {
  .resHeaders {
    margin: 0 calc(25% - 10px);
  }
}

.animated {
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@media (print),
(prefers-reduced-motion: reduce) {
  .animated {
    -webkit-animation-duration: 1.5ms !important;
    animation-duration: 1.5ms !important;
    -webkit-transition-duration: 1.5ms !important;
    transition-duration: 1.5ms !important;
    -webkit-animation-iteration-count: 1 !important;
    animation-iteration-count: 1 !important;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}
</style>

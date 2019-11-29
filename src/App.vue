<template>
<div id="app">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link>
  </div>
  <transition name="router-anim">
    <router-view />
  </transition>
</div>
</template>

<style>
/*@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";*/

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border-radius: 10px;
  margin: 50px auto 0 auto;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.page {
  position: fixed;
  width: inherit;
}

.router-anim-enter-active,
.fade-enter-active {
  animation: fadeIn 1.2s;
  animation-delay: .8s;
  opacity: 0;
}

.router-anim-leave-active,
.fade-leave-active {
  animation: fadeOut 1.2s;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
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
</style>

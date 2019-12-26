<template>
<div id="app">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <!--|
    <router-link to="/contact">Contact</router-link>-->
  </div>
  <transition name="router-anim">
    <router-view />
  </transition>
  <Footer header1="Contact & Projects" url='https://b5w5u1jr79.execute-api.us-east-1.amazonaws.com/Dev' />
</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  name: 'app',
  components: {
    Footer
  },
  mounted: function() {
    //console.log(this.$route.currentRoute)
    this.adjustFooter("home");
  },
  updated: async function() {
    //console.log(this.$route);
    await this.wait(1000); //waits for transition
    this.adjustFooter(this.$route.name);
  },
  methods: {
    adjustFooter: function(page) {
      let footer = document.getElementById("footer");
      let currentPageLen;
      let offset = 80;
      if (document.getElementById(page)) {
        currentPageLen = document.getElementById(page).clientHeight + offset;
        footer.style.top = currentPageLen + "px";
      }
    },
    wait: function(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
}
</script>

<style>
/*@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";*/
#footer {
  /*Figure out how to dynamically determine top*/
  top: 900px;
  width: 100%;
  position: absolute;
  border-top: 1px solid #2c3e50;
  padding: 0 0 15px 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border-radius: 10px;
  margin: 30px auto 0 auto;
}

#nav {
  position: fixed;
  margin-top: -10px;
  width: 100%;
  padding: 10px 0 10px 0;
  z-index: 99;
  background: #F8F8F8;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

p {
  padding: 15px;
}

.page {
  position: absolute;
  top: 50px;
  width: inherit;
  display: block;
  padding: 15px 50px 0 50px;
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

<template>
<div id="app">
  <div id="nav">
    <router-link to="/"> Home </router-link> |
    <router-link id="AboutLink" to="/about"> About </router-link>
    <!--|
    <router-link to="/contact">Contact</router-link>-->
  </div>
  <router-view class="animated fadeIn" />
  <!--<Footer header1="Contact & Projects" url='https://b5w5u1jr79.execute-api.us-east-1.amazonaws.com/Dev' />-->
</div>
</template>

<script>
//import Footer from '@/components/Footer.vue'
export default {
  name: 'app',
  components: {
    //Footer
  },
  mounted: function() {
    //console.log(this.$route.currentRoute)
    //this.adjustFooter("home");
  }
  /*,
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
    }*/
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

/* #footer {
  top: 900px;
  width: 100%;
  position: absolute;
  border-top: 1px solid #2c3e50;
  padding: 0 0 15px 0;
} */

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
  left: 0;
  right: 0;
  z-index: 99;
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
  padding: 15px 1rem 0 1rem;
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

/* @keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
} */

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
</style>

<template>
<div id="app">
  <div id="nav">
    <router-link to="/"> Home </router-link> |
    <router-link id="AboutLink" to="/about"> About </router-link>
    <!--|
    <router-link to="/contact">Contact</router-link>-->
  </div>
  <router-view class="animated fadeIn" />
  <div id="arrowUpIconContainer" class="">
    <a href="#"><img src="@/assets/arrowUp.png" alt="topOfPage"></a>
  </div>
</div>
</template>

<script>
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

#nav {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 99;
  padding: 1rem 0;
  background-color: #2c3e50;
}

#nav>a {
  color: white;
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

<template>
    <div>
        <div class="nav" v-if="!isMobile">
            <router-link to="/"> Home </router-link>
            <!-- <router-link to="/experience"> Experience </router-link> -->
            <router-link to="/education"> Education </router-link>
            <router-link to="/projects"> Projects </router-link>
            <router-link to="/services"> Services </router-link>
        </div>
        <div class="nav dropdown" v-else-if="isMobile" @click="toggleMenu">
            <button class="dropbtn">Menu</button>
            <div :class="{ 'dropdown-content': true, 'dropdown-content_pressed': isMenuOpen }">
                <router-link to="/"> Home </router-link>
                <!-- <router-link to="/experience"> Experience </router-link> -->
                <router-link to="/education"> Education </router-link>
                <router-link to="/projects"> Projects </router-link>
                <router-link to="/services"> Services </router-link>
            </div>
        </div>
        
    </div>
  
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            isMobile: false,
            isMenuOpen: false
        }
    },
    beforeMount() {
        this.setPlatform()
    },
    methods: {
        setPlatform() {
            this.isMobile = navigator.userAgent.toLowerCase().match(/mobile/i)
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        }
    }
}
</script>

<style scoped>
.nav {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 5;
  padding: 1rem 0;
  background-color: #2c3e50;
}

.nav>a {
  color: white;
  margin: 0 0.5em;
}

.nav a.router-link-exact-active {
  color: #42b983;
}

/* ###### Mobile ##### */

.dropdown {
    display: inline-block;
}

.dropbtn {
  background-color: transparent;
  color: white;
  float: right;
  margin-right: 1em;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 6;
}

.dropdown-content_pressed {
  display: block;
  right: 1em;
  margin-top: 3em;
}

.dropdown-content a {
  color: #2c3e50;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1
}

/* ################# */
</style>
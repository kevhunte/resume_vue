<template>
<div class="home page">
  <h1>Creator. Explorer. Engineer</h1>
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div class="imageCycle slider1">
    <transition-group name="fade">
      <div v-for="i in [currentNumber]" :key="i">
        <img @click="next" @mouseover="stopRotation" @mouseout="startRotation" :src="currentImg" alt="code snippet">
      </div>
    </transition-group>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <div class="imageCycle slider2">
    <transition-group name="fade">
      <div v-for="i in [currentNumber]" :key="i+1">
        <img @click="next" @mouseover="stopRotation" @mouseout="startRotation" :src="currentImg2" alt="code snippet">
      </div>
    </transition-group>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>
</template>

<script>
// @ is an alias to /src
//import ImageCycle from '@/components/ImgCycle.vue'

export default {
  name: 'home',
  components: {
    //ImageCycle
  },
  data() {
    return {
      images: [ //different arrays for each slider. All same length for variable simplicity
        require("../assets/js_sample.png"),
        require("../assets/cs_sample3.png"),
        require("../assets/cs_sample.png")
      ],
      images2: [ //different arrays for each slider
        require("../assets/PythonAWS.png"),
        require("../assets/pythonScripting.png"),
        require("../assets/pythonSelenium.png")
      ],
      currentNumber: 0,
      timer: null
    };
  },
  mounted: function() {
    //get image path variables from parent - require("#") - and add here to this.images array
    this.startRotation();
  },
  methods: {
    startRotation: function() {
      let waitInSecs = 7; //toggle this
      this.timer = setInterval(this.next, waitInSecs * 1000);
    },
    stopRotation: function() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    next: function() {
      this.currentNumber = (this.currentNumber + 1) % this.images.length; //+=1
    },
    prev: function() {
      this.currentNumber = (this.currentNumber - 1) % this.images.length; //-= 1
    }
  },
  computed: {
    currentImg: function() {
      let currentIndex = Math.abs(this.currentNumber) % this.images.length;
      return this.images[currentIndex];
    },
    currentImg2: function() {
      let currentIndex = Math.abs(this.currentNumber) % this.images2.length;
      return this.images2[currentIndex];
    }
  }
};
</script>

<style>
.home {
  height: 100%;
}

.imageCycle {
  /*Shared class between sliders*/
  width: 100%;
  height: 200px;
  float: none;
  padding-left: 10px;
  padding-right: 10px;
}

img {
  /*Centers images within containers*/
  display: block;
  margin: 0 auto 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  max-height: 200px;
}
</style>

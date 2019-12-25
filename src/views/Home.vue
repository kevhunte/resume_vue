<template>
<div class="home page" id="home">
  <h1>Creator. Explorer. Engineer</h1>
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div class="imageCycle slider1">
    <transition-group name="fade">
      <div v-for="i in [currentNumber]" :key="i">
        <img class="home-images" @click="next" @mouseover="stopRotation" @mouseout="startRotation" :src="currentImg" alt="code snippet">
      </div>
    </transition-group>
  </div>
  <p>
    From compiled to interpreted, picking the best framework in a given language will greatly speed up development time.
    Java, C#, Python, and JavaScript are some of the most versatile languages that can used for a wide range of projects.
    Above are some of the projects I have worked on across different languages. Hover over pictures to pause them,
    and click on them to cycle through.
  </p>
  <div class="imageCycle slider2">
    <transition-group name="fade">
      <div v-for="i in [currentNumber]" :key="i+1">
        <img class="home-images" @click="next" @mouseover="stopRotation" @mouseout="startRotation" :src="currentImg2" alt="code snippet">
      </div>
    </transition-group>
  </div>
  <p>
    Above are some projects across different domains:
    Object-Oriented Design, functional programming, UI and service automation, and Server-Side development.
    As time grows, so will the projects that I have to share.
  </p>
</div>
</template>

<script>
//import ImageCycle from '@/components/ImgCycle.vue'

export default {
  name: 'home',
  components: {
    //ImageCycle
  },
  data() {
    return {
      images: [ //different arrays for each slider. All same length for variable simplicity
        require("../assets/js_snippet.png"),
        require("../assets/js_snippet2.png"),
        require("../assets/maximize.png"),
        require("../assets/cs_sample.png")
      ],
      images2: [ //different arrays for each slider
        require("../assets/PythonAWS.png"),
        require("../assets/pythonOOP.png"),
        require("../assets/pythonScripting2.png"),
        require("../assets/pythonSelenium.png")
      ],
      currentNumber: 0,
      timer: null
    };
  },
  mounted: function() {
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
.home {}

.imageCycle {
  /*Shared class between sliders*/
  width: 100%;
  height: 200px;
  float: none;
  padding-left: 10px;
  padding-right: 10px;
  overflow: auto;
}

.home-images {
  /*Centers images within containers*/
  display: block;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  max-height: 200px;
  max-width: 75%;
  padding: 15px;
}
</style>

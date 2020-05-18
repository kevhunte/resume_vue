<template>
<div class="home page" id="home">
  <h1>Creator. Explorer. Engineer</h1>

  <div id="sumContainer">
    <p>
      Java, C#, Python, and JavaScript are some of the many tools I have experience with.
      With Vue and React as my frontend frameworks of choice, fullstack development is where my skills shine.
    </p>
    <p>
      For more information about my experience, education, and personal projects, view below.
    </p>
  </div>

  <div id="experienceContainer">
    <h2 class="resHeaders">Experience</h2>

    <div>
      <h5>Software Test Engineer, Con Edison</h5>
      <h6>August 2019 - Current</h6>
    </div>
    <div>
      <h5>Software Test Engineer</h5>
      <h6>June 2019 - Current</h6>
    </div>
    <div>
      <h5>Full Stack Developer</h5>
      <h6>August 2018 - May 2019</h6>
    </div>
    <div>
      <h5>Android Developer</h5>
      <h6>May 2018 - September 2018</h6>
    </div>

  </div>

  <div id="skillsContainer">
    <h2 class="resHeaders">Skills</h2>
    <p style="margin: 0;"> <b>Skilled in:</b> Python, Java, C#, JavaScript, HTML, CSS, SQL, NoSQL, Vue.JS, AWS, Node</p>
    <p style="margin: 0;"> Object-oriented design, functional programming, UI and service automation, and Server-Side development</p>
    <p style="margin: 0;"> <b>Knowledgeable in:</b> React.JS, C++ </p>
  </div>

  <div id="projectsContainer">
    <h2 class="resHeaders">Personal Projects</h2>
    --- Use API here ---
  </div>

  <div id="edContainer">
    <h2 class="resHeaders">Education</h2>
    <div>
      <h5>University of Connecticut</h5>
      <h6>August 2015 - May 2019</h6>
    </div>
    <div>
      <h5>New York Institute of Technology</h5>
      <h6>January 2020 - Current</h6>
    </div>
  </div>

  <div id="certsContainer">
    <h2 class="resHeaders">Certifications</h2>
    <div>
      <h5>CompTIA Security+</h5>
      <h6>July 2019</h6>
    </div>
  </div>

  <!--<div class="imageCycle slider1">
    <transition-group name="fade">
      <div v-for="i in [currentNumber]" :key="i">
        <img class="home-images" @click="next" @mouseover="stopRotation" @mouseout="startRotation" :src="currentImg" alt="code snippet">
      </div>
    </transition-group>
  </div>

  <div class="imageCycle slider2">
    <transition-group name="fade">
      <div v-for="i in [currentNumber]" :key="i+1">
        <img class="home-images" @click="next" @mouseover="stopRotation" @mouseout="startRotation" :src="currentImg2" alt="code snippet">
      </div>
    </transition-group>
  </div>-->
</div>
</template>

<script>
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

<style scoped>
.home {}

.resHeaders {
  display: flex;
}

h5,
h6 {
  /*Use to control all headers in resume sections*/
  width: 40%;
  margin-bottom: 0;
}

h6 {
  margin: 0;
  text-decoration: underline;
}

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

<template>
<div id=imageCycle>
  <transition-group name="fade">
    <div v-for="i in [currentNumber]" :key="i" class="div-image">
      <img :src="currentImg" alt="code snippet">
    </div>
  </transition-group>
  <a class="prev" @click="prev" href="#">&#10094; Previous</a>
  <a class="next" @click="next" href="#">&#10095; Next</a>
</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'imageCycle',
  props: {
    photo1: String,
    photo2: String
  },
  data() {
    return {
      images: [ //try to load pictures at runtime. May not be possible
        require("../assets/js_sample.png"),
        require("../assets/cs_sample3.png"),
        require("../assets/cs_sample.png")
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
      let waitInSecs = 10; //toggle this
      this.timer = setInterval(this.next, waitInSecs * 1000);
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
    }
  }
};
</script>

<style scoped>
#imageCycle,
.div-image {
  height: 200px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 50px;
}

img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-height: 200px;
}


.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>

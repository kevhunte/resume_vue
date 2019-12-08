<template>
<div class="contact page">
  <h1>Contact Me</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>

  <a class="externals a1" @click="showModal('LinkedIn')" @close="closeModal">
    Click me for LinkedIn
  </a><br><br><br>

  <a class="externals a2" @click="showModal('GitHub')" @close="closeModal">
    Click me for GitHub
  </a><br>

  <modal v-show="isModalVisible" @close="closeModal" :h_content="hc" :b_content="bc" :f_content="fc" />

</div>
</template>

<script>
import modal from '@/components/Modal.vue';

export default {
  name: 'contact',
  components: {
    modal
  },
  data() {
    return {
      isModalVisible: false,
      hc: "",
      bc: "",
      fc: ""
    }
  },
  methods: {
    showModal(site) {
      if (site == "LinkedIn") {
        this.hc = "Heading to LinkedIn"
        this.bc = "LinkedIn"
        this.fc = "Confirmation button to LinkedIn"
      } else if (site == "GitHub") {
        this.hc = "Heading to Github"
        this.bc = "GitHub"
        this.fc = "Confirmation button to GitHub"
      } else {
        this.hc = ""
        this.bc = ""
        this.fc = ""
      }
      console.log("body value - " + this.bc);
      this.isModalVisible = !this.isModalVisible;
    },
    closeModal() {
      //console.log("initial - " + this.isModalVisible);
      if (this.isModalVisible) {
        this.isModalVisible = false;
      }
      //console.log("after - " + this.isModalVisible);
    }
  }

};
</script>

<style>
.externals:hover {
  color: #42b983;

}
</style>

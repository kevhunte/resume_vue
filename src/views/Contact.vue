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

  <modal v-show="isModalVisible" @close="closeModal" :h_content="hc" :b_content="bc" :f_content="fc" :site_link="sl" />

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
      fc: "",
      sl: "#",
      git: require('../assets/github.svg'),
      LI: require('../assets/LinkedIn.png')
    }
  },
  methods: {
    showModal(site) {
      if (site == "LinkedIn") {
        this.hc = "Leave to LinkedIn?"
        this.bc = this.LI //'./assets/logo.png' //"LinkedIn"
        this.fc = "Head to LinkedIn"
        this.sl = "https://www.linkedin.com/in/kevin-hunte-818759115/"
      } else if (site == "GitHub") {
        this.hc = "Leave to Github?"
        this.bc = this.git //'./assets/comptia-security.png' //"GitHub"
        this.fc = "Head to GitHub"
        this.sl = "https://github.com/kevhunte"
      }
      this.isModalVisible = !this.isModalVisible;
    },
    closeModal() {
      if (this.isModalVisible) {
        this.isModalVisible = false;
      }
    }
  }

};
</script>

<style>
.externals:hover {
  color: #42b983;

}
</style>

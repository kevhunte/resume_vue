<template>
<div class="contact page" id="contact">
  <h1>Contact Me</h1>
  <p>
    LinkedIn is the best way to contact me. For reference to other projects I have worked on,
    visit my github! The source code for this site is shown there as well.
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

.contact {
  min-width: 100%;
  padding: 0 5px 0 5px;
}
</style>

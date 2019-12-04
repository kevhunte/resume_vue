<template>
<div class="contact page">
  <h1>Contact Me</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>

  <button type="button" class="btn" @click="showModal">

    <modal v-show="isModalVisible" @close="closeModal" :h_content="hc" :b_content="bc" :f_content="fc" />
    Click Me
  </button>
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
      hc: "Header!",
      bc: "Body! The more data the more I extend",
      fc: "Footer!"
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = !this.isModalVisible;
    },
    closeModal() {
      console.log("setting visibility to false");
      this.isModalVisible = false;
    }
  }

};
</script>

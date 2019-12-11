<template>
<transition name="modal-anim">
  <div class="modal-backdrop">
    <div class="modal" role="dialog">
      <header class="modal-header" id="modalTitle">
        <slot name="header">
          <p>{{h_content}}</p>

          <button type="button" class="btn-close" @click="close" aria-label="Close modal">
            x
          </button>
        </slot>
      </header>

      <section class="modal-body" id="modalDescription">
        <slot name="body">
          <!--Replace with real logos here-->
          <img v-if="b_content !== ''" class="modal-img" :src="b_content" alt="Logo">
        </slot>
      </section>

      <footer class="modal-class">
        <slot name="footer">

          <button type="button" class="btn-green" @click="gotoSite">
            {{f_content}}
          </button>

        </slot>
      </footer>

    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    h_content: String,
    b_content: String,
    f_content: String,
    site_link: String
  },
  methods: {
    close() {
      this.$emit('close');
    },
    gotoSite() {
      if (this.site_link !== '#') {
        window.open(this.site_link);
        this.close();
      }
    }
  }
};
</script>

<style>
.modal-anim-enter-active {
  animation: fadeIn 1.2s;
  opacity: 0;
}

.modal-anim-leave-active {
  animation: fadeOut 1s;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow: auto;
  width: 40%;
  min-width: 250px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  font-weight: bold;
  justify-content: space-around;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
  padding: 15px;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.modal-img {
  max-height: 175px;
  max-width: 175px;

}

.modal-class {
  padding: 10px 0 10px 0;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
  padding: 15px;
  font-weight: bold;
}
</style>

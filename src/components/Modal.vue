<template>
<transition name="modal-anim">
  <div class="modal-backdrop">
    <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
      <header class="modal-header" id="modalTitle">
        <slot name="header">
          <p>{{h_content}}</p>

          <!--<button type="button" class="btn-close" @click="close" aria-label="Close modal">
            x
          </button>-->
        </slot>
      </header>

      <section class="modal-body" id="modalDescription">
        <slot name="body">
          {{b_content}}
        </slot>
      </section>

      <footer class="modal-class">
        <slot name="footer">
          <p>{{f_content}}</p>

          <!--<button type="button" class="btn-green" @click.prevent="close" aria-label="Close modal">
            Close
          </button>-->

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
  },
  methods: {
    close() {
      this.$emit('close');
      console.log("Close Me!");
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
  overflow-x: auto;
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
  justify-content: center;
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

/* .btn-close {
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
}*/
</style>

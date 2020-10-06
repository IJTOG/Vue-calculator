<template>
  <div class="modal-custom">
    <div id="app">
      <dialog btn-text-confirm="Yes" btn-text-cancel="No">Are you sure?</dialog>
    </div>
    <template id="dialog-template">
      <div class="dialog" v-show="active">
        <div class="dialog__overlay"></div>
        <div class="dialog__content">
          <div class="dialog__body">
            <slot name="ConfirmText"> </slot>
          </div>
          <div class="dialog__footer">
            <button class="btn" @click="onCancel()">
              {{ btnTextCancel }}
            </button>
            <button class="btn btn-ok" @click="onConfirm()">
              {{ btnTextConfirm }}
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ["btnTextCancel", "btnTextConfirm"],
  data: function() {
    return {
      active: false
    };
  },
  methods: {
    open: function() {
      this.active = true;
    },
    close: function() {
      this.active = false;
    },
    onCancel: function() {
      this.close();
    },
    onConfirm: function() {
      this.$emit("confirmed", true);
      this.close();
    }
  },
  computed: {}
};
</script>

<style lang="scss">
.modal-custom {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  button {
    padding: 5px;
  }
  .link {
    font-size: 20px;
    text-decoration: none;
    position: absolute;
    color: #007aff;
  }
  .dialog__content {
    position: fixed;
    z-index: 13;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    text-align: center;
    border-radius: 2px;
    width: 70%;
    max-width: 250px;
    border-radius: 5px;
  }
  .dialog__footer {
    display: flex;
  }
  .dialog__body {
    padding: 20px 0;
  }
  .dialog__overlay {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .btn {
    width: 50%;
    padding: 10px;
    background: #fff;
    border: 1px solid #f7f7f7;
    color: #007aff;
    border-bottom: none;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>

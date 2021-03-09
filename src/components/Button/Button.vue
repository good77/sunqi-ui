<template>
  <button @click="clickBtn" :class="classBtn" :disabled="isDisabled">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'Button',
  data() {
    return {
      preCls: 'sq-btn'
    };
  },
  props: {
    isDisabled: Boolean,
    shape: {
      type: String,
      default: '' //'circle'圆角, 'rectangle'直角
    },
    type: {
      type: String,
      default: 'default', //['default',success', 'warning', 'error', 'info']
      validator(value) {
        let types = ['default', 'success', 'warning', 'error', 'info'];

        return types.includes(value) || !value;
      }
    },
    size: {
      type: String,
      default: '' //['large', 'medium', 'small']
    }
  },
  computed: {
    classBtn() {
      let { preCls, type, size, shape } = this,
        className = [
          `${preCls}`,
          {
            [`${preCls}-${type}`]: !!type,
            [`${preCls}-${size}`]: !!size,
            [`${preCls}-${shape}`]: !!shape
          }
        ];

      return className;
    }
  },
  methods: {
    clickBtn(ev) {
      this.$emit('click', ev);
    }
  }
};
</script>

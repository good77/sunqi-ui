<template>
  <div :class="classIpt" @click='iptClick'>
     <input
      ref='iptDom'
      @focus="iptFocus"
      @blur="iptBlur"
      @input="iptInput"
      :type='type' 
      :disabled="isDisabled"
    />
  </div>
</template>
<script>
export default {
  name: 'Input',
  data() {
    return {
      preCls:'sq-ipt',
      focus: false
    };
  },
  model:{
    prop:'value',
    event:'iptChange'
  },
  props: {
    value:String,
    isDisabled: Boolean,
    type: {
      type: String,
      default: 'text', //['text', 'password']
      validator(value) {
        let types = ['text', 'password'];
        return types.includes(value) || !value;
      }
    },
    size: {
      type: String,
      default: 'medium', //['large', 'medium', 'small']
      validator(value) {
        let types = ['text', 'password'];
        return types.includes(value) || !value;
      }
    }
  },
  computed: {
    classIpt() {
      let { preCls, focus, size } = this,
        className = [
          `${preCls}`,
          {
            [`${preCls}-${size}`]: !!size
          },
          {
            [`${preCls}-focus`]: !!focus
          }
        ];

      return className;
    }
  },
  methods: {
    iptClick(){
      this.focus = true;
      this.$refs.iptDom.focus();
    },
    iptFocus(e) {
      this.$emit('focus', e);
      this.focus = true;
    },
    iptBlur(e){
      this.$emit('blur', e);
      this.focus = false;
    },
    iptInput(e){
      this.$emit('input', e);
      this.$emit('iptChange', e.target.value);
    },
    iptChange(e){
      this.$emit('change', e);
    }
  }
};
</script>
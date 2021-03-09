import * as components from './components';
var VuePlugin = {};
VuePlugin.install = function(Vue) {
  for(let component in components) {
    Vue.component('sq'+component, components[component]);
  }
};
export default VuePlugin;

{{#doc}}
<doc>
  ### The main component for app
</doc>
{{/doc}}
<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view></router-view>
    {{else}}
    <hello></hello>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import Hello from './components/Hello';

{{/unless}}
export default {
  name: 'app'{{#router}}{{else}},
  components: {
    Hello
  }{{/router}}
};
</script>

{{#if_eq uiLib "iview"}}
<style lang="less">
@import './style/theme/default.less';
</style>

{{/if_eq}}
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

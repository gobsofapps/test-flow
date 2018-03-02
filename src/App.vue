<template>
  <div id="app" class="app">
    <transition name="router" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'App',
    methods: {
      ...mapActions([
        'getSignInQRCode',
        'getSignUpQRCode',
      ]),
    },
  };
</script>

<style lang="less">
  @import 'styles/normalize.css';
  @import './router/transition.less';

  html,
  body {
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .app {
    min-height: 100%;
  }
</style>

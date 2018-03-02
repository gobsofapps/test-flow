<template>
  <div id="app" class="app">
    <transition name="router" mode="out-in">
      <router-view class="view router-view"></router-view>
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

  .router-view {
    transition: all .5s ease;
    min-height: 100vh;
  }

  .router-enter, .router-leave {
    opacity: 0;
    transform: translate3d(20px, 0, 0);
  }
</style>

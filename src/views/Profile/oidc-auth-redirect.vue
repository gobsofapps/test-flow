<template>
  <div class="container">
    <div class="verified">
      <div class="verified-icon"></div>
      <h3>Identity Verified! You will be redirected to you account in a minute
        <span class="dot">.</span>
        <span class="dot">.</span>
        <span class="dot">.</span>
      </h3>
    </div>
  </div>
</template>

<script>
  import BankHeader from '../../components/header';

  export default {
    components: {
      BankHeader,
    },
    created() {
      this.$store.dispatch('getUserInfo', this.$route.query);
    },
  };
</script>


<style scoped lang="less">
  @title-color: #0c2074;

  header {
    height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }

  .verified {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    max-width: 450px;
    padding: 20px;
    height: 300px;

    .verified-icon {
      width: 100%;
      height: 150px;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url('../../assets/icons/verified-approve.svg');
    }

    h3 {
      color: @title-color;
      text-align: center;
    }
  }

  .dot {
    animation-name: blink;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }

  .dot:nth-child(2) {
    animation-delay: .2s;
  }

  .dot:nth-child(3) {
    animation-delay: .4s;
  }

  @keyframes blink {
    0% {
      opacity: .2;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: .2;
    }
  }
</style>

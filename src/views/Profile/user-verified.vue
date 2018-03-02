<template>
  <div class="container">
    <header>
      <bank-header></bank-header>
    </header>
    <div class="verified">
      <div class="verified-icon"></div>
      <h3>Identity Verified! You will be redirected to you account in a minute...</h3>
    </div>
  </div>
</template>

<script>
  import BankHeader from '../../components/header';

  export default {
    components: {
      BankHeader,
    },
  };
</script>


<style scoped lang="less">
  @title-color: #0c2074;

  header {
    height: 40px;
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
</style>

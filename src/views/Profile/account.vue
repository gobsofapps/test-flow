<template>
  <div class="container" v-if="userData">
    <main>
      <header>
        <bank-header></bank-header>
      </header>
      <h3>Welcome, {{userData.given_name}}!</h3>
      <p>Choose one of the options below:</p>
      <div class="info-block">
        <h4>Past Transactions</h4>
        <div class="arrow-icon"></div>
      </div>

      <div class="info-block">
        <h4>My payments</h4>
        <div class="arrow-icon"></div>
      </div>

      <div class="info-block">
        <h4>Deposits</h4>
        <div class="arrow-icon"></div>
      </div>
      <div class="info-block">
        <h4>Recharge mobile</h4>
        <div class="arrow-icon"></div>
      </div>
    </main>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import BankHeader from '../../components/header';

  export default {
    components: {
      BankHeader,
    },
    computed: {
      ...mapGetters([
        'userData',
      ]),
    },
  };
</script>


<style scoped lang="less">
  @title-color: #0c2074;
  @white: #ffffff;
  @nav: #124cb2;
  @submenu: rgb(23, 82, 152);
  @black: rgba(85, 85, 85, 1);


  main {
    margin-top: 10px;
    padding: 0px 5px;
  }

  header {
    height: 40px;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1000;
  }

  h3 {
    color: #007cbe;
    display: block;
    font-weight: bold;
    font-style: normal;
    font-size: 23px;
    padding-bottom: 3px;
    padding-left: 20px;
    line-height: 25px;
    margin-top: 50px;
    border-bottom: 1px solid #e7e7e7;
  }

  .info-block {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 800px;
    padding: 10px 20px;
    margin: 0 auto 10px;
    color: @black;
    border-radius: 15px;
    height: 100px;
    box-shadow: -1px 3px 10px 0 rgba(0, 0, 0, .3);
    cursor: pointer;
    position: relative;
  }

  .arrow-icon {
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('../../assets/icons/arrow-round.svg');
    width: 30px;
    height: 30px;
    margin: auto;
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin: 20px 0;
  }

</style>

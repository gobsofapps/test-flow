<template>
  <div class="container">
    <main>
      <div class="checking-header">
        <div class="checking-header__image"></div>
        <div class="checking-header__text">
          <h4>Easy Checking</h4>
          <h1>A basic checking account with great standard features</h1>
          <h3>Open Account with</h3>
          <div class="buttons-container">
            <a :href="QR.signInQRCode" class="button violet-button">
              <div class="verified_logo"></div>
              Verified.Me
            </a>
            <button class="button red-button">Continue to form</button>
          </div>
        </div>
      </div>

      <div class="content">
        <p>
          Easy Checking is a basic checking account that comes with standard benefits like a debit card that doubles as an ATM card.
          It also gives you full access to Online and Mobile Banking, a suite of powerful tools and apps that make it easy to track your spending, pay bills,
          send money, deposit checks and more.
        </p>

        <p>
          Sound good? You may also like our <span class="selected">Silver Checking Package</span>, a matched checking and savings account with extra ways to help you save.
        </p>

        <h2>Easy Checking benefits</h2>
        <h3>Basic banking must-haves</h3>
        <p>You'll get a <span class="selected">U.S. Bank Visa® Debit Card</span>, no-fee transactions at U.S. Bank ATMs, and <span class="selected">Online/Mobile Banking</span> with <span class="selected">mobile check deposit</span>, bill pay and more.</p>

        <h2>Pricing and features</h2>
        <h3>Monthly maintenance fee</h3>
      </div>
    </main>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import BankHeader from '../../components/header';

  export default {
    components: {
      BankHeader,
    },
    computed: {
      ...mapState([
        'QR',
      ]),
    },
  };
</script>


<style scoped lang="less">
  @white: rgba(255, 255, 255, 1);
  @black: rgba(85, 85, 85, 1);

  header {
    height: 40px;
  }

  .container {
    color: @black;
    font-size: 18px;
    line-height: 27px;
  }

  main {
    padding: 0 10px;
  }

  .checking-header {
    margin: 30px 0;
  }

  .checking-header__image {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('../../assets/atm-lady.jpg');
    border-radius: 100%;
    width: 250px;
    margin: 0 auto;
    height: 250px;
  }

  .checking-header__text {
    h4 {
      color: #0c2074;
      text-transform: uppercase;
      font-size: 14px;
      line-height: 1;
      letter-spacing: 3px;
      font-weight: normal;
      display: block;
      font-style: normal;
    }

    h1 {
      font-size: 30px;
      line-height: 35px;
      font-weight: bold;
      font-style: normal;
      color: #0c2074;
      margin: 0 0 20px;
    }

    .buttons-container {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    }

    .button {
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: row wrap;
      border-radius: 4px;
      vertical-align: middle;
      font-size: 15px;
      line-height: 20px;
      padding: 2px;
      position: relative;
      text-decoration: none !important;
      text-align: center;
      font-weight: bold;
      cursor: pointer;
      margin: 0 auto 20px;
      width: 40%;
      min-width: 150px;
      border: 0;
      box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, .4);
      curson: pointer;
    }

    .red-button {
      background-color: lighten(#d93f4d, 5%);
    }

    .violet-button {
      background-color: #000f9e;
    }

  }

  .selected {
    color: #0c2074;
    font-weight: bold;
  }

  h2  {
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 20px;
    font-weight: bold;
    font-style: normal;
    color: #0c2074;
  }

  h3 {
    color: #007cbe;
    display: block;
    font-weight: bold;
    font-style: normal;
    font-size: 25px;
    line-height: 28px;
  }

  .verified_logo {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('../../assets/icons/securekey_icon.svg');
    height: 50px;
    width: 50px;
    margin-right: -6px;
  }


</style>

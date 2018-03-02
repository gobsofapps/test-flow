<template>
  <div class="container">
    <header>
      <bank-header></bank-header>
    </header>
    <div class="hero-image-block">
      <div class="hero-image-block__text">
        <h3>Checking Accounts</h3>
        <h1>What do you want in a checking account?</h1>
        <div class="recommendation">
          <div class="icon red-circle-icon"></div>
          <div>Get a recommendation</div>
        </div>
      </div>
    </div>
    <main>
      <section class="options">
        <div class="option">
          <h3>I want more ways to save.</h3>
          <h4>Silver Checking Package</h4>
          <p>A popular package for combined checking and savings.</p>

          <div class="apply">
            <div class="icon blue-circle-icon"></div>
            <a href="#">Apply for Silver Checking</a>
          </div>

          <h4>Gold Checking Package</h4>
          <p>Extra benefits for U.S. Bank credit card and loan customers.</p>

          <div class="apply">
            <div class="icon blue-circle-icon"></div>
            <a href="#">Apply for Gold Checking</a>
          </div>
        </div>

        <div class="option">
          <h3>I want interest and extra perks.</h3>
          <h4>Platinum Checking Package</h4>
          <p>Our top-tier account, with the best rates and all the perks.</p>

          <div class="apply">
            <div class="icon blue-circle-icon"></div>
            <a href="#">Apply for Platinum Checking</a>
          </div>

          <h4>Premium Checking</h4>
          <p>Interest, extra perks, and a monthly maintenance fee waiver for seniors.</p>

          <div class="apply">
            <div class="icon blue-circle-icon"></div>
            <a href="#">Apply for Premium Checking</a>
          </div>
        </div>

        <div class="option">
          <h3>Just the basics, please.</h3>
          <h4>Easy Checking</h4>
          <p>A basic checking account with great standard features.</p>

          <div class="apply">
            <div class="icon blue-circle-icon"></div>
            <router-link to="/easy-checking">Apply for Easy Checking</router-link>
          </div>

          <h4>Student Checking</h4>
          <p>Basic checking with features just for students.</p>

          <div class="apply">
            <div class="icon blue-circle-icon"></div>
            <a href="#">Apply for Student Checking</a>
          </div>

          <h4>Safe Debit Account</h4>
          <p>A bank account with no checks and no overdraft fees.</p>

          <div class="apply">
            <div class="icon blue-circle-icon"></div>
            <a href="#">Apply for a Safe Debit Account</a>
          </div>
        </div>
      </section>

      <button class="red-button">Open an account</button>

      <div class="ethical-company"></div>
      <p class="ethical-comment">U.S. Bank was named one of the "World's Most Ethical Companies".</p>
    </main>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import BankHeader from '../../components/header';


  export default {
    name: 'CheckingAccount',
    components: {
      BankHeader,
    },
    methods: {
      ...mapActions([
        'getSignInQRCode',
      ]),
    },
    mounted() {
      this.getSignInQRCode();
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
    height: 2000px;
    color: @black;
  }

  main {
    padding: 0 10px;
  }

  .icon {
    width: 24px;
    height: 24px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .hero-image-block {
    position: relative;
    width: 100%;
    height: 80vh;
    overflow: hidden;
    background: url('../../assets/hero-image.jpg') top center / cover no-repeat;
    background-attachment: fixed;
    color: @white;
    padding-left: 40px;
    margin-top: -40px;
    z-index: -1;
  }

  .hero-image-block__text {
    width: 100%;
    max-width: 700px;
    padding: 10px;

    h3 {
      margin: 150px 0 10px;
      font-size: 14px;
      line-height: 17px;
      font-weight: normal;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    h1 {
      font-size: 36px;
      line-height: 40px;
      margin: 0 0 20px;
    }

    .recommendation {
      font-size: 18px;
      font-weight: bold;
      line-height: 27px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;

      .red-circle-icon {
        background-image: url('../../assets/icons/circle_button_red.svg');
        margin-right: 10px;
      }
    }
  }

  .options {
    padding: 60px 15px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  .option {
    flex-grow: 1;
    margin-right: 25px;
    width: 100%;
    max-width: 330px;

    h3, h4 {
      font-weight: bold;
      font-style: normal;

    }

    h3 {
      font-size: 36px;
      line-height: 40px;
      color: #0c2074;
    }

    h4 {
      font-size: 28px;
      line-height: 31px;
      margin: 30px 0 10px;
      color: #007cbe;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
        color: lighten(#007cbe, 10%);
      }
    }

    p {
      margin: 0 0 40px 0;
    }

    .apply {
      font-size: 18px;
      font-weight: bold;
      line-height: 27px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 40px;

      a {
        text-decoration: none;
        color: @black;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

      .blue-circle-icon {
        background-image: url('../../assets/icons/circle_button_blue.svg');
        margin-right: 10px;
      }
    }
  }

  .red-button {
    background-color: #d93f4d;
    color: #fff;
    display: block;
    border-radius: 2px;
    vertical-align: middle;
    font-size: 18px;
    line-height: 20px;
    padding: 15px 40px;
    position: relative;
    text-decoration: none !important;
    text-align: center;
    font-weight: bold;
    margin: 0 auto;
    cursor: pointer;
    width: 100%;
    max-width: 400px;
    left: 0;
    right: 0;
  }

  .ethical-company {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('../../assets/ethical-company.png');
    height: 80px;
    margin-top: 80px;
  }

  .ethical-comment {
    text-align: center;
  }
</style>

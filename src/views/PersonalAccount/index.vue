<template>
  <div class="container">
    <main>
      <header>
        <bank-header></bank-header>
      </header>
      <h3>About your account</h3>
      <p class="description">Do you have a U.S. bank small business checking or saving account?</p>
      <section class="accounts">
        <div class="account">I have a small business checking or savings account <div class="icon__arrow"></div></div>
        <div class="account">I have a different account <div class="icon__arrow"></div></div>
      </section>

      <section class="accounts">
        <router-link to="/easy-checking" class="account open-account">Open an account now. <div class="icon__arrow"></div></router-link>
      </section>
    </main>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import BankHeader from '../../components/header';

  export default {
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
  @title-color: #0c2074;

  header {
    position: fixed;
    height: 40px;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    -webkit-transform: translateZ(0);
  }
  main {
    padding: 0 10px;
    margin-top: 10px;
  }

  h3 {
    margin: 50px 0 10px;
    color: @title-color;
    font-weight: 400;
  }

  .description {
    font-size: 12px;
    font-weight: 400;
    margin: 0 0 10px;
  }

  section {
    border: 1px solid lighten(@title-color, 40%);
    border-radius: 4px;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: .4px;
    margin-top: 30px;

    .open-account {
      font-weight: 400;
    }
  }

  .account {
    padding: 10px 40px 10px 10px;
    cursor: pointer;
    position: relative;
    display: block;
    text-decoration: none;
    color: @title-color;
  }

  .account:nth-child(2) {
    border-top: 1px solid lighten(@title-color, 40%);
  }

  .icon__arrow {
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 12px;
    height: 12px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('../../assets/icons/arrow-round.svg');
  }
</style>

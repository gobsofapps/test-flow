<template>
  <div class="container">
    <main>
      <h3>Enroll to Access Your Accounts</h3>
      <p class="description">Activate your account - it only takes a few minutes</p>
      <section class="accounts">
        <router-link to='/personal-account' class="account">Personal <div class="icon__arrow"></div></router-link>
        <div class="account">Business <div class="icon__arrow"></div></div>
      </section>
    </main>
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
  main {
    padding: 0 10px;
    margin-top: 40px;
  }

  h3 {
    margin: 5px 0 10px;
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

  }

  .account {
    padding: 10px;
    cursor: pointer;
    position: relative;
    display: block;
    text-decoration: none;
    color: @title-color;
  }

  .account:nth-child(1) {
    border-bottom: 1px solid lighten(@title-color, 40%);
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

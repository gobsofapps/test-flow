<template>
  <div class="container" v-if="userData">
    <header>
      <div class="submenu">
        <div class="profile-icon"></div>
      </div>
    </header>
    <main>
      <h3>Does everything look correct?</h3>
      <div class="info-block">
        <div class="info-left">
          <h6>Contact Information</h6>
          <p>{{userData.given_name}}</p>
          <p>{{userData.family_name}}</p>
          <p>{{userData.email}}</p>
          <p>{{userData.phone_number}}</p>
        </div>
        <div class="info-right">
          <p>Edit</p>
        </div>
      </div>

      <div class="info-block">
        <div class="info-left">
          <h6>Home Address</h6>
          <p>{{userData.address.street_address}}</p>
          <p>{{userData.address.locality + ' ' + userData.address.country}}</p>
          <p>{{userData.address.postal_code}}</p>
        </div>
        <div class="info-right">
          <p>Edit</p>
        </div>
      </div>

      <div class="info-block">
        <div class="info-left">
          <h6>Permanent Residence</h6>
          <p>United States</p>
        </div>
        <div class="info-right">
          <p>Edit</p>
        </div>
      </div>

      <!--<div class="info-block">-->
        <!--<div class="info-left">-->
          <!--<h6>Identification</h6>-->
          <!--<p>08/08/XXXX</p>-->
          <!--<p>XXXX-XX-7876</p>-->
          <!--<p>US Driver's License</p>-->
        <!--</div>-->
        <!--<div class="info-right">-->
          <!--<p>Edit</p>-->
        <!--</div>-->
      <!--</div>-->
      <router-link class='confirm-button' to="/account">Confirm</router-link>
    </main>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
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

  header {
    color: @white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }

  main {
    margin-top: 70px;
    padding: 0px 5px;
  }

  nav {
    height: 45px;
    background-color: @nav;
    padding: 10px;
  }

  .menu {
    width: 80px;
    text-align: center;
    font-size: 12px;

    .menu-icon {
      width: 16px;
      height: 16px;
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url('../../assets/icons/menu.svg');
      margin: 0 auto;
    }
  }

  .submenu {
    background-color: @white;
    height: 60px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 18px;
    padding: 10px 0;
    color: @white;
  }

  h3 {
    color: #007cbe;
    display: block;
    font-weight: bold;
    font-style: normal;
    font-size: 20px;
    padding-bottom: 3px;
    line-height: 25px;
    text-align: center;
    border-bottom: 1px solid #e7e7e7;
  }

  .profile-icon {
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('../../assets/icons/profile-icon.svg');
    width: 50px;
    height: 50px;
    margin: 0 auto;
  }

  .info-block {
    border-bottom: 1px solid lighten(#000000, 80%);
    display: flex;
    flex-flow: row nowrap;
    align-items: baseline;
    justify-content: center;
    width: 100%;
    max-width: 800px;
    padding: 10px;
    margin: 0 auto 10px;
    color: @black;

  }

  .info-left {
    width: 95%;

    h6 {
      color: #5d6c7b;
      margin: 0;
    }

    p {
      margin: 4px 0;
      font-size: 14px;
    }
  }

  .info-right {
    flex-grow: 1;
    p {
      color: #5d6c7b;
      text-decoration: underline;
      cursor: pointer;
      font-size: 14px;
    }
  }

  .confirm-button {
    padding: 15px;
    background-color: #2ECC40;
    color: @white;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: .7px;
    width: 100%;
    max-width: 400px;
    margin: 20px auto;
    display: block;
    box-shadow: -2px 3px 5px 0 rgba(0, 0, 0, .2);
    text-align: center;
    text-decoration: none;
  }
</style>

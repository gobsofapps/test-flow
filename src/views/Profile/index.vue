<template>
  <div class="container" v-if="userData">
    <header>
      <nav>
        <div class="menu">
          <div class="menu-icon"></div>
          <span>Menu</span>
        </div>
      </nav>
      <div class="submenu">
        Does everything look correct?
      </div>
      <div class="profile-icon"></div>
    </header>
    <main>
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

      <div class="info-block">
        <div class="info-left">
          <h6>Identification</h6>
          <p>08/08/XXXX</p>
          <p>XXXX-XX-7876</p>
          <p>US Driver's License</p>
        </div>
        <div class="info-right">
          <p>Edit</p>
        </div>
      </div>
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
  @submenu: #94dbff;

  header {
    color: @white;
    position: relative;
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
    background-color: @submenu;
    height: 80px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 18px;
    color: @nav;
    padding-bottom: 20px;
  }

  .profile-icon {
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('../../assets/icons/profile-icon.svg');
    width: 60px;
    height: 60px;
    left: 0;
    top: -30px;
    right: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
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
    margin: 0 auto 20px;

  }

  .info-left {
    width: 95%;

    h6 {
      color: #5d6c7b;
      margin: 0;
    }

    p {
      margin: 8px 0;
    }
  }

  .info-right {
    flex-grow: 1;
    p {
      color: #5d6c7b;
      text-decoration: underline;
      cursor: pointer;
    }
  }
</style>

<template>
  <div class="container">
    <header>
    </header>
    <transition appear name="fadeIn" class="content">
      <main>
        <div class="anonymous-avatar"></div>
        <h2>Hello</h2>
        <form>
          <input class="form__input" type="text" placeholder="ENTER PERSONAL ID">
          <div class="icon icon__lock"></div>
          <div class="form__button">
            <div class="icon icon__arrow"></div>
          </div>
        </form>
        <div class="login-checkboxes">
          <span>Remember Me</span>
          <input type='checkbox' class='ios8-switch' id='rememberCheckbox'>
          <label for='rememberCheckbox'></label>
        </div>
        <div class="login-checkboxes">
          <span>Enable Touch ID</span>
          <input type='checkbox' class='ios8-switch' id='touchIDCheckbox'>
          <label for='touchIDCheckbox'></label>
        </div>
        <div class="login-management">
          <div class="login-management__block">
            <p class="with-border">Forgot ID?</p>
            <div class="icon icon__map"></div>
          </div>
          <div class="login-management__block">
            <router-link to="/accounts">New User?</router-link>
            <div class="icon icon__info"></div>
          </div>
        </div>
      </main>
    </transition>
    <footer>
      <div>Online privacy and security</div>
      <div>Legal Disclosures</div>
      <div>Advanced Security</div>
      <div>2018</div>
    </footer>
  </div>
</template>

<script>
  import BankHeader from '../../components/header';

  export default {
    name: 'Home',
    components: {
      BankHeader,
    },
  };
</script>


<style scoped lang="less">
  @white: rgba(255, 255, 255, 1);
  @background-main: rgb(18, 80, 154);
  @input-background: rgba(255, 255, 255, .5);

  .container {
    background-color: @background-main;
    color: @white;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  header {
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }

  .anonymous-avatar {
    background-image: url('../../assets/avatar.png');
    width: 100px;
    height: 100px;
    margin: 0 auto;
    left: 0;
    right: 0;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  main {
    padding: 10px 20px;
    flex: 1 0 auto;
  }
  h2 {
    font-weight: 400;
    letter-spacing: .4px;
    text-align: center;
    margin-top: 10px;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 40px;
    width: 100%;
    max-width: 500px;
    left: 0;
    right: 0;
    margin: 0 auto;
    position: relative;
    margin-bottom: 15px;
  }
  .form__input {
    flex-grow: 1;
    height: 100%;
    background-color: @input-background;
    outline: 0;
    border: none;
    font-weight: 400;
    text-align: center;
    border-radius: 2px;
  }
  .form__button {
    width: 45px;
    height: 100%;
    margin-left: 5px;
    background: rgba(255, 255, 255, 1);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
  }
  .icon {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .icon__lock {
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 16px;
    height: 16px;
    background-image: url('../../assets/icons/lock.svg');
  }
  .icon__map {
    width: 21px;
    height: 21px;
    background-image: url('../../assets/icons/map.svg');
    margin: 0 auto;
  }
  .icon__info {
    width: 21px;
    height: 21px;
    background-image: url('../../assets/icons/info.svg');
    margin: 0 auto;
  }
  .icon__arrow {
    width: 24px;
    height: 24px;
    background-image: url('../../assets/icons/arrow.svg');
  }
  .login-checkboxes {
    width: 200px;
    padding: 10px;
    font-weight: 300;
    font-size: 14px;
    margin: 0px auto 3px;
    display: flex;
    justify-content: space-between;
    span {
      width: 50%;
      display: block;
      margin-top: 3px;
    }
  }
  .login-management {
    width: 300px;
    padding: 10px;
    height: 150px;
    display: flex;
    align-items: stretch;
    justify-content: center;
    margin: 15px auto;
    text-align: center;
    .login-management__block {
      flex-grow: 1;
    }
  }
  .login-management__block {
    p {
      font-size: 14px;
      text-decoration: underline;
      margin-bottom: 30px;
    }
    a {
      font-size: 14px;
      text-decoration: underline;
      display: block;
      margin: 1em 0 30px;
      color: @white;
    }
  }
  .with-border {
    border-right: 1px solid #fff;
  }

  footer {
    font-size: 12px;
    padding: 15px;
    margin: 0 auto;
    width: 300px;
    text-align: center;
    flex-shrink: 0;

    div {
      text-decoration: underline;
      display: inline-block;
      padding-right: 5px;
      margin: 2px 0;
    }

    div:nth-child(1) {
      border-right: 1px solid @white;
    }
  }

  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 1);
    letter-spacing: .4px;
  }
  ::-moz-placeholder {
    color: rgba(255, 255, 255, 1);
    letter-spacing: .4px;
  }
  :-ms-input-placeholder {
    color: rgba(255, 255, 255, 1);
    letter-spacing: .4px;
  }
  :-moz-placeholder {
    color: rgba(255, 255, 255, 1);
    letter-spacing: .4px;
  }

  /* checkbox */

  input[type="checkbox"].ios8-switch {
    display: none;
  }
  input[type="checkbox"].ios8-switch + label {
    position: relative;
    padding: 5px 0 0 50px;
    line-height: 2.0em;
  }
  input[type="checkbox"].ios8-switch + label:before {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 40px; /* x*5 */
    height: 24px; /* x*3 */
    border-radius: 16px; /* x*2 */
    background: #fff;
    border: 1px solid #d9d9d9;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  input[type="checkbox"].ios8-switch + label:after {
    content: "";
    position: absolute;
    display: block;
    left: 0px;
    top: 0px;
    width: 24px; /* x*3 */
    height: 24px; /* x*3 */
    border-radius: 16px; /* x*2 */
    background: #fff;
    border: 1px solid #d9d9d9;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  input[type="checkbox"].ios8-switch + label:hover:after {
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
  }
  input[type="checkbox"].ios8-switch:checked + label:after {
    margin-left: 16px;
  }
  input[type="checkbox"].ios8-switch:checked + label:before {
    background: #55D069;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 20%, 0);
      transform: translate3d(0, 20%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .fadeIn-enter-active {
    animation: fadeInUp .4s;
    animation-timing-function: ease-in;
  }
</style>

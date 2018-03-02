<template>
  <div class="header">
    <div class="us-logo"></div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .header {
    background-color: rgba(17, 36, 114, 1);
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .us-logo {
    background-image: url('../assets/usbank_logo.png');
    width: 100px;
    height: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat
  }
</style>

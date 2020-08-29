<template>
  <div id="app">

    <router-view/>

  </div>
</template>

<style lang="scss">

@font-face {
  font-family: Shabnam;
  src: url("./fonts/Shabnam.woff") format("woff");
  // font-weight: 400;
  // font-style: normal;
  // font-stretch: normal;
  // font-style: normal;
  }

  #app{
      height: 100%;
      width: 100%;
      margin: 0px;
      background-color: #f3f4f8;
      // background-repeat: no-repeat;
      // background-size: cover;
      font-family: Shabnam;
  }
  
</style>

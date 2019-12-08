<template>
<div class="about page">
  <h1>About The Creator</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <section class="section-about">
    <div class="div-images pic1">
      <img class="images" src="../assets/comptia-security.png" alt="resume pic 1">
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </section>
  <section class="section-about">
    <div class="div-images pic2">
      <img class="images" src="..//assets/logo.png" alt="resume pic 2">
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </section>
</div>
</template>

<style>
.about {}

.section-about {
  /*wraps around content*/
  vertical-align: middle;
  overflow: auto;
}

.div-images {
  height: 200px;
  width: 200px;
  display: inline-block;
  padding: 0 15px 0 15px;
  overflow: auto;
}

.pic1 {
  float: right;
}

.pic2 {
  float: left;
}

.images {
  max-height: 180px;
  max-width: 180px;
}
</style>

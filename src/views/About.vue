<template>
<div class="about page">
  <h1>About The Creator</h1>
  <p>
    Creative, persistent, and versatile are some of the few words I use to describe myself.
    As a software engineer, creation is at the palm of your hands - particularly in your fingers.
    With a focus on server-side development, I am continuously improving skills in order to
    develop, scale, and secure systems.

  </p>
  <section class="section-about">
    <div class="div-images pic1">
      <img class="images i1" src="../assets/comptia-security.png" alt="resume pic 1">
    </div>
    <p>
      From earning a bachelor's degree in computer science with a concentration in security,
      I earned my Security+ certification within one month of graduation. As of Fall 2020 I will
      be attending the <a href="https://www.nyit.edu/">New York Institute of Technology </a> to complete a master's in Cybersecurity.
      As an engineer by day and a graduate student by night, the learning truly never stops.
    </p>
  </section>
  <section class="section-about">
    <div class="div-images pic2">
      <img class="images i2" src="..//assets/okta.png" alt="resume pic 2">
    </div>
    <p>
      Moving towards the near and current future, I will be working to integrate Okta into my personal projects. The best wway to learn is to create!
      I started by watching tutorials and reviewing documentation from <a href="https://developer.okta.com/">Okta developer's portal.</a>
      My end goal is to develop a comfortable understanding of Okta's environment for authorizing access to services
      for web apps, native apps, and other systems.
    </p>
  </section>
</div>
</template>

<style>
.section-about {
  /*wraps around content*/
  overflow: auto;
}

.div-images {
  height: 100%;
  width: 200px;
  display: inline-block;
  padding: 0 15px 0 15px;
  overflow: auto;
}

.i2 {
  top: 50%;
}

.pic1 {
  float: right;
}

.pic2 {
  float: left;
}

.images {
  position: relative;
  max-height: 180px;
  max-width: 180px;
}
</style>

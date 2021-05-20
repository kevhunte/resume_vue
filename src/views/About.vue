<template>
<div class="about page" id="about">
  <h1>More About Me</h1>
  <p>
    Creative, persistent, and versatile are some of the few words I use to describe myself.
    As a software engineer, creation is at the palm of your hands - particularly in your fingers.
    With a focus on server-side development, I am continuously improving skills in order to
    develop, scale, and secure systems.
  </p>

  <div class="">
    <img class="images animated fadeIn" src="../assets/kevin_hunte.jpg" alt="">
  </div>
  <section class="section-about">
    <div class="div-images pic1">
      <img class="images i1 animated fadeIn" src="../assets/comptia-security.png" alt="resume pic 1">
    </div>
    <p>
      From&nbsp;earning&nbsp;a&nbsp;bachelor's&nbsp;degree in computer science with a concentration in security,
      I earned my Security+ certification within one month of graduation. As of January 2020 I am
      attending the <a href="https://www.nyit.edu/" target="_blank" rel="noopener">New York Institute of Technology </a> to complete a master's in Cybersecurity.
      As an engineer by day and a graduate student by night, I am continuously learning and developing my skillset.
    </p>
  </section>
  <section class="section-about">
    <div class="div-images pic2">
      <img class="images i2 animated fadeIn" src="../assets/aws.png" alt="resume pic 2">
    </div>
    <p>
      I have experience with many modern technologies, such as AWS, Azure, Vue, and React.
      Upon completion of my master's degree, I will pursue certifications offered by Amazon, Azure, Okta, and other
      premiere platforms.
    </p>
  </section>
  <section class="section-about">
    <p>
      I am always working new projects. To see my latest projects, view the <a href="/"><b>personal projects section of my resume</b></a>.
      The information in the footer will update to highlight my latest creations.
    </p>
  </section>
</div>
</template>

<style scoped>

@media screen and (min-width: 650px) {
  .about {
    margin: 0 7rem;
  }
}

.div-images {
  height: 100%;
  width: 200px;
  display: inline-block;
  padding: 0 15px 0 15px;
}

.i2 {
  top: 50%;
}

.pic1 {
  float: right;
  padding: 0;
}

.pic2 {
  float: left;
}

.images {
  position: relative;
  max-height: 180px;
  max-width: 180px;
  border-radius: 15px;
}
</style>

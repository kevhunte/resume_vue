<template>
<div class="home page col-m4-4" id="home">
  <h1>Creator. Explorer. Engineer</h1>

  <div id="sumContainer" class="containers">
    <p>
      I describe myself as a security conscious fullstack developer. <br />
      Java, C#, Python, and JavaScript are some of the many tools I have experience with.
      With Vue and React as my frontend frameworks of choice, developing secure fullstack applications are where my skills shine.
    </p>
    <p>
      For more information about my experience, education, and personal projects, view below.
    </p>
  </div>

  <div id="experienceContainer" class="containers">
    <h2 class="resHeaders">Experience</h2>

    <div class="titles">
      <h4>Software Test Engineer, Con Edison</h4>
      <h5>August 2019 - Current</h5>
      <ul>
        <li>Lead of functional testing for Con Edison’s Outage API and Complex Billing initiative</li>
        <li>Developed and refactored unit tests for UI and REST API to validate business functionality</li>
        <li>Skilled with Selenium, C#, and Postman in an Agile SaFe environment</li>
      </ul>
    </div>
    <div class="titles">
      <h4>Software Test Engineer, Real-Time Technology Solutions</h4>
      <h5>June 2019 - Current</h5>
      <ul>
        <li>Verified application functionality, usability, scalability and data validity</li>
        <li>Performed regression, script, and user acceptance testing</li>
        <li>Developed and maintained reusable code libraries in the Java and C# programming languages</li>
      </ul>
    </div>
    <div class="titles">
      <h4>Full Stack Developer, University of Connecticut</h4>
      <h5>August 2018 - May 2019</h5>
      <ul>
        <li>Created a server-less web application UI using HTML5, JQuery, and Bootstrap.</li>
        <li>Integrated REST API with AWS API Gateway and Lambda written in Python</li>
        <li>Stored and retrieved user data using DynamoDB and REST API</li>
      </ul>
    </div>
    <div class="titles">
      <h4>Android Developer, University of Connecticut</h4>
      <h5>May 2018 - September 2018</h5>
      <ul>
        <li>Refactored and developed an Android 8.0 exercise application.</li>
        <li>Implemented Google's Activity Recognition/Transition API.</li>
        <li>Transmitted data to an Amazon EC2 Virtual Server</li>
      </ul>
    </div>

  </div>

  <div id="skillsContainer" class="containers">
    <h2 class="resHeaders">Skills</h2>
    <p style="margin: 0;"> <b>Skilled in:</b> Python, Java, C#, JavaScript, HTML, CSS, SQL, NoSQL, Vue.JS, AWS, Node</p>
    <p style="margin: 0;"> Object-oriented design, functional programming, UI and service automation, and Server-Side development</p>
    <p style="margin: 0;"> <b>Knowledgeable in:</b> React.JS, C++ </p>
  </div>

  <div id="projectsContainer" class="containers">
    <h2 class="resHeaders">Personal Projects</h2>
    --- Use API here ---
  </div>

  <div id="edContainer" class="containers">
    <h2 class="resHeaders">Education</h2>
    <div class="titles" style="">
      <h4>New York Institute of Technology</h4>
      <h5>Current</h5>
    </div>
    <p>Pursuing a Master of Science in Cybersecurity</p>
    <div class="titles" style="">
      <h4>University of Connecticut</h4>
      <h5>May 2019</h5>
    </div>
    <p>Graduate with a B.S.E in Computer Science and Engineering, concentrated in Cybersecurity</p>
  </div>

  <div id="certsContainer" class="containers">
    <h2 class="resHeaders">Certifications</h2>
    <div>
      <div class="titles" style="">
        <h4>CompTIA Security+</h4>
        <h5>July 2019</h5>
      </div>
      <p style="margin: 0;"> <b>Credential ID:</b><br /> ZZQKBKLMZDB41ZCD</p>
      <p style="margin: 0;">This certification covers professional security concepts in the domains of:</p>
      <ul>
        <li>Threats, Attacks and Vulnerabilities </li>
        <li>Technologies and Tools </li>
        <li>Architecture and Design </li>
        <li>Identity and Access Management </li>
        <li>Risk Management </li>
        <li>Cryptography and Public Key Infrastucture </li>
      </ul>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data() {
    return {};
  },
  mounted: function() {},
  methods: {}
};
</script>

<style scoped>
.home {}

.resHeaders {
  display: flex;
}


.titles,
h4,
h5 {
  margin-bottom: 0;
}


.containers {
  margin: 1rem 0;
}

h5 {
  margin: 0;
  text-decoration: underline;
}

#certsContainer>div>ul {
  align-items: center;
}

#certsContainer>div>ul>li {
  list-style: none;
  /*display: table-cell;*/
}
</style>

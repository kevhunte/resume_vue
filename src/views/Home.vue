<template>
<div class="home page col-m4-4" id="home">
  <h1>Creator. Explorer. Engineer.</h1>

  <div id="sumContainer" class="containers" style="margin: 0 1rem;">
    <p>
      I describe myself as a security conscious, fullstack developer / tester. <br />
      Java, C#, Python, and JavaScript are some of the many tools I have experience with.
      With Vue and React as my frontend frameworks of choice, developing secure fullstack applications are where my skills shine.
    </p>
    <p>
      For more information about my experience, education, and personal projects, view below.
    </p>
    <a href="/Resume.pdf" target="_blank" rel="noopener"><button type="button" name="button">Resume</button></a>
    <a href="https://www.linkedin.com/in/kevin-hunte-818759115/" target="_blank" rel="noopener"><button type="button" name="button">Contact</button></a>
  </div>

  <div id="experienceContainer" class="containers">
    <h2 class="resHeaders">Experience</h2>

    <div class="titles">
      <h3>Software Test Engineer, Con Edison</h3>
      <h5>August 2019 - Current. New York, NY</h5>
      <ul>
        <li>Lead of functional testing for Con Edison’s Outage API and Complex Billing initiative</li>
        <li>Developed and refactored unit tests for UI and REST API to validate business functionality</li>
        <li>Skilled with Selenium, C#, and JavaScript in an Agile SaFe environment</li>
      </ul>
    </div>
    <div class="titles">
      <h3>Software Test Engineer, Real-Time Technology Solutions</h3>
      <h5>June 2019 - Current. New York, NY</h5>
      <ul>
        <li>Verified application functionality, usability, scalability and data validity</li>
        <li>Performed regression, script, and user acceptance testing</li>
        <li>Developed and maintained reusable code libraries in the Java and C# programming languages</li>
      </ul>
    </div>
    <div class="titles">
      <h3>Full Stack Developer, University of Connecticut</h3>
      <h5>August 2018 - May 2019. Storrs, CT</h5>
      <ul>
        <li>Created a server-less web application UI using HTML5, JQuery, and Bootstrap.</li>
        <li>Integrated REST API with AWS API Gateway and Lambda written in Python</li>
        <li>Stored and retrieved user data using DynamoDB and REST API</li>
      </ul>
    </div>
    <div class="titles">
      <h3>Android Developer, University of Connecticut</h3>
      <h5>May 2018 - September 2018. Storrs, CT</h5>
      <ul>
        <li>Refactored and developed an Android 8.0 exercise application.</li>
        <li>Implemented Google's Activity Recognition/Transition API.</li>
        <li>Sent and received data to API hosted on Amazon EC2</li>
      </ul>
    </div>

  </div>

  <div id="skillsContainer" class="containers">
    <h2 class="resHeaders">Skills</h2>
    <p style="margin: 0;"> <b>Skilled in:</b> Python, Java, C#, JavaScript, HTML, CSS, SQL, NoSQL, Vue.JS, AWS, Node</p>
    <p style="margin: 0;"> Object-oriented design, functional programming, UI and service automation, and Server-Side development</p>
    <p style="margin: 0;"> <b>Knowledgeable in:</b> React.JS, Express, C++ </p>
  </div>

  <div id="projectsContainer" class="containers">
    <h2 class="resHeaders">Personal Projects</h2>
    <div id="projects" v-if="this.projects" class="animated fadeIn">
      <div :key="p.key" v-for="p in this.projects" class="titles project">
        <h3>{{p.Text}}</h3>
        <a v-if="p.URL" :href="p.URL" target="_blank" rel="noopener"><img src="../assets/github.svg" alt="" /> </a>
        <a v-if="p.hosted" :href="p.hosted" target="_blank" rel="noopener"><img src="../assets/internet.png" alt="" /> </a>
        <ul style="margin-top:0;">
          <li>{{p.Blurb}}</li>
        </ul>
      </div>
    </div>
  </div>

  <div id="edContainer" class="containers">
    <h2 class="resHeaders">Education</h2>
    <div class="titles" style="">
      <h3>New York Institute of Technology</h3>
      <h5>Current</h5>
    </div>
    <p>Pursuing a Master of Science in Cybersecurity</p>
    <div class="titles" style="">
      <h3>University of Connecticut</h3>
      <h5>May 2019</h5>
    </div>
    <p>Graduated with a B.S.E in Computer Science and Engineering, concentrated in Cybersecurity</p>
  </div>

  <div id="certsContainer" class="containers">
    <h2 class="resHeaders">Certifications</h2>
    <div>
      <div class="titles" style="">
        <h3>CompTIA Security+</h3>
        <h5>July 2019</h5>
      </div>
      <p style="margin: 0;"> <b>Credential ID:</b> ZZQKBKLMZDB41ZCD</p>
      <p style="margin: 0;">The Security+ certification covers professional security concepts in the domains of:</p>
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
import projectsURL from '@/endpoints'
export default {
  name: 'home',
  components: {},
  data() {
    return {
      projects: []
    };
  },
  mounted: async function() {
    const url = projectsURL; //'https://b5w5u1jr79.execute-api.us-east-1.amazonaws.com/Dev';
    const response = await fetch(url);
    const data = await response.json();
    this.projects = data.body;
  },
  methods: {}
};
</script>

<style scoped>
.home {}

img {
  width: 2rem;
}

button {
  padding: 10px;
  border-radius: 10px;
  font-weight: 600;
  margin: 0 5px;
}

button:hover {
  background-color: #42b983;
  color: white;
  font-weight: 600;
}

.resHeaders {
  display: flex;
  font-variant: petite-caps;
}

#projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.project {
  max-width: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: baseline;
}


.titles,
h3,
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

ul {
  padding: 0;
}

li {
  list-style: none;
  padding: 1rem 0;
  /*display: table-cell;*/
}
</style>

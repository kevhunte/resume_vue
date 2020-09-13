<template>
<div class="home page col-m4-4" id="home">
  <h1>Creator. Explorer. Engineer.</h1>

  <div id="sumContainer" class="containers" style="margin: 0 3rem;">
    <p>
      A security conscious fullstack developer and quality assurance professional. <br />
      Experienced with Java, C#, Python, and JavaScript.<br />
      With Vue and React as my frontend frameworks of choice, developing secure fullstack applications are where my skills shine.
    </p>
    <p>
      For more information about my <a href="#experienceContainer">experience</a>, <a href="#edContainer">education</a>, and <a href="#projectsContainer">personal projects</a>, view below.
    </p>
    <a href="/Resume.pdf" target="_blank" rel="noopener"><button type="button" name="button">Resume</button></a>
    <a href="https://www.linkedin.com/in/kevin-hunte-818759115/" target="_blank" rel="noopener"><button type="button" name="button">Contact</button></a>
  </div>

  <div id="experienceContainer" class="containers">
    <h2 class="resHeaders">Experience</h2>

    
    <div class="titles">
      <h3>Senior Software Test Engineer, Real-Time Technology Solutions</h3>
      <h5>June 2019 - Present. New York, NY</h5>
      <ul>
        <li>Created and execute test plans for client features</li>
        <li>Developed and maintain automated integration and end-to-end tests</li>
        <li>Managed software deployment stages of CD/CI pipelines</li>
        <li>Mentored and assist Junior Test Engineers</li>
      </ul>

      <h5>Con Edison, Digital Customer Experience (DCX). August 2019 - Present</h5>
      <ul>
        <li>Lead of functional testing for Con Edison’s billing and usage data visualization effort</li>
        <li>Point of contact for outage functional testing with DCX's Report Outage API</li>
        <li>Major contributor to integration test codebase for Con Edison's Platform and Services team</li>
      </ul>

      <h5>Delta Dental, Work Item Management Migration. June - July 2019</h5>
      <ul>
        <li>Migrated collection from HP's ALM to Microsoft's TFS (1 million+ items)</li>
        <li>Consumed Microsoft's TFS / Azure DevOps API in the .NET framework</li>
      </ul>
    </div>
    <div class="titles">
      <h3>Software Developer, University of Connecticut</h3>
      <h5>May 2018 - May 2019. Storrs, CT</h5>
      <ul>
        <li>LifeRhythm REU Fellow. Sole undergraduate Android developer</li>
        <li>Team Lead for Litigation Database Project. Lead developer for platform and services</li>
      </ul>

      <h5>Full Stack Developer. August 2018 - May 2019</h5>
      <ul>
        <li>Created a server-less web application using Amazon Web Services</li>
        <li>Developed and integrated REST API with API Gateway and Lambda</li>
        <li>Stored and retrieved user data using DynamoDB and a HTML5, Bootstrap, and JQuery frontend</li>
      </ul>

      <h5>Android Developer. May - September 2018</h5>
      <ul>
        <li>Refactored and developed LifeRhythm exercise application to Android 8.0.</li>
        <li>Integrated Google's Activity Recognition/Transition API.</li>
        <li>Consumed REST API hosted on AWS EC2</li>
      </ul>
    </div>

  </div>

  <div id="skillsContainer" class="containers">
    <h2 class="resHeaders">Skills</h2>
    <p style="margin: 0;"> <b>Skilled in:</b> Python, Java, C#, JavaScript, HTML, CSS, SQL, NoSQL, Vue.JS, AWS, Node</p>
    <p style="margin: 0;"> Object-oriented design, functional programming, end-to-end and service test automation, and full stack development</p>
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
    <div id="projects" v-else-if="!this.projects" class="animated fadeIn">
      <p>View my projects at the GitHub repository located <a href="https://github.com/kevhunte" target="_blank" rel="noopener">here</a></p>
    </div>
  </div>

  <div id="edContainer" class="containers">
    <h2 class="resHeaders">Education</h2>
    <div class="titles" style="">
      <h3>New York Institute of Technology</h3>
      <h5>Present</h5>
      <h5>GPA: 3.3</h5>
    </div>
    <p>Pursuing a Master of Science in Cybersecurity</p>
    <p>Notable classes to date: Algorithm Concepts, OS Security, Network Security, Cryptography</p>
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
    const url = projectsURL;
    try
    {
      if(sessionStorage.getItem('projects'))
      {
        this.projects = JSON.parse(sessionStorage.getItem('projects'));
      }
      else
      {
        const response = await fetch(url);
        const data = await response.json();
        sessionStorage.setItem('projects', JSON.stringify(data.body));
        this.projects = data.body;
      }
      
    }
    catch (e)
    {
      console.error(`Error calling projects endpoint: \n${e}`);
    }
  },
  methods: {}
};
</script>

<style scoped>
/*.home {}*/

img {
  width: 2rem;
}

button {
  padding: 10px;
  border-radius: 10px;
  font-weight: 600;
  margin: 0 5px;
  background-color: white;
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

@media screen and (min-width: 650px) {
  .resHeaders {
    margin: 0 calc(25% - 10px);
  }
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

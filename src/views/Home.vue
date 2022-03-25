<template>
<div class="home page col-m4-4" id="home">
  <h1>Creator. Explorer. Engineer.</h1>

  <div id="sumContainer" class="containers" style="margin: 0 3rem;">
    <p>
      Security conscious fullstack developer. <br />
      Experienced with Java, C#, Python, and JavaScript.<br />
      Skilled with Vue, React, Node, AWS, Git, SQL, and NoSQL.
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
      <h3>Software Engineer, Gopuff</h3>
      <h5>Warehousing, {{'Packing & Retail'}}. May 2021 - Current. New York, NY</h5>
      <ul>
        <li>Designed, built and maintained warehouse management systems</li>
        <li>Participated in cross-functional projects in a lean environment</li>
        <li>Translated verbal requirements into written use cases and testable stories</li>
      </ul>
    </div>
    
    <div class="titles">
      <h3>Software Development Engineer in Test, Real-Time Technology Solutions</h3>
      <h5>Con Edison, Digital Customer Experience (DCX). August 2019 - April 2021. New York, NY</h5>
      <ul>
        <li>Lead of functional testing for Con Edison’s billing and usage data visualization effort</li>
        <li>Point of contact for outage functional testing with DCX's Report Outage System</li>
        <li>Major contributor to integration test codebase for Platform and Services team</li>
      </ul>

      <h5>Delta Dental. June - July 2019</h5>
      <ul>
        <li>Migrated a work item collection from HP's ALM to Microsoft's TFS (1 million+ items)</li>
        <li>Consumed Microsoft's TFS / Azure DevOps API in the .NET framework</li>
      </ul>
    </div>
    <div class="titles">
      <h3>Software Developer, University of Connecticut</h3>
      <h5>Senior Design Project. August 2018 - May 2019</h5>
      <ul>
        <li>Created a server-less web application using Amazon Web Services</li>
        <li>Developed and integrated REST API with API Gateway and Lambda</li>
        <li>Stored and retrieved user data using DynamoDB and a HTML5, Bootstrap, and JQuery frontend</li>
      </ul>

      <h5>LifeRhythm REU. May - September 2018</h5>
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
    <p style="margin: 0;"> Object-oriented design, functional programming, test automation, and full stack development</p>
    <p style="margin: 0;"> <b>Knowledgeable in:</b> React.JS, Express, C++ </p>
  </div>

  <div id="projectsContainer" class="containers">
    <h2 class="resHeaders">Personal Projects</h2>
    <div id="projects" v-if="this.projects" class="animated fadeIn">
      <div :key="idx" v-for="(p, idx) in this.projects" class="titles project">
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
      <h5>December 2021</h5>
    </div>
    <p>M.S. in Cybersecurity</p>
    <div class="titles" style="">
      <h3>University of Connecticut</h3>
      <h5>May 2019</h5>
    </div>
    <p>B.S.E in Computer Science and Engineering, concentrated in Cybersecurity</p>
  </div>

  <div id="certsContainer" class="containers">
    <h2 class="resHeaders">Certifications</h2>
    <div>
      <div class="titles" style="">
        <h3>CompTIA Security+</h3>
        <h5>July 2019</h5>
      </div>
      <p style="margin: 0;"> <b>Credential ID:</b> ZZQKBKLMZDB41ZCD</p>
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
      //console.error(`Error calling projects endpoint: \n${e}`);
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

@media (min-width: 650px) {
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

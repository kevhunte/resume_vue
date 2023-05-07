<template>
<div class="home page" id="home">
  <!-- add a button before displaying content -->
  <h1>Creator. Explorer. Engineer.</h1>

  <div id="sumContainer" class="containers" style="margin: 0 3rem;">
    <p>
      Security conscious, full stack developer. <br />
      Language and cloud agnostic.<br />
    </p>
    <p>
      Click each option to learn more about my <router-link to="/experience">experience</router-link>, <router-link to="/education">education</router-link>, and <router-link to="/projects">projects</router-link>.
    </p>
    <a href="https://www.linkedin.com/in/kevin-hunte-818759115/" target="_blank" rel="noopener"><button type="button" name="button">Contact</button></a>
  </div>

  <div id="skillsContainer" class="containers">
    <h2 class="resHeaders">Skills</h2>
    <p style="margin: 0;"> <b>Skilled in:</b> Java, JavaScript, TypeScript, Golang, Python, C#, SQL, NoSQL</p>
    <p style="margin: 0;"> Full stack development, test automation, security hardening</p>
    <p style="margin: 0;"> <b>Knowledgeable in:</b> AWS and Azure infrastructure, CI/CD processes </p>
  </div>

</div>
</template>

<script>
import { navigateTo } from '@/util/utils'
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {
    navigateTo(url) {
      return navigateTo(url)
    }
  }
};
</script>

<style scoped>
/*.home {}*/

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
</style>

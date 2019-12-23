<template>
<div id="footer">
  <h3> {{header1}}</h3>
  <ul>
    <li><a href="https://www.linkedin.com/in/kevin-hunte-818759115/" target="_blank" rel="noopener">LinkedIn</a></li>
    <li><a href="https://github.com/kevhunte" target="_blank" rel="noopener">Github</a></li>
  </ul>
  <h3 v-if="projects.length > 0">Recent Projects</h3>
  <ul>
    <!--populate li with each project in list - p.URL and p.Text-->
    <li><a v-for="p in projects" :key=p href="#">Core Docs</a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      projects: []
    }
  },
  props: {
    header1: String,
    header2: String
  },
  mounted: function() {
    this.getProjects();
  },
  methods: {
    getProjects: function() { //add async modifier when done
      //fetch data and put in this.projects
      console.log('got data');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

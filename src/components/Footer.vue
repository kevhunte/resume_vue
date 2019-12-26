<template>
<div id="footer">
  <h3> {{header1}}</h3>
  <ul>
    <li class="static"><a href="https://www.linkedin.com/in/kevin-hunte-818759115/" target="_blank" rel="noopener">LinkedIn</a></li>
    <li class="static"><a href="https://github.com/kevhunte" target="_blank" rel="noopener">Github</a></li>
  </ul>
  <h3 v-if="projects.length > 0">Recent Projects</h3>
  <ul>
    <!--populate li with each project in list - p.URL and p.Text-->
    <li class="dynamic" v-for="p in projects" :key=p.id><a :href="p.URL" target="_blank" rel="noopener">{{p.Text}}</a></li>
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
    header2: String,
    url: String
  },
  mounted: function() {
    this.getProjects();
  },
  methods: {
    getProjects: async function() {
      const url = this.url;
      //console.log(url);
      try {
        const response = await fetch(url);
        const data = await response.json();
        //console.log('body: ', data.body);
        this.projects = data.body;
      } catch (e) {
        //console.error(e);
      }
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

.static {
  display: inline-block;
  margin: 0 10px;
}

.dynamic {
  margin: 0 10px;
  padding: 0 0 10px 0;
}

a {
  color: #42b983;
}
</style>

<template>
<div class="page">
    <div id="projectsContainer" class="containers">
    <h2 class="resHeaders">Personal Projects</h2>
    <div v-if="this.projects" class="animated fadeIn projects">
      <div :key="idx" v-for="(p, idx) in this.projects" class="titles project">
        <h3>{{p.Text}}</h3>
        <a v-if="p.URL" :href="p.URL" target="_blank" rel="noopener"><img src="../assets/github.svg" alt="" /> </a>
        <a v-if="p.hosted" :href="p.hosted" target="_blank" rel="noopener"><img src="../assets/internet.png" alt="" /> </a>
        <ul style="margin-top:0;">
          <li>{{p.Blurb}}</li>
        </ul>
      </div>
    </div>
    <div v-else-if="!this.projects" class="animated fadeIn projects">
      <p>View my projects at the GitHub repository located <a href="https://github.com/kevhunte" target="_blank" rel="noopener">here</a></p>
    </div>
  </div>
</div>
</template>

<script>
import projectsURL from '@/endpoints'
export default {
    name: 'Projects',
    data() {
        return {
        projects: []
        }
    },
    beforeMount() {
        this.getProjects()
    },
    methods: {
        async getProjects() {
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
        }
    }
}
</script>

<style scoped>

li {
  list-style: none;
  padding: 1rem 0;
}

ul {
  padding: 0;
}

img {
  width: 2rem;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 calc(15% - 10px);
}

.project {
  max-width: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: baseline;
}

</style>
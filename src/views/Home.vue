<template>
  <div class="home page" id="home">
    <div style="height: 4rem"></div>
    <h1 :style="{ color: `#${currentBackgroundColor}` }">
      Creator. Explorer. Engineer.
    </h1>
    <button
      type="button"
      name="button"
      @click="
        () => {
          showContact = !showContact;
        }
      "
    >
      Contact
    </button>
    <div
      v-if="showContact"
      style="padding-top: 0.5rem; height: 2rem"
      class="animated slideInDown"
    >
      <a
        href="https://www.linkedin.com/in/kevin-hunte-818759115/"
        target="_blank"
        rel="noopener"
        ><img src="../assets/linkedInIcon.jpeg" style="width: 2rem"
      /></a>
    </div>
    <div v-else style="padding-top: 0.5rem; height: 2rem"></div>

    <div style="height: 10rem; margin-top: 1.5rem"></div>

    <div id="sumContainer" class="containers" style="margin: 0 3rem">
      <h2>Security conscious, full stack developer.</h2>
      <h4>Language and cloud agnostic.</h4>

      <div id="skillsContainer" style="padding: 2rem 0" class="containers">
        <div>
          Skilled in
          <a style="text-weight: 3px" class="animated fadeIn">{{
            currentSkill
          }}</a>
        </div>
      </div>

      <div style="height: 10rem; margin-top: 1.5rem"></div>
      
      <p>
        Learn more about my
        <router-link to="/education">education</router-link>,
        <router-link to="/projects">projects</router-link> and
        <router-link to="/services">services</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      showContact: false,
      skills: [
        "Java",
        "JavaScript",
        "TypeScript",
        "Golang",
        "Python",
        "C#",
        "SQL",
        "NoSQL",
        "Full stack development",
        "test automation",
        "security hardening",
        "AWS",
        "Azure",
        "CI/CD",
        "React",
        "Vue",
      ],
      skillIdx: 0,
      skillsTimer: null,
      skillsInterval: 2500, // in ms
      backgroundColors: ["7F6A93", "FF9B71", "95A78D", "2B3A67", "B56B45"],
      backgroundColorIdx: 0,
      backgroundColorTimer: null,
      backgroundColorInterval: 5000, // in ms
    };
  },
  mounted() {
    this.initSkillsTimer();
    this.initBackgroundColorTimer();
  },
  computed: {
    currentSkill() {
      return this.skills[this.skillIdx];
    },
    currentBackgroundColor() {
      return this.backgroundColors[this.backgroundColorIdx];
    },
  },
  methods: {
    updateSkillsIdx() {
      this.skillIdx = (this.skillIdx + 1) % this.skills.length;
    },
    updateBackgroundColorIdx() {
      this.backgroundColorIdx =
        (this.backgroundColorIdx + 1) % this.backgroundColors.length;
    },
    initSkillsTimer() {
      if (!this.skillsTimer) {
        this.skillsTimer = setInterval(
          () => this.updateSkillsIdx(),
          this.skillsInterval
        );
      }
    },
    initBackgroundColorTimer() {
      if (!this.backgroundColorTimer) {
        this.backgroundColorTimer = setInterval(
          () => this.updateBackgroundColorIdx(),
          this.backgroundColorInterval
        );
      }
    },
  },
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
  background-color: #2B3A67;
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

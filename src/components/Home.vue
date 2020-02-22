<template>
  <div>
    <!-- components -->
    <Landing />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
</template>
<script>
import Landing from "./Landing.vue";
import About from "./About.vue";
import Skills from "./Skills.vue";
import Projects from "./Projects.vue";
import Contact from "./Contact.vue";

export default {
  name: "Home",
  components: {
    Landing,
    About,
    Skills,
    Projects,
    Contact
  }
};
</script>
<style lang="stylus" scoped></style>
<template>
  <div id="landing" class="wrapper">
    <h1>Front End Developper, UX/UI Designer, Javascript Freak</h1>
  </div>
</template>
<script>
export default {
  name: "Landing"
};
</script>
<style scoped>
html {
  position: relative;
  overflow-x: hidden !important;
}

* {
  box-sizing: border-box;
}

body {
  font-family: "Quicksand", sans-serif;
  color: #324e63;
}

a,
a:hover {
  text-decoration: none;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

.wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 50px 20px;
  padding-top: 100px;
  display: flex;
}
@media screen and (max-width: 768px) {
  .wrapper {
    height: auto;
    min-height: 100vh;
    padding-top: 100px;
  }
}

h1 {
  font-weight: bold;
  align-items: center;
  font-size: 24px;
}
</style>
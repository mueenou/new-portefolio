<template>
  <div id="landing" class="wrapper">
        <img src="../assets/images/LOGO_Mueen.png" alt="landing-main-logo" width="300px" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">Front End Developper, UX/UI Designer, Javascript Freak</h1>
    <span data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
     >" Trop de compétences cause la précipitation mais une bonne équipe propose la meilleure solution "</span> 
    <p class="landing-introduction" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">Passionné par l'art depuis l'enfance, j'adore admirer la beauté artistique et la créativité. J'ai découvert et pris goût du développement front end davantage malgrès mes connaissances full stack. Je vous propose aujourd'hui mes compétences sur ce domaine, sur la gestion de projet mais surtout ma bonne humeur. Je vous laisse me découvrir, bonne visite !</p>
    <p class="bounce"><i class="arrow down"></i></p>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1230px !important;
  width: 100%;
  height: auto;
  min-height: 100vh;
  text-align: center;
}
@media screen and (max-width: 768px) {
  .wrapper {
    height: auto;
    min-height: 100vh;
    padding-top: 100px;
  }
}

.landing-logo-title {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.landing-introduction {
    max-width: 750px;
    width: 100%;
    line-height: 25px;
    text-align: justify;
}
span {
    font-style: italic;
    font-weight: bold;
    margin-bottom: 15px;
}
h1 {
  font-weight: bold;
  align-items: center;
  font-size: 28px;
  margin: 0 auto;
  margin-bottom: 30px;
  color: rgb(75, 65, 68);
}
.bounce {
  position: absolute;
  bottom: 30px;
}
i {
  border: solid rgb(141, 19, 211);
  border-width: 0 10px 10px 0;
  display: inline-block;
  padding: 20px;
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.bounce {
	position: absolute;
	bottom: 30px;
	left: 50% ;
	width: 60px;
	height: 60px ;
	margin-left:-30px;
	-webkit-border-radius:50%;
	-moz-border-radius:50%;
	-ms-border-radius:50%;
	border-radius:50%;
	animation: bounce 2s infinite;
	-webkit-animation: bounce 2s infinite;
	-moz-animation: bounce 2s infinite;
	-o-animation: bounce 2s infinite;
}

@-webkit-keyframes bounce {
	0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);}	
	40% {-webkit-transform: translateY(-30px);}
	60% {-webkit-transform: translateY(-15px);}
}
 
@-moz-keyframes bounce {
	0%, 20%, 50%, 80%, 100% {-moz-transform: translateY(0);}
	40% {-moz-transform: translateY(-30px);}
	60% {-moz-transform: translateY(-15px);}
}
 
@-o-keyframes bounce {
	0%, 20%, 50%, 80%, 100% {-o-transform: translateY(0);}
	40% {-o-transform: translateY(-30px);}
	60% {-o-transform: translateY(-15px);}
}
@keyframes bounce {
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
}
</style>
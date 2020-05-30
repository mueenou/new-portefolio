<template>
  <div id="myNavbar" class="topnav">
    <a href="#landing" @click="activeLink" v-smooth-scroll="{duration: 1000, offset: -50}">Home</a>
    <a href="#about" @click="activeLink" v-smooth-scroll="{duration: 1000, offset: -50}">About</a>
    <a href="#skills" @click="activeLink" v-smooth-scroll="{duration: 1000, offset: -50}">Skills</a>
    <a href="#projects" @click="activeLink" v-smooth-scroll="{duration: 1000, offset: -50}">Projects</a>
    <a href="#contact" @click="activeLink" v-smooth-scroll="{duration: 1000, offset: -50}">Contact</a>
    <a href="javascript:void(0);" class="icon" @click="myFunction()">
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 469.333 469.333"
        style="enable-background:new 0 0 469.333 469.333;"
        xml:space="preserve"
      >
        <g>
          <g>
            <g>
              <path
                d="M53.333,106.667H416c29.417,0,53.333-23.927,53.333-53.333S445.417,0,416,0H53.333C23.917,0,0,23.927,0,53.333
				S23.917,106.667,53.333,106.667z"
              />
              <path
                d="M416,181.333H53.333C23.917,181.333,0,205.26,0,234.667S23.917,288,53.333,288H416c29.417,0,53.333-23.927,53.333-53.333
				S445.417,181.333,416,181.333z"
              />
              <path
                d="M416,362.667H53.333C23.917,362.667,0,386.594,0,416s23.917,53.333,53.333,53.333H416
				c29.417,0,53.333-23.927,53.333-53.333S445.417,362.667,416,362.667z"
              />
            </g>
          </g>
        </g>
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
      </svg>
    </a>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      scroll: false,
      x: document.getElementsByClassName("topnav")
    };
  },
  methods: {
    handleScroll() {
      var scroll = window.pageYOffset;
      console.log(scroll);
      if (window.innerWidth > 752) {
        if (scroll >= 200) {
          this.x[0].classList.add("topnav-scroll");
        } else {
          this.x[0].classList.remove("topnav-scroll");
        }
      }
    },
    activeLink(e) {
      console.log(e.target.parentNode.children);
      if (this.x[0].className === "topnav responsive") {
        this.x[0].classList.remove("responsive");
      } else {
        this.x[0].className = "topnav topnav-scroll";
      }
      e.target.parentNode.children.forEach(node => {
        node.classList.remove("active");
      });
      e.target.classList.add("active");
    },
    myFunction() {
      console.log(this.x[0]);
      if (this.x[0].className === "topnav") {
        this.x[0].className += " responsive";
      } else if (
        this.x[0].className === "topnav" ||
        this.x[0].className === "topnav topnav-scroll"
      ) {
        this.x[0].className = "topnav .responsive";
      } else {
        this.x[0].className = "topnav";
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Krona+One&display=swap");
.topnav {
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  max-height: 80px;
  transition: 0.7s;
  position: fixed;
  top: 0;
  z-index: 9999;
  font-family: "Krona One", cursive;
  opacity: 0.98;
}

.topnav a {
  float: left;
  display: block;
  color: rgb(158, 158, 158);
  font-size: 12px;
  padding: 30px 0;
  transition: 0.5s;
  margin: 0 40px;
  text-align: center;
}

.topnav-scroll {
  box-shadow: 0px 0px 2px rgb(192, 192, 192);
  background-color: #ffffff;
}

.topnav a:hover {
  color: #5d5c5c;
}

.topnav a.active {
  color: rgb(51, 50, 50);
}

.topnav .icon {
  display: none;
}

svg {
  width: 20px;
  opacity: 0.4;
}

svg:hover {
  opacity: 0.9;
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 752px) {
  .topnav {
    background-color: #ffffff;
    max-height: none;
    box-shadow: 0px 0px 10px rgb(192, 192, 192);
  }
  .topnav a {
    display: none;
  }

  .topnav a.icon {
    display: block;
  }
  .topnav.responsive {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
  }
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
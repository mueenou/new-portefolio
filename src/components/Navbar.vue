<template>
    <div id="navbar" :class="{ 'navbar-scroll': scroll }">
        <img id="logo-img" src="../assets/images/LOGO_Mueen.png" alt="logo" width="150px">
        <ul>
            <li @click="activeLink">
                <a href="#landing">Home</a>
            </li>
            <li @click="activeLink">
                <a href="#about" >About</a>
            </li>
            <li @click="activeLink">
                <a href="#skills">Skills</a>
            </li>
            <li @click="activeLink">
                <a href="#projects">Projects</a>
            </li>
            <li @click="activeLink">
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    data() {
        return {
            scroll: false,
        }
    },
    methods: {
        handleScroll () {
            var scroll = window.pageYOffset;
            if(scroll >= 200) {
                this.scroll = true;
            } else {
                this.scroll = false;
            }
        },
        activeLink(e) {
            console.log(e.target);
            e.target.parentNode.parentNode.children.forEach(node => {
                node.children[0].classList.remove('active');
            });
            e.target.classList.add('active');
        },
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Squada+One&display=swap');
#navbar {
    line-height: 80px;
    height: 100px;
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 100%;
    transition: 0.7s;
    font-family: 'Squada One', cursive;
}

.navbar-scroll {
    box-shadow: 0px 0px 10px rgb(192, 192, 192);
    background-color: white;
}

#navbar ul {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    float: right;
}

ul li {
    margin: 0 20px;
}

ul li a {
    color: rgb(158, 158, 158);
    font-size: 20px;
    letter-spacing: 4px;
    line-height: 100px;
    transition: 0.5s;
}

ul li a:hover {
    color: #3d3d3d;
}

.active {
    color: black;
}
</style>
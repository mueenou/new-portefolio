<template>
    <div id="projects">
        <div class="projects-card-container">
            <div class="project-card"></div>
            <div class="project-card"></div>
            <div class="project-card"></div>
            <div class="project-card"></div>
            <div class="project-card"></div>
            <div class="project-card"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Projects',
}
</script>
<style scoped>
h1 {
    font-size: 50px;
    text-align: center;
}
.projects-card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
.project-card {
    width: 300px;
    height: 300px;
    margin: 50px;
    border-radius: 5px;
    background-color: rgb(247, 240, 240);
    transition: 0.9s;
}
.project-card:hover {
    box-shadow: 0 1px 50px rgba(0, 0, 0, 0.15);
    background-color: #FFFFFF;
    cursor: pointer;
}
</style>
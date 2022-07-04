<script>
export default {
    data() {
        return {
            projectNameFormatted: this.projectName.toLowerCase().replace(/ /, ""),
        }
    },
    props: {
        projectName: String,
        projectLink: String,
    }
}
</script>

<template>
    <!-- <p v-if="loading">Loading...</p> -->
    <a class="project" :id="projectNameFormatted" :href="projectLink">
        <figure>
            <img :src="`../src/assets/images/${projectNameFormatted}.png`" height="200" width="200">
            <figcaption>{{ projectName }}</figcaption>
        </figure>
    </a>
</template>
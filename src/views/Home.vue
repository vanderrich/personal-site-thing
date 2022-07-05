    <script lang="ts">
    import { RouterLink } from "vue-router";
    </script>

<template>
    <div class="centerChilds">
        <div id="home">
            <img width="200" length="200" src="@\assets\images\baked_potat.png" class="pfp" />
            <h1>vanderrich#9982</h1>
            <p>Your local Indonesian nerd/idiot</p>
            <div id="socialMedias" class="centerChilds">
                <a class="socialMedia socialMedia-discord" href="https://discordapp.com/users/709950767670493275"></a>
                <a class="socialMedia socialMedia-github" href="https://github.com/vanderrich"></a>
                <a class="socialMedia socialMedia-twitter" href="https://twitter.com/vanderrich1"></a>
            </div>
            <div id="things" class="centerChilds">
                <router-link to="/projects">Projects</router-link>
                <router-link to="/tools">Tools and Languages</router-link>
            </div>
            <div class="thicc" />
            <p>stop stalking me</p>
        </div>
    </div>
</template>
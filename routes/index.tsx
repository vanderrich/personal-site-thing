import { Head } from "$fresh/runtime.ts";

export default (
    <main>
        <Head>
            <link rel="stylesheet" href="base.css" />
        </Head>
        <div class="centerChilds">
            <div id="home">
                <img width="200" src="images\bakedpotat.png" class="pfp" alt="insert funni img here" />
                <h1>vanderrich#9982</h1>
                <div id="socialMedias" class="centerChilds">
                    <a class="socialMedia socialMedia-discord" href="https://discordapp.com/users/709950767670493275"></a>
                    <a class="socialMedia socialMedia-github" href="https://github.com/vanderrich"></a>
                    <a class="socialMedia socialMedia-wca" href="https://www.worldcubeassociation.org/"></a>
                    <a class="socialMedia socialMedia-twitter" href="https://youtu.be/cnVaL11hW4g"></a>
                </div>
                <div id="things" class="centerChilds">
                    <a href="/projects">Projects</a>
                    <a href="/tools">Tools and Languages</a>
                </div>
                <div class="thicc" />
                <p>stop stalking me</p>
            </div>
        </div>
    </main>
);
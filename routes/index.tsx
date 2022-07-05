/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="base.css" />
            </Head>
            <div id="home" class="centerChilds">
                <img width="200" src="bakedpotat.png" class="pfp" />
                <h1>vanderrich#9982</h1>
                <p>Your local Indonesian nerd/idiot</p>
                <div class="centerChilds" id="socialMedias">
                    <a class="socialMedia socialMedia-discord" href="https://discordapp.com/users/709950767670493275"></a>
                    <a class="socialMedia socialMedia-github" href="https://github.com/vanderrich"></a>
                    <a class="socialMedia socialMedia-twitter" href="https://twitter.com/vanderrich1"></a>
                </div>
                <div id="things" class="centerChilds">
                    <a href="/projects">Projects</a>
                    <a href="/tools">Tools and Languages</a>
                </div>
                <div class="thicc" />
                <p>stop stalking me</p>
            </div>
        </div>
    );
}

/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import Project from "../islands/Project.tsx";

export default function Projects() {
    return (
        <div id="tools">
            <Head>
                <link rel="stylesheet" href="base.css" />
            </Head>
            <div id="languages" class="centerChilds">
                <h2>Languages</h2>
                <h4>Programming Languages</h4>
                <p>TypeScript</p>
                <p>JavaScript</p>
                <p>C#</p>
                <p>Python</p>
                <h4>Irl Languages</h4>
                <p>English 🇬🇧</p>
                <p>Indonesian 🇮🇩</p>
                <p>Chinese (simplified) 🇨🇳</p>
                <p>French fr 🇫🇷 (learning)</p>
                <p>Spanish 🇪🇸 (learning)<p>
            </div>
            <br />
            <div id="tools" class="centerChilds">
                <h2>Tools</h2>
                <p>HTML CSS (yes they're not languages)</p>
                <p>Unity</p>
                <p>VueJS</p>
                <p>Discord.JS</p>
                <p>NodeJS</p>
                <p>VSCode</p>
                <p>GitHub</p>
            </div>
        </div>
    )
}

import { Head } from "$fresh/runtime.ts";
import Project from "../islands/Project.tsx";

export default () => (
    <main>
        <Head>
            <link rel="stylesheet" href="base.css" />
        </Head>
        <div id="projects" class="centerChilds">
            <Project projectName="Potato Bot" projectLink="https://potato-bot.deno.dev" />
            <Project projectName="Vanoah Games" projectLink="https://vanoah.netlify.app" />
        </div>
    </main>
)
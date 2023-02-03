import { Head } from "$fresh/runtime.ts";

export default () => (
    <>
        <Head>
            <link rel="stylesheet" href="base.css" />
        </Head>
        <div>
            <div id="languages" class="centerChilds">
                <h2>Languages</h2>
                <h4>Programming Languages</h4>
                <p>TypeScript</p>
                <p>JavaScript</p>
                <p>C#</p>
                <p>Python</p>
                <h4>Irl Languages</h4>
                <p>English gb 🇬🇧</p>
                <p>Indonesian id 🇮🇩</p>
                <p>Chinese cn 🇨🇳</p>
                <p>French fr 🇫🇷</p>
                <p>Spanish es 🇪🇸 (learning)</p>
                <p>German de 🇩🇪 (learning)</p>
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
    </>
)
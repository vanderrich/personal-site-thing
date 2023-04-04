import { Head } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";

export default () => {
    const [poland, setPoland] = useState(false)
    return (
        <>
            <Head>
                <link rel="stylesheet" href="base.css" />
            </Head>
            <div>
                <div id="languages" class="centerChilds">
                    <h2>Languages</h2>
                    <h4><a href="https://youtu.be/5PEkI81zXpU">Programming Languages</a></h4>
                    <p>TypeScript</p>
                    <p>JavaScript</p>
                    <p>C#</p>
                    <p href="https://youtu.be/NEDvTiP1PXU">Python</p>
                    <p>Kotlin</p>

                    <h4>Irl Languages</h4>
                    <p>English gb 🇬🇧</p>
                    <p>Indonesian id 🇮🇩</p>
                    <p>Chinese cn 🇨🇳</p>
                    <p>French fr 🇫🇷</p>
                    <p>Spanish es 🇪🇸 (learning probably)</p>
                    <p>German de 🇩🇪 (learning maybe)</p>
                    <p>Polish pl 🇵🇱 (learning maybe)</p>
                    <p>Albanian al 🇦🇱 (learning maybe)</p>
                </div>
                <br />
                <div id="tools" class="centerChilds">
                    <h2>Tools</h2>
                    <p>HTML CSS (yes they're not languages)</p>
                    <p><a href="https://youtu.be/N7vnqDgXfcc">Unity</a></p>
                    <p>VueJS</p>
                    <p>Discord.JS</p>
                    <p>NodeJS</p>
                    <p>DenoJS</p>
                    <p>VSCode</p>
                    <p>GitHub</p>
                </div>
            </div>
        </>
    )
}
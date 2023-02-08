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
                    <p><a href="https://youtu.be/I8KSAtos-dk">English gb 🇬🇧</a></p>
                    <p><a href="https://youtu.be/7HkktBcIDzg">Indonesian id 🇮🇩</a></p>
                    <p><a href="https://youtu.be/qGk4E9ss95s">Chinese cn 🇨🇳</a></p>
                    <p><a href="https://youtu.be/vtNJMAyeP0s">French fr 🇫🇷</a></p>
                    <p><a href="https://youtu.be/kJQP7kiw5Fk">Spanish es 🇪🇸 (learning)</a></p>
                    <p><a href="https://youtu.be/ATlila3e9dM">German de 🇩🇪 (learning)</a></p>
                    <p onClick={() => setPoland(true)}>{poland ? "Poland cant into space?" : "Polish pl 🇵🇱 (learning)"}</p>
                    <p><a href="https://youtu.be/TpcKIasAHQ4">Albanian al 🇦🇱 (learning)</a></p>
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
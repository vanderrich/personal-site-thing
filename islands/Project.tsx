/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";

interface ProjectProps {
    projectName: string,
    projectLink: string,
}
export default function Project(props: ProjectProps) {
    const projectNameFormatted = props.projectName.toLowerCase().replace(/ /, "");
    return (
        <div>
            <a class="project" id={projectNameFormatted} href={props.projectLink}>
                <figure>
                    <img src={`images/${projectNameFormatted}.png`} height="200" width="200" />
                    <figcaption>{props.projectName}</figcaption>
                </figure>
            </a>
        </div >
    );
}
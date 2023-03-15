import * as React from 'react';
import styles from './Projects.module.scss'
import {Project} from "../Project/Project";
import stones from "../../assets/work-image-01.jpeg";
import variety from "../../assets/work-image-02.jpeg";
import worth from "../../assets/work-image-03.jpeg";

export function Projects() {
    return (
        <section id="projects" className={styles['projects-section']}>
            <div className={styles['skewer-projects']}></div>
            <Project
                image={stones}
                title="rolling stone"
                text="You know Rolling Stone. It’s the definitive voice in music, politics and culture. It’s a global
                    icon."
            />
            <Project
                image={variety}
                title="variety"
                text="Variety is an industry leader for breaking entertainment news, reviews and box office results with archive of content dating back to 1905."
            />
            <Project
                image={worth}
                title="worth"
                text="A global media platform connecting a community that embraces worth beyond wealth."
            />
        </section>
    );
}
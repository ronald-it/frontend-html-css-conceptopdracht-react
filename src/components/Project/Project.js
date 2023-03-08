import * as React from 'react';
import styles from "../Project/Project.module.scss";
import squiggle from "../../assets/squiggle_line.svg";


export function Project({image, title, text}) {
    return (
        <article className={styles['project-article']}>
            <span className={styles['image-wrapper']}>
                <img className={styles['work-image']} src={image} alt="Rolling Stone"/>
            </span>
            <div className={styles['projects-div']}>
                <h2 className={styles['article-title']}>{title}</h2>
                <img className={styles['squiggle-line']} src={squiggle} alt="Squiggle line"/>
                <p className={styles['article-text']}>{text}</p>
                <a className={styles['project-link']} href="https://www.google.com">view project</a>
            </div>
        </article>
    );
}
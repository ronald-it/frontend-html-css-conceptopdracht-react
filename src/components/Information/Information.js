import * as React from 'react';
import styles from './Information.module.scss'
import {HashLink} from "react-router-hash-link";

export function Information() {
    return (
        <section className={styles['information-section']}>
            <h3>Rekupe is a digital agency in Los Angeles.</h3>
            <h3>We use strategic UX, SEO optimization and beautiful visual designs to help your business grow.</h3>
            <h3>We see every project as a fresh opportunity, pushing ourselves to create new digital experiences.</h3>
            <span>Have a question?                         <HashLink className={styles['hash-link']} to="#form">
                            Click here
                        </HashLink> to contact us!</span>
        </section>
    );
}
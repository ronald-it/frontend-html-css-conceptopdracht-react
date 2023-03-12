import * as React from 'react';
import styles from './Header.module.scss';
import {Button} from "../Button/Button";
import squiggle from '../../assets/squiggle_line_stripe.svg'
import {HashLink} from "react-router-hash-link";

export function Header() {
    return (
        <header>
            <nav className={styles['header-nav']}>
                <ul className={styles['header-ul']}>
                    <li className={styles['header-li']}>
                        <HashLink className={styles['hash-link']} to="#projects">
                            case studies
                        </HashLink>
                    </li>
                    <li className={styles['header-li']}>
                        <HashLink className={styles['hash-link']} to="#services">
                            services
                        </HashLink>
                    </li>
                    <li className={styles['header-li']}>
                        <HashLink className={styles['hash-link']} to="#form">
                            contact us
                        </HashLink>
                    </li>
                </ul>
            </nav>
            <h1 className={styles['h1-title']}>your website is an investment in the success of your business.</h1>
            <span className={styles['header-span']}>we are here to help you succeed.</span>
            <HashLink className={styles['hash-link']} to="#form">
                <Button
                    type="button"
                >
                    let's work together
                </Button>
            </HashLink>
            <img className={styles['squiggle-line']} src={squiggle} alt="squiggle line"/>
        </header>
    );
}
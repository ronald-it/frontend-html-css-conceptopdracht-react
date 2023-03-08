import * as React from 'react';
import styles from './Header.module.scss';
import {Button} from "../Button/Button";
import squiggle from '../../assets/squiggle_line_stripe.svg'
import {HashLink} from "react-router-hash-link";

export function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <HashLink className={styles['hash-link']} to="#projects">
                            case studies
                        </HashLink>
                    </li>
                    <li>
                        <HashLink className={styles['hash-link']} to="#services">
                            services
                        </HashLink>
                    </li>
                    <li>
                        <HashLink className={styles['hash-link']} to="#form">
                            contact us
                        </HashLink>
                    </li>
                </ul>
            </nav>
            <h1>your website is an investment in the success of your business.</h1>
            <span>we are here to help you succeed.</span>
            <HashLink className={styles['hash-link']} to="#form">
                <Button>let's work together</Button>
            </HashLink>
            <img src={squiggle} alt="squiggle line"/>
        </header>
    );
}
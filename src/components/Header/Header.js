import * as React from 'react';
import styles from './Header.module.scss';
import {Button} from "../Button/Button";
import squiggle from '../../assets/squiggle_line_stripe.svg'
import {NavLink} from "react-router-dom";
import {Information} from "../Main/Information/Information";

export function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">case studies</NavLink>
                    </li>
                    <li>services</li>
                    <li>contact us</li>
                </ul>
            </nav>
            <h1>your website is an investment in the success of your business.</h1>
            <span>we are here to help you succeed.</span>
            <Button>let's work together</Button>
            <img src={squiggle} alt="squiggle line"/>
        </header>
    );
}
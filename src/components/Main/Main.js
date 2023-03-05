import * as React from 'react';
import styles from './Main.module.scss';
import {Information} from "../Information/Information";
import {Projects} from "../Projects/Projects";
import {Form} from "../Form/Form";
import {Services} from "../Services/Services";

export function Main() {
    return (
        <main>
            <Information/>
            <Projects/>
            <Services/>
            <Form/>
        </main>
    );
}
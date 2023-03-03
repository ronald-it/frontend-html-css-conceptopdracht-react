import * as React from 'react';
import {Information} from "./Information/Information";
import {Projects} from "./Projects/Projects";
import {Services} from "./Services/Services";
import {Form} from "./Form/Form";

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
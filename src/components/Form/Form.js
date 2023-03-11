import * as React from 'react';
import styles from './Form.module.scss';
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";

export function Form() {
    return (
        <section className={styles['form-section']}>
            <h2 id="form" className={styles['form-title']}>Let's work together</h2>
            <p className={styles['form-text']}>Have a question? Need a quote? Let us know!</p>
            <form>
                <label htmlFor="name-field">Name</label>
                <Input
                    type="text"
                    id="name-field"
                    placeholder="Name"
                />
                <label htmlFor="email-field">Email</label>
                <Input
                    type="email"
                    id="email-field"
                    placeholder="Email"
                />
                <label htmlFor="message-field">Message</label>
                <textarea
                    id="message-field"
                    placeholder="Message"
                    cols="30"
                    rows="10"
                />
                <div className={styles['button-aligner']}>
                    <Button>send</Button>
                </div>
            </form>
        </section>
    );
}
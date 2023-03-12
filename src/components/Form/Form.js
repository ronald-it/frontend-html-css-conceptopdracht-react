import * as React from 'react';
import styles from './Form.module.scss';
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {useState} from "react";

export function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <section className={styles['form-section']}>
            <h2 id="form" className={styles['form-title']}>Let's work together</h2>
            <p className={styles['form-text']}>Have a question? Need a quote? Let us know!</p>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(name, email, message);
            }}>
                <label htmlFor="name-field">Name</label>
                <Input
                    type="text"
                    id="name-field"
                    placeholder="Name"
                    name="name"
                    value={name}
                    modifier={(e) => {setName(e.target.value)}}
                />
                <label htmlFor="email-field">Email</label>
                <Input
                    type="email"
                    id="email-field"
                    placeholder="Email"
                    name="email"
                    value={email}
                    modifier={(e) => {setEmail(e.target.value)}}
                />
                <label htmlFor="message-field">Message</label>
                <textarea
                    id="message-field"
                    placeholder="Message"
                    name="message"
                    cols="30"
                    rows="10"
                    value={message}
                    onChange={(e) => {setMessage(e.target.value)}}
                />
                <div className={styles['button-aligner']}>
                    <Button
                    type="submit"
                    >
                        send
                    </Button>
                </div>
            </form>
        </section>
    );
}
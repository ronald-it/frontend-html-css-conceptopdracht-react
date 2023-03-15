import * as React from 'react';
import styles from './Input.module.scss';

export function Input({type, id, placeholder, name, value, modifier}) {
    return (
        <input
            className={styles['form-input']}
            type={type}
            id={id}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={modifier}
        />
    );
}
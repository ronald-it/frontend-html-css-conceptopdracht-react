import * as React from 'react';
import styles from './Button.module.scss';

export function Button({children, type}) {
    return (
        <button type={type}>
            {children}
        </button>
    );
}
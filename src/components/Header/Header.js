import * as React from 'react';
import styles from './Header.module.scss';

export function Header() {
    return (
        <header>
            <h2 className={styles.title}>Header</h2>
        </header>
    );
}
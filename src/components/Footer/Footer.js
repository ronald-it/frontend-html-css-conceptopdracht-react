import * as React from 'react';
import styles from './Footer.module.scss';

export function Footer() {
    return (
        <footer>
            <span className={styles['footer-span']}>
                Business website opdracht © NOVI Hogeschool 2022
            </span>
        </footer>
    );
}
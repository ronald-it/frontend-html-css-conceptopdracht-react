import * as React from 'react';
import styles from './Service.module.scss';

export function Service({image, title, text}) {
    return (
        <article className={styles['service-article']}>
            <img className={styles['service-image']} src={image} alt="Web design logo"/>
            <h3 className={styles['service-title']}>{title}</h3>
            <p className={styles['service-text']}>{text}</p>
        </article>
    );
}
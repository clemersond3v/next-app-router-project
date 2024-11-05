import React from "react";

import styles from './myhistory.module.scss';

const myhistory: React.FC = () => {
    return (
        <section className={styles['myhistory-page']}>
            <h1 className={styles['myhistory-page--title']}>My History</h1>
        </section>   
    );
}

export default myhistory;
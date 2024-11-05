import React from "react";

import styles from './contacts.module.scss';

const contacts: React.FC = () => {
    return (
        <section className={styles['contact-page']}>
            <h1 className={styles['contact-page--title']}>Contacts</h1>
        </section>        
    );
}

export default contacts;
import React from 'react';
import styles from './Footer.module.css';

const links = [
    'Meta',
    'About',
    'Blog',
    'Jobs',
    'Help',
    'API',
    'Privacy',
    'Terms',
    'Top Accounts',
    'Hashtags',
    'Locations',
    'Instagram Lite',
];

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                {links.map((item, idx) => (
                    <p key={idx}>{item}</p>
                ))}
            </footer>
        </>
    );
};

export default Footer;

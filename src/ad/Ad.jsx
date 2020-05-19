import React from 'react';
import styles from './ad.scss';

const Ad = props => {
    return (
        <div 
            className={styles['ad-container']}
            id='ad-container' //container for ad server to place ads
        />
    );
}

export default Ad;
import React from 'react';
import styles from './ad.scss';

const Ad = props => {
    return (
        <div className={styles['ad-container']}>
            <iframe 
                className={styles['iframe']}
                src="http://localhost:3060" 
            />
        </div>
    );
}

export default Ad;
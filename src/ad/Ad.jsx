import React, {useEffect, useRef} from 'react';
import styles from './ad.scss';

const Ad = props => {
    useEffect(() => {
        const scriptTag = document.createElement('script');
        scriptTag.setAttribute('src', 'http://b.com/getJS');
        document.head.appendChild(scriptTag);
    }, []);

    return (
        <div 
            className={styles['ad-container']}
            id='ad-container' //container for ad server to place ads
        />
    );
}

export default Ad;
import React from 'react';
import styles from './input.scss';
import classnames from 'classnames';

const Input = ({
    label='',
    inputKey,
    inputIndex,
    className,
    onChange,
    ...props
}) => {

    return (
        <div className={styles['input-container']}>
            {label && 
                <label className={styles['input-label']}>{label}</label>
            }
            <input 
                {...props}
                className={classnames(className, styles['input-tag'])}
                onChange={e => onChange(inputIndex, e.target.value)}
            />
        </div>
    );
}

export default Input;
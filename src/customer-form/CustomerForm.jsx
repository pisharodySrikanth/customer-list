import React from 'react';
import styles from './customer-form.scss';
import classnames from 'classnames';

const CustomerForm = props => {
    return (
        <div className={classnames(styles['customer-form'], props.className)}>
            Customer Form
        </div>
    )
}

export default CustomerForm;
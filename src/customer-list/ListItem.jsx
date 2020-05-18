import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteCustomer} from '../actions/customers';
import styles from './list-item.scss';

const ListItem = props => {
    const dispatch = useDispatch();

    return (
        <div className={styles['item']}>
            <div className={styles['item-name']}>{props.name}</div>
            <div 
                className={styles['delete-btn']}
                onClick={() => dispatch(deleteCustomer({
                    key: props.custKey
                }))}
            >Delete</div>
        </div>
    )
};

export default ListItem;
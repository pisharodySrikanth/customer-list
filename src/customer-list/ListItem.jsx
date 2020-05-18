import React, {useState, memo} from 'react';
import {useDispatch} from 'react-redux';
import {deleteCustomer, setCurrentCustomer} from '../actions/customers';
import styles from './list-item.scss';

const expandedKeys = ['age', 'gender', 'location'];

const ListItem = props => {
    const [expanded, setExpanded] = useState(false);
    const dispatch = useDispatch();

    const onEdit = e => {
        e.stopPropagation();
        dispatch(setCurrentCustomer({
            key: props.custKey
        }));
    }
    
    const onDelete = e => {
        e.stopPropagation();
        dispatch(deleteCustomer({
            key: props.custKey
        }));
    }

    return (
        <div 
            className={styles['item']}
            onClick={() => setExpanded(!expanded)}
        >
            <div className={styles['item-name']}>{props.name}</div>
            <div 
                className={styles['edit-btn']}
                onClick={onEdit}
            >Edit</div>
            <div 
                className={styles['delete-btn']}
                onClick={onDelete}
            >Delete</div>
            {expanded ? expandedKeys.map(key => (
                <div
                    key={key}
                    className={styles['spec']}
                >
                    <div className={styles['spec-key']}>{key}:</div>
                    <div className={styles['spec-value']}>{props[key]}</div>
                </div>
            )) : null}
        </div>
    )
};

export default memo(ListItem);
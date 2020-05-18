import React from 'react';
import {useSelector} from 'react-redux';
import classnames from 'classnames';
import ListItem from './ListItem';
import styles from './list.scss';

const getCustomers = ({customers}) => customers.list

const List = props => {
    const customers = useSelector(getCustomers);

    return (
        <div className={classnames(styles['list'], props.className)}>
            {customers.map(item => (
                <ListItem 
                    {...item}
                    custKey={item.key}
                />
            ))}
        </div>
    );
};1

export default List;
import React, {useState, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styles from './customer-form.scss';
import classnames from 'classnames';
import Input from './Input';
import {addEditCustomer} from '../actions/customers';

const items = [{
    type: 'text',
    key: 'name',
    label: 'Name'
}, {
    type: 'number',
    key: 'age',
    label: 'Age'
}, {
    type: 'text',
    key: 'gender',
    label: 'Gender'
}];

const getCurrentCustomer = ({customers}) => {
    const current = customers.current;

    if(current === -1) {
        return null;
    }

    return customers.list.find(c => c.key === current);
};

const CustomerForm = props => {
    const dispatch = useDispatch();
    const currentCustomer = useSelector(getCurrentCustomer) || {};
    const [values, setValues] = useState(() => {
        return items.map(item => {
            return currentCustomer[item.key] || '';
        });
    });

    const handleChange = useCallback((index, value) => setValues(values => {
        const copy = [...values];
        copy[index] = value;
        return copy;
    }), []);

    const handleSubmit = e => {
        e.preventDefault();

        const customer = values.reduce((c, val, index) => {
            c[items[index].key] = val;
            return c;
        }, currentCustomer ? {...currentCustomer} : {});

        dispatch(addEditCustomer({
            customer
        }));
    }

    return (
        <form className={classnames(styles['customer-form'], props.className)}>
            {items.map((item, index) => {
                return (
                    <Input 
                        {...item}
                        inputKey={item.key}
                        inputIndex={index}
                        value={values[index]}
                        onChange={handleChange}
                    />
                );
            })}
            <button 
                type="submit"
                className={styles['submit-btn']}
                onClick={handleSubmit}
            >Save</button>
        </form>
    )
}

export default CustomerForm;
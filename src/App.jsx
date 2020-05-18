import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classnames from 'classnames';
import List from './customer-list/List';
import CustomerForm from './customer-form/CustomerForm';
import {toggleTheme} from './actions/theme';
import styles from './app.scss';
import themeStyles from './theme.scss';

const getTheme = ({theme}) => theme;
const getCurrentKey = ({customers}) => customers.current

const App = () => {
    const theme = useSelector(getTheme);
    const current = useSelector(getCurrentKey);
    const dispatch = useDispatch();

    return (
        <div className={classnames(styles['app'], themeStyles[theme + '-theme'])}>
            <div className={styles['header']}>
                <div className={styles['title']}>
                    Customer List
                </div>
                <div
                    className={styles['theme-toggle']}
                    onClick={() => dispatch(toggleTheme())}
                >
                    Switch to {theme == 'light' ? 'Dark' : 'Light'} Mode
                </div>
            </div>
            <div className={styles['content-container']}>
                <List 
                    className={styles['left-section']}
                />
                <CustomerForm 
                    className={styles['right-section']}
                    key={current}
                />
            </div>
        </div>
    );
}

export default App;
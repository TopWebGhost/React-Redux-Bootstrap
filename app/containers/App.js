import React, { PropTypes } from 'react';

import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';

import style from './App.scss';

const App = ({ children }) =>
    <div className={style.main}>
        <Header />
        <Menu />
        { children }
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;

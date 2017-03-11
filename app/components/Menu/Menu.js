import React from 'react';
import { Link } from 'react-router';

import style from './Menu.css';

const Menu = () =>
    <ul className={style.menu}>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/overview">Overview</Link></li>
    </ul>;


export default Menu;

import React from 'react';
import { Col, Row } from 'react-bootstrap';

import InfoPanel from '../../components/InfoPanel/InfoPanel';
import ContactList from '../../components/ContactList/ContactList';

import style from './Overview.scss';

import apiData from '../../data.js';
console.log(apiData);
const Overview = () =>
    <div className={style.overview}>
        <Row className={style.nomargin}>
            <Col xs={12} sm={6} md={8} lg={9}>
                <InfoPanel data={apiData}/>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
                <ContactList contacts={apiData.contacts}/>
            </Col>
        </Row>
    </div>;

export default Overview;

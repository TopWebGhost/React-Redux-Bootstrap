import React, { PropTypes } from 'react';
import { Col, Row } from 'react-bootstrap';

import style from './InfoPanel.css';

import Panel from '../Panel/Panel';

const InfoPanel = ({data}) =>
    <div className={style.infopanel}>
        <Row className={style.nomargin}>
            <Col xs={12} md={6} lg={4}>
                <Panel data={data.project} status="1"/>
                <Panel data={data.sales} status="2" />
            </Col>
            <Col xs={12} md={6} lg={4}>
                <Panel data={data.bookSpecs} status="3"/>
                <Panel data={data.deadlines} status="0"/>
            </Col>
            <Col xs={12} md={6} lg={4}>
                <Panel data={data.school} status="1"/>
            </Col>
        </Row>
    </div>;

InfoPanel.propTypes = {
    data: PropTypes.object
};
export default InfoPanel;

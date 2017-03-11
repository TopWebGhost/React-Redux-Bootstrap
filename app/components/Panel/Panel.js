import React, { PropTypes } from 'react';
import { Col } from 'react-bootstrap';

import style from './Panel.css';

const Panel = ({data, status}) =>
     <div className={style.panel}>
         <p className={style.title}>{data.title} {status === '1' && <span className={style.pen}></span> || status === '2' && <span>(View Sales Dashboard)</span> || status === '3' && <span>(View All)</span>} </p>
         <div className={style.content}>
             {data.data.map(item =>
                 <div className={style.item}>
                     <Col xs={6} className={style.key}>
                         {item.key}
                     </Col>
                     <Col xs={6} className={style.value}>
                         {item.value}
                     </Col>
                 </div>)
             }
         </div>
     </div>;

Panel.propTypes = {
    data: PropTypes.object,
    status: PropTypes.string.isRequired
};
export default Panel;

import React, { PropTypes } from 'react';

import style from './ContactList.scss';

const ContactList = ( {contacts}) =>
    <div className={style.contactlist}>
        <p className={style.title}>KEY CONTACTS<span className={style.pen}></span></p>
        <ul>
            {contacts.map(contact =>
                <li>
                    <p className={style.name}>{contact.name}</p>
                    <p className={style.job}>{contact.job}</p>
                    <p className={style.email}>{contact.email}m</p>
                    <p className={style.phone}>{contact.phone}</p>
                </li>)
            }

        </ul>
    </div>;


ContactList.propTypes = {
    contacts: PropTypes.array
};

export default ContactList;

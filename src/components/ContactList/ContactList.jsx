import React from "react";
import style from "./ContactList.module.css";

import PropTypes from "prop-types";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={style.contactList}>
      {contacts.map((contact) => (
        <li className={style.contactItem} key={contact.id}>
          <span className={style.contactInfo}>
            {contact.name}: {contact.number}
          </span>
          <button
            className={style.deleteButton}
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ContactList;
import React from "react";
import style from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={style.contactList}>
      {contacts.map((contact) => (
        <li className={style.contactItem} key={contact.id}>
          <span className={style.contactInfo}>
            {contact.name}: {contact.phone}
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

export default ContactList;
import React, { useState } from "react";
import { useAddContactMutation } from "../../redux/contactsApi";
import style from "./ContactForm.module.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [addContact] = useAddContactMutation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") setName(value);
    else if (name === "number") setNumber(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name.trim() && number.trim()) {
      await addContact({ name: name.trim(), number: number.trim() });
      setName("");
      setNumber("");
    }
  };

  return (
    <form className={style.contactForm} onSubmit={handleSubmit}>
      <label className={style.contactFormLabel}>
        Name
        <input
          className={style.contactFormInput}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </label>
      <label className={style.contactFormLabel}>
        Number
        <input
          className={style.contactFormInput}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .-]?\(?\d{1,3}?\)?[ .-]?\d{1,4}[ .-]?\d{1,4}[ .-]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={style.contactFormButton} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
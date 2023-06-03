import css from '../Style.module.css';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contactsListItem}>
          {contact.name} - {contact.number}
          <button type="button" data-id={contact.id} onClick={onDelete} className={css.buttonDeleteContact}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
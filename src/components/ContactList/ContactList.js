import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ name, number, id }) => (
        <li className={styles.item} key={id}>
          {name}: {number}
          <button
            className={styles.buttonDelete}
            type="button"
            onClick={() => onDeleteContacts(id)}
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
};

export default ContactList;

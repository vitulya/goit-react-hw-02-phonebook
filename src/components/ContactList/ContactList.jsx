import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';

import PropTypes from 'prop-types';

export const ContactList = ({ contact, filter, removeContact }) => {
  return (
    <ul>
      {contact.map(item => {
        if (item.name.toLowerCase().includes(filter.toLowerCase())) {
          return (
            <li className={css.item} key={item.id}>
              <ContactListItem
                name={item.name}
                number={item.number}
                id={item.id}
                removeContact={removeContact}
              />
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,

  filter: PropTypes.string.isRequired,
};

import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';

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

  // return (
  //   <ul>
  //       {contact.map((item) => {
  //         return 2
  //       }}
  //   </ul>
  // );
};

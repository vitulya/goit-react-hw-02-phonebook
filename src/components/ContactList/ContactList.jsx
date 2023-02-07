import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css'


export const ContactList = ({ contact }) => {

  return (
    <ul>
        {contact.map((item) => (
            <li className={css.item} key={item.id}>
                <ContactListItem name={item.name} />
            </li>
        ))}
    </ul>
  );
};

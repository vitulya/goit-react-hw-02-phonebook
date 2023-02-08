import css from './ContactListItem.module.css';

export const ContactListItem = ({ name, number, id, removeContact }) => {
  return (
    <>
      <span>
        {name}: {number}
      </span>
      <button
        className={css.delete}
        onClick={() => {
          removeContact(id);
        }}
      >
        Delete
      </button>
    </>
  );
};

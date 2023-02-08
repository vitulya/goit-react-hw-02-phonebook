import css from './Filter.module.css';


export const Filter =({filter, changeFilter})=> {

    return (
      <div className={css.wrapper}>
        <span>Find contacts by name</span>
        <input 
        onInput = {(e) => changeFilter(e.target.value)}
        value={filter}
        type="text" />
      </div>
    );
}

// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import css from './ContactForm.module.css'

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChangeInput = event => {
//     const { name, value } = event.target;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     // чому тут пропс????
//     this.props.handleAddContact({
//       name: this.state.name,
//       number: this.state.number,
//       id: nanoid(),
//     });

//     this.setState({
//       name: '',
//       number: '',
//     });
//   };
//   render() {
//     return (
//       <form className={css.wrapper} onSubmit={this.handleSubmit}>
//         <label  htmlFor="name">
//           Name
//           <input
//           className={css.input}
//             value={this.state.name}
//             onChange={this.handleChangeInput}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>

//         <label htmlFor="name">
//           Number
//           <input
//           className={css.input}
//             value={this.state.number}
//             onChange={this.handleChangeInput}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <button className={css.button}>Add form</button>
//       </form>
//     );
//   }
// }

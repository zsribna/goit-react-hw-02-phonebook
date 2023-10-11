import { Component } from 'react';

export class FormContacts extends Component {
  state = {
    name: '',
    number: '',
  };

  hendleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { name, number } = this.state;
    this.props.handleAddContact({ name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="">
          Name:
          <input
            type="text"
            name="name"
            onChange={this.hendleChange}
            required
            value={this.state.name}
          />
        </label>
        <label htmlFor="">
          Numder:
          <input
            type="tel"
            name="number"
            onChange={this.hendleChange}
            required
            value={this.state.number}
          />
        </label>
        <button style={{
          display: 'inline-block',
          width: '90px',
        }} type="submit">Add contact</button>
      </form>
    );
  }
}

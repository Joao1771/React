import React, { Component } from 'react';
import './Main.css';
//Form button icon
import { FaPlus } from 'react-icons/fa';
//Tarefa edit delete
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: ['Beber café', 'Fazer água', 'Estudar'],
  };
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };
  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" className="form" value={novaTarefa}>
          <input onChange={this.handleChange} type="text" />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit className="edit-i" />
                <FaWindowClose className="delete-i" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './Main.css';
import { FaPlus } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefa: ['beber café', 'fazer água', 'estudar'],
  };
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };
  render() {
    const { novaTarefa } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" className="form" value={novaTarefa}>
          <input onChange={this.handleChange} type="text" />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './Main.css';
//Form button icon
import { FaPlus } from 'react-icons/fa';
//Tarefa edit delete icons
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  /*
  o classfield state recebe os estados (tipo variaveis)
  Para alterar o seu valor se usa a função this.setState({valor: valorNovo})
  */
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  // nome das funções nos jsx geralmente são handle
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;
    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  // render(): renderizar {jsx/html}
  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" onSubmit={this.handleSubmit} className="form">
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        {/* no jsx o javascript fica dentro de {}*/}
        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit-i"
                />
                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete-i"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'
import ACTIONS from '../../reducers/actions'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo) => <Todo delete={this.props.delete} key={todo.id} text={todo.text} id={todo.id}/>)

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => ({
  delete: todoText => dispatch({type: ACTIONS.DELETE_TODO, payload: todoText})
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

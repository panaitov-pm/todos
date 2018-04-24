import React, { Component } from 'react';
import AddItem from './components/AddItem';
import Items from './components/Items';
import {defaultState} from './data';

class App extends Component {
    state = {
        todos: [...defaultState],
    };
    handleAddTodo = (todo) => {
	    const {todos} = this.state;
        this.setState({
            todos: [todo, ...todos]
        });
    };
	handleToggleTodo = (id) => {
		const {todos} = this.state;
	    const toggledTodo = todos.map(todo => {
	    	if(todo.id === id) {
			    return ({...todo, done: !todo.done});
	    	} else {
		        return todo;
		    }
	    });
		this.setState({
			todos: toggledTodo,
		});
	};
	handleRemoveTodo = (id) => {
		const {todos} = this.state;
	    const removedTodo = todos.filter(todo => todo.id !== id);
		this.setState({
			todos: removedTodo,
		});
	};
	handleAllNewTodo = () => {
		const {todos} = this.state;
		const allNewTodos = todos.map(todo => ({...todo, done: false}));
		this.setState({
			todos: allNewTodos,
		});
	};
   render() {
       const {todos} = this.state;
	   const newTodos = todos.filter(todo => todo.done === false);
	   const doneTodos = todos.filter(todo => todo.done === true);
     return (
      <div className="container py-3">
                <AddItem onAddTodo={this.handleAddTodo}/>
                <div className="row">
                    <div className="col-md-5">
                        <Items title="New Todos"
                               todos={newTodos}
                               onToggleTodo={this.handleToggleTodo}
                               onRemoveTodo={this.handleRemoveTodo}
                        />
                    </div>
                    <div className="offset-md-2 col-md-5">
                        <Items title="Done Todos"
                               todos={doneTodos}
                               onToggleTodo={this.handleToggleTodo}
                               onRemoveTodo={this.handleRemoveTodo}
                        />
                        <button className="btn btn-danger btn-lg btn-block" onClick={this.handleAllNewTodo}>Mark All As New</button>

                    </div>
                </div>


      </div>
    );
  }
}

export default App;

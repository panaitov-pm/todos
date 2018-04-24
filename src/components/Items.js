import React, {Component} from 'react';
import Item from './Item';
import Filter from './Filter';

class Items extends Component {
	state = {
		filter: ''
	};

	handleFilterTodo = todo => {
		this.setState({
			filter: todo
		})
	};

	render() {
		const {title, todos, onToggleTodo, onRemoveTodo} = this.props;
		const {filter} = this.state;
		return (
			<section>
				<h3 className="mb-3">
					{title}
				</h3>
				<Filter filter={filter}
				        onFilterTodo={this.handleFilterTodo} />
				<ul className="list-group mb-3">
					{
						todos.filter((todo) => todo.value.toLowerCase().includes(filter.trim().toLowerCase())).map(todo => (
						<Item
						key={todo.id}
						todo={todo}
						onToggleTodo={() => onToggleTodo(todo.id)}
						onRemoveTodo={() => onRemoveTodo(todo.id)}
						/>
						))
					}
				</ul>
			</section>
		);
	}
}

export default Items;

import React, {Component} from 'react';
import {v4} from 'node-uuid';

class AddItem extends Component {
	state = {
		value: ''
	};

	handleChange = ({target}) => {
		this.setState({
			value: target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const todo = {id: v4(), value: this.state.value, done: false};
		this.props.onAddTodo(todo);
		this.setState({
			value: ''
		});

	};

	render() {
		const {value} = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<div className="row">
					<div className="col-md-10">
						<input
							className="form-control mb-3"
							type="text"
							value={value}
							onChange={this.handleChange}
						/>
					</div>
					<div className="col-md-2">
						<input className="btn btn-success"
						       type="submit"
						       value="Add item" />
					</div>
				</div>
			</form>
		);
	}
}

export default AddItem;

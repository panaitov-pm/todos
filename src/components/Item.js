import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    render() {
        const {todo, onToggleTodo, onRemoveTodo} = this.props;
        return (
            <li className="item-box list-group-item">
                <div className="form-check">
                    <input className="form-check-input"
                        type="checkbox"
                        checked={todo.done}
                        onChange={onToggleTodo}
                        id={todo.id}
                    />
                  <label className="form-check-label" htmlFor={todo.id}> {todo.value}</label>
                </div>
                <button className="btn btn-secondary btn-sm" onClick={onRemoveTodo}>Remove</button>

            </li>
        );
    }
}

export default Item;

import React, { Component } from 'react';

class Filter extends Component {

    handleFilterTodo = ({target}) => {
        this.props.onFilterTodo(target.value);
    }
    
    render() {
        const {filter} = this.props;
        return (
            <div className="mb-3">
                <input type="text"
                    className="form-control"
                    value={filter}
                    onChange={this.handleFilterTodo}
               />
            </div>
        );
    }
}

export default Filter;

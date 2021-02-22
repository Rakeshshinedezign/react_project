import React, { Component } from 'react';
 
class Array extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      value: '',
      list: [42, 33, 68],
    };
  }
 
  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };
 
  onAddItem = () => {
    this.setState(state => {
        const list = [...state.list, state.value];
      //const list = state.list.concat(state.value);
 
      return {
        list,
        value: '',
      };
    });
  };

  onClearArray = () => {
    this.setState({ list: [] });
  };
  onUpdateItem = i => {
    this.setState(state => {
      const list = state.list.map((item, j) => {
        if (j === i) {
          return item + 1;
        } else {
          return item;
        }
      });
 
      return {
        list,
      };
    });
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={item}>
              The person is {item} years old.
              <button
                type="button"
                onClick={() => this.onUpdateItem(index)}
              >
                Make me one year older
              </button>
            </li>
          ))}
        </ul>
 
        {/* <button type="button" onClick={this.onUpdateItems}>
          Make everyone one year older
        </button>
  */}
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChangeValue}
        />
        <button
          type="button"
          onClick={this.onAddItem}
          disabled={!this.state.value}
        >
          Add
        </button>
        <button type="button" onClick={this.onClearArray}>
          Clear Array
        </button>
       
      </div>
      
    );
  }
}
 
export default Array;
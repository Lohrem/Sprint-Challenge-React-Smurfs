import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }
  createNewID() {
    return Math.floor(Math.random() * 1000) + 1
  }


  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addHelper = e => {
    let newSmurfData= {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    this.props.addSmurf(e, newSmurfData);
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addHelper}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit" onClick={this.addSmurf}>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;

import './App.css';
import React,{ Component } from 'react';
import prof from './Component/prof';
class  App extends Component {
  state = {
    show: false,
  };
  toggle = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div className="App">
        {this.state.show ? <prof/> : <h1 className="see">Check my profile</h1>}
        <button className="btn" onClick={this.toggle}>
          {this.state.show ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
   
}

export default App;

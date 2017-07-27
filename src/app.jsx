import React, {Component} from 'react';
import Clock from './clock';
import './app.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      deadline : 'December 25 2017',
      newDeadline: ''
    }
  }

  changeDeadLine() {
    this.setState({deadline:this.state.newDeadline});
  }

  render(){
    return(
      <div className = 'App'>
        <div className = 'App-title'>Countdown {this.state.deadline}</div>
        <Clock
        deadline = {this.state.deadline}
        />
        <div className="input-group col-sm-6 deadLine-input">
           <input type="text" className="form-control" placeholder="Search for new date"
           onChange = { event => this.setState({newDeadline: event.target.value})}
           />
           <span className="input-group-btn">
           <button className="btn btn-info" type="button"
           onClick = { () => this.changeDeadLine()}>
           <spam className='glyphicon glyphicon-search'></spam>
           </button>
           </span>
        </div>
      </div>
    );
  }
}

export default App;

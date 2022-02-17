import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component{
  
  constructor(){
    super();

    this.state = {
      counter : 0
    }
    
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <CounterButton by={1}  incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={5}  incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <span className='count'>{this.state.counter}</span>
        <div> <button className='reset' onClick={this.reset}>Reset</button> </div>
      </div>
    );
  }

  reset(){
    this.setState(
      (prevState) => {
        return {counter: 0}
      }
    );
  }

  increment(by) {
    // console.log(`Increment from child - ${by}`)
    // Using arrow function
    this.setState(
      (prevState) => {
        return {counter: prevState.counter + by}
      }
    );
  }

  decrement(by) {
    this.setState(
      (prevState) => {
        return {counter: prevState.counter - by}
      }
    );
  }

}

class CounterButton extends Component{

  constructor(){
    super();
    this.state = {
      counter : 0
    }

    // The arrow functions (=>) prevent the need to use the binding
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render(){
  //render = () => {
    return (
      <div className="counter">
      <button onClick={this.increment} >+ {this.props.by}</button>
      <button onClick={this.decrement} >- {this.props.by}</button>

      {/*<span className='count'>{this.state.counter}</span>*/}
      </div>
    );
  }

  increment() {
//  increment = () => {
    //console.log ('increment');
    this.setState({
      counter: this.state.counter + this.props.by
    });
    this.props.incrementMethod(this.props.by);
  }
  
  decrement() {
    this.setState({
      counter: this.state.counter - this.props.by
    });
    this.props.decrementMethod(this.props.by);
  }

}

CounterButton.defaultProps = {
  by : 1
}

CounterButton.propTypes = {
  by : PropTypes.number
}

export default Counter
import React , {Component} from 'react'
import PropTypes from 'prop-types'
import './counter.css'

//fhwfree1988
class CounterButton extends Component{
    constructor(){
        super();

        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
    }

    render(){
        return(
            <div className="counter"> 
                <button onClick={this.increment}>{this.props.by}</button>
                <span className="count">{this.state.counter}</span>
            </div>
        );
    }

    increment(){
        this.setState({
            counter : this.state.counter + this.props.by//+1
        });
        this.props.incrementMethod(this.props.by);
    }
    
}

CounterButton.defaultProps ={
    by:1
}
CounterButton.propTypes={
    by : PropTypes.number
}

export default CounterButton;
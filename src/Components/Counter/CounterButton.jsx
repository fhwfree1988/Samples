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

        this.increament = this.increament.bind(this);
    }

    render(){
        return(
            <div className="counter"> 
                <button onClick={this.increament}>{this.props.by}</button>
                <span className="count">{this.state.counter}</span>
            </div>
        );
    }

    increament(){
        this.setState({
            counter : this.state.counter + this.props.by//+1
        });
    }
    
}

CounterButton.defaultProps ={
    by:1
}
CounterButton.propTypes={
    by : PropTypes.number
}

export default CounterButton;
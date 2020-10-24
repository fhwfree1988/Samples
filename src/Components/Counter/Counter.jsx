import React ,{Component} from 'react'
import CounterButton from './CounterButton'

class Counter extends Component{
    constructor(){
        super();

        this.state ={
            mainCounter : 0
        }
        this.increment = this.increment.bind(this);
    }

    render(){
        return(
            <div>
                <CounterButton by={1} incrementMethod={this.increment}/>
                <CounterButton by={5} incrementMethod={this.increment}/>
                <CounterButton by={10} incrementMethod={this.increment}/>
                <br/>
                <span className="mainCounter" >{this.state.mainCounter}</span>
            </div>
        );
    }

    increment(by){
        console.log(`this is from parent ${by}`);
        this.setState({
            mainCounter : this.state.mainCounter + by//+1
        });
    }
}

export default Counter;
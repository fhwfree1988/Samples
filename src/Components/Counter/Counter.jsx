import React ,{Component} from 'react'
import CounterButton from './CounterButton'

class Counter extends Component{
    constructor(){
        super();

        this.state ={
            mainCounter : 0
        }
        this.increament = this.increament.bind(this);
    }

    render(){
        return(
            <div>
                <CounterButton by={1} increamentMethod={this.increament(1)}/>
                <CounterButton by={5} />
                <CounterButton by={10}/>
                <br/>
                <span className="mainCounter" ></span>
            </div>
        );
    }

    increament(by){
        this.setState({
            mainCounter : this.state.mainCounter + by//+1
        });
    }
}

export default Counter;
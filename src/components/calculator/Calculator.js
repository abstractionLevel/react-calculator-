import React , {Component} from  'react';
import './calculator.css';

class Calculator extends Component {
    state = {
        //value to displayed in <Display/>
        displayValue: 0,
        //values to be displayerd in numer <Keys/>
        number: [],
        //values to be displayed in operator <Keys/>
        operator: [],
        //operator selected for math operation
        selectedOperator: '',
        //stored value to use for math operation
        storeValue: '',

    }

    callOperator = () => {
        console.log('call Operator');
    }

    setOperator = () => {
        console.log('set Operator')
    }

    updateOperator = () => {
        console.log('update Operator');
    }

    render = () => {
        return (
            <div className="calculator-container"></div>
        );
    }
}

export default Calculator;
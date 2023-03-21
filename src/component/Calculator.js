import React, { Component } from 'react';
import Button from './Button';

const operators = ['÷', 'x', '-', '+', '='];
const digits = ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
class Calculator extends Component {
    constructor(props){
        super(props)
        this.state = {};
    }

    render() {
        return (
            <ul className='calc-body'>
                <li className='calc-screen'></li>
                <li className='calc-keyboard'>
                    <Button button = {digits} />
                    <Button  button = {operators} />
                </li>
            </ul>
        );
    }
}



export default Calculator;
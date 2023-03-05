import "./Calculator.css"
import { useState } from "react"

function Calculator() {
    const [inputValue,setInputValue] = useState('0')
    const display = (value) => {
        if(inputValue.toString().charAt(0) === '0') {
            setInputValue(value)
        } else {
            setInputValue(inputValue+value)
        }
    }

    const calculate = () => {
        let result = eval(inputValue)
        setInputValue(result)
    }

  return (
    <div className="calculator">
        <div className="calculator-display">
            <h1>{inputValue}</h1>
        </div>
        <div className="calculator-button">
            <button onClick={(()=>display('+'))} className="operator">+</button>
            <button onClick={(()=>display('-'))} className="operator">-</button>
            <button onClick={(()=>display('*'))} className="operator">x</button>
            <button onClick={(()=>display('/'))} className="operator">÷</button>
            <button onClick={((v)=>{display(v.target.value)})} value="7">7</button>
            <button onClick={((v)=>{display(v.target.value)})} value="8">8</button>
            <button onClick={((v)=>{display(v.target.value)})} value="9">9</button>
            <button onClick={((v)=>{display(v.target.value)})} value="4">4</button>
            <button onClick={((v)=>{display(v.target.value)})} value="5">5</button>
            <button onClick={((v)=>{display(v.target.value)})} value="6">6</button>
            <button onClick={((v)=>{display(v.target.value)})} value="1">1</button>
            <button onClick={((v)=>{display(v.target.value)})} value="2">2</button>
            <button onClick={((v)=>{display(v.target.value)})} value="3">3</button>
            <button onClick={((v)=>{display(v.target.value)})} value=".">.</button>
            <button onClick={((v)=>{display(v.target.value)})} value="0">0</button>
            <button onClick={(()=>{setInputValue('0')})} value="0"className="clear-btn">C</button>
            <button className="equal operator" onClick={calculate}>=</button>
        </div>
    </div>
  )
}

export default Calculator
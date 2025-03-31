// App.jsx
import { useState } from 'react'
import './App.css'
import './background.css'


function App() {
  const [input, setInput] = useState('')
  const [memory, setMemory] = useState(0)

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(
          eval(
            input
              .replace(/×/g, '*')
              .replace(/÷/g, '/')
          ).toString()
        )
      } catch {
        setInput('Error')
      }
    } else if (value === 'AC') {
      setInput('')
    } else if (value === '←') {
      setInput(input.slice(0, -1))
    } else if (value === 'Ans') {
      setInput(input + memory)
    } else if (value === 'M+') {
      setMemory(parseFloat(input) || 0)
      setInput('')
    } else if (value === 'MR') {
      setInput(input + memory)
    } else if (value === 'MC') {
      setMemory(0)
    } else {
      setInput(input + value)
    }
  }

  const handleSpecialOperations = (value) => {
    let num = parseFloat(input)
    switch (value) {
      case 'x²':
        setInput(Math.pow(num, 2).toString())
        break
      case 'x³':
        setInput(Math.pow(num, 3).toString())
        break
      case '√':
        setInput(Math.sqrt(num).toString())
        break
      case '∛':
        setInput(Math.cbrt(num).toString())
        break
      case 'xʸ':
        setInput(input + '**')
        break
      case 'sin':
        setInput(Math.sin(num).toFixed(5).toString())
        break
      case 'cos':
        setInput(Math.cos(num).toFixed(5).toString())
        break
      case 'tan':
        setInput(Math.tan(num).toFixed(5).toString())
        break
      case 'log₁₀':
        setInput(Math.log10(num).toFixed(5).toString())
        break
      case 'ln':
        setInput(Math.log(num).toFixed(5).toString())
        break
      case '!':
        setInput(factorial(num).toString())
        break
      case 'π':
        setInput((num * Math.PI).toFixed(5).toString())
        break
      case 'e':
        setInput((num * Math.E).toFixed(5).toString())
        break
      case 'floor':
        setInput(Math.floor(num).toString())
        break
      case 'ceil':
        setInput(Math.ceil(num).toString())
        break
      case 'mod':
        setInput(input + '%')
        break
      case '×10ʸ':
        setInput(num * Math.pow(10, num).toString())
        break
      default:
        break
    }
  }

  const factorial = (num) => {
    if (num === 0 || num === 1) return 1
    return num * factorial(num - 1)
  }

  return (
    
    <div className="container">
      <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
      </ul>
      <div className="users">
        <h1>Calculator Project</h1>
      </div>
      <div className="calculator">
        <input type="text" className="display" value={input} readOnly />
        <div className="button-grid">
          <button className="button" onClick={() => handleClick('2nd')}>2nd</button>
          <button className="button" onClick={() => handleSpecialOperations('sin')}>sin</button>
          <button className="button" onClick={() => handleSpecialOperations('cos')}>cos</button>
          <button className="button" onClick={() => handleSpecialOperations('tan')}>tan</button>
          <button className="button" onClick={() => handleSpecialOperations('log₁₀')}>log₁₀</button>
          <button className="button" onClick={() => handleSpecialOperations('ln')}>ln</button>
          <button className="button" onClick={() => handleSpecialOperations('x²')}>x²</button>
          <button className="button" onClick={() => handleSpecialOperations('x³')}>x³</button>
          <button className="button" onClick={() => handleSpecialOperations('xʸ')}>xʸ</button>
          <button className="button" onClick={() => handleSpecialOperations('√')}>√</button>
          <button className="button" onClick={() => handleSpecialOperations('∛')}>∛</button>
          <button className="button" onClick={() => handleClick('exp')}>exp</button>
          <button className="button" onClick={() => handleClick('7')}>7</button>
          <button className="button" onClick={() => handleClick('8')}>8</button>
          <button className="button" onClick={() => handleClick('9')}>9</button>
          <button className="button" onClick={() => handleClick('+')}>+</button>
          <button className="button" onClick={() => handleClick('(')}>(</button>
          <button className="button" onClick={() => handleClick(')')}>)</button>
          <button className="button" onClick={() => handleClick('4')}>4</button>
          <button className="button" onClick={() => handleClick('5')}>5</button>
          <button className="button" onClick={() => handleClick('6')}>6</button>
          <button className="button" onClick={() => handleClick('×')}>×</button>
          <button className="button" onClick={() => handleClick('P')}>P</button>
          <button className="button" onClick={() => handleClick('C')}>C</button>
          <button className="button" onClick={() => handleClick('1')}>1</button>
          <button className="button" onClick={() => handleClick('2')}>2</button>
          <button className="button" onClick={() => handleClick('3')}>3</button>
          <button className="button" onClick={() => handleClick('-')}>-</button>
          <button className="button" onClick={() => handleSpecialOperations('floor')}>floor</button>
          <button className="button" onClick={() => handleSpecialOperations('ceil')}>ceil</button>
          <button className="button" onClick={() => handleClick('0')}>0</button>
          <button className="button" onClick={() => handleClick('.')}>.</button>
          <button className="button equal" onClick={() => handleClick('=')}>=</button>
          <button className="button" onClick={() => handleClick('+')}>+</button>
          <button className="button" onClick={() => handleSpecialOperations('!')}>!</button>
          <button className="button" onClick={() => handleSpecialOperations('mod')}>mod</button>
          <button className="button special" onClick={() => handleClick('AC')}>AC</button>
          <button className="button special" onClick={() => handleClick('←')}>←</button>
          <button className="button" onClick={() => handleSpecialOperations('×10ʸ')}>×10ʸ</button>
          <button className="button" onClick={() => handleClick('%')}>%</button>
          <button className="button" onClick={() => handleClick('Ans')}>Ans</button>
          <button className="button" onClick={() => handleClick('M+')}>M+</button>
          <button className="button" onClick={() => handleClick('MC')}>MC</button>
          <button className="button" onClick={() => handleClick('MR')}>MR</button>
          <button className="button" onClick={() => handleClick('M-')}>M-</button>
          <button className="button" onClick={() => handleClick(',')}>,</button>
          <button className="button" onClick={() => handleSpecialOperations('π')}>π</button>
          <button className="button" onClick={() => handleSpecialOperations('e')}>e</button>
        </div>
      </div>
    </div>
  )
}

export default App

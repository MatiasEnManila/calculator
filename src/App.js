import './App.css';
import logoSa from './img-fcc/logo-sa-deer.png';
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear'
import { useState } from 'react';
import { evaluate} from 'mathjs';
// descargar paquete 

function App() {
  // cada vez que se toca botones se ejecuta funcion
  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  }

  const clear = () => {
    setInput("");
  }

  const result = () => {
    setInput(evaluate(input));
  }




  // creando estado apra aplicacion, setInput es una función para actualizar
  return (
    <div className="App">
      <div className="fcc-logo-div">
        <img 
          src={logoSa}
          className='logo-sa-deer'
          alt='logo-sa' />
      </div>

      <div className='div-calculator background-picture'>
        {/* all things calculator  ESTRUCTURA PRINCPAL*/}

        <Screen input={input}/>
        <div className='row number-color'>
          {/* todas tienen acceso a la funcion addInput */}
          <Button handleClick={addInput}>1</Button>
          {/* props.children representa lo que esta entre etiquetas de Button */}
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row clear-button'>
          <Button handleClick={result}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>

        <div className='row'>
          <ButtonClear handleClick={clear}>Clear</ButtonClear>
      </div>
      </div>
    </div>
  );
}

export default App;

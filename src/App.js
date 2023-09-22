import './App.css';
import freeCodeCampLogo from './img-fcc/freecodecamp-logo.png';
import Button from './components/button';

function App() {
  return (
    <div className="App">
      <div className="fcc-logo-div">
        <img
          src={freeCodeCampLogo}
          className='logo-fcc'
          alt='freeCodeCamp-Logo' />
      </div>

      <div className='div-calculator'>
        {/* all things calculator */}
        <div className='row'>
          <Button>1</Button>
        </div>
        <div className='row'>
      
        </div>
        <div className='row'>

        </div>
        <div className='row'>

        </div>
        <div className='row'>

        </div>
      </div>
    </div>
  );
}

export default App;

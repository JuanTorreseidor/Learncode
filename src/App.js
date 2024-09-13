import { useState } from 'react';
import './App.css';
import imgRick from './img/rick-morty.png';
import Caracters from './components/caracters';

function App() {
  const [character, setCaracters] = useState(null);
  const rickapi = async () =>{
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const caracterapi = await api.json();

    setCaracters(caracterapi.results)
  }

  console.log(character)
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'> Rick & mory</h1>

        {character ? (
          <Caracters character={character} setCaracters={setCaracters} />
        ) :(
          <> 
            <img src={imgRick} alt='Rick & morty' className='img-home'></img>
            <button onClick={rickapi} className='btn-search'> Buscar personajes</button>
          </>
        
        ) }

        
        
      </header>
    </div>
  );
}

export default App;

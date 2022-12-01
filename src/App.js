import DraftValue from "./components/DraftValue";
import './styles/App.scss'
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

      // #region GET Request
      const [characters, setCharacters] = useState('');

      const getCharacters = () => {
          axios.get(`draft_value.json`)
          .then(response => {
          setCharacters(response.data)
          })
      }

      useEffect(() => {
          getCharacters();
      }, []);

      //This is needed to make the response data a valid array. Prevents errors.
      const charactersList = []
      for (let i=0; i<characters.length; i++) {
          charactersList.push(characters[i])
      }
      // #endregion GET request


  return (
    <div className="App">
      <DraftValue charactersList={charactersList}/>
    </div>
  );
}

export default App;

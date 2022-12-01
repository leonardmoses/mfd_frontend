import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/DraftValue.scss'

const DraftValue = () => {

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
    // #endregion GET request

    //This is needed to make the response data a valid array. Prevents errors.
    const characterList = []
    for (let i=0; i<characters.length; i++) {
        characterList.push(characters[i])
    }


    return ( 
        <div className='DraftValueMain'>
             {characterList.map((character, index) => {

                return (
                    <div key={index} className="Character">

                            <h2>{character.name}</h2>
                            <h3>{character.draftvalue}</h3>

                    </div>
                )
            })}
            <div>

            </div>
        </div>
     );
}
 
export default DraftValue;
import { useState , useEffect } from "react";
import axios from "axios";



const FeatureCharacter = (props) => {

    let name = ''

    const [apicharacters, setApicharacters] = useState('');

    const getApiCharacters = () => {
      axios.get(`${URL}search/magneto`)
      .then(response => {
        setApicharacters(response.data)
      })
    }

    useEffect(() => {
      getApiCharacters();
    }, []);


    return ( 
        <div>
            <h1>Feature Character</h1>
            <h2>{props.URL}/search/magneto</h2>
            <img src="{props.URL}"></img>
        </div>
     );
}
 
export default FeatureCharacter;
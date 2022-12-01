import React from 'react';
import '../styles/DraftValue.scss'

const DraftValue = (props) => {

    
    return ( 
        <div className='DraftValueMain'>
            {props.charactersList.map((character, index) => {

                return (
                    <div key={index} className="Character">
                            <h2>{character.name}</h2>
                            <h3>{character.draftvalue}</h3>
                    </div>
                )
            })}
        </div>
     );
}
 
export default DraftValue;
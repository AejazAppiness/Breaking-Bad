import React from 'react'
import Spinner from './Spinner'
import CharacterItem from './CharacterItem'

function CharacterList({list, isLoading} ) {
    return (
        <div className="card-container">
            {isLoading ? <Spinner /> : list.map(character => {
                return <CharacterItem item={character} key={character.char_id}/>
            })}
        </div>
    )
}

export default CharacterList

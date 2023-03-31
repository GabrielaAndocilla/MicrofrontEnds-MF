import React, { useEffect, useState } from "react";
import CharacterCard from "../components/characterCard";
import GridWrapper from "../layouts/GridWrapper";
import { getCharacters } from "../services/characters";


const CharacterGrid = ({name,locale}) => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters(name,locale).then(res => {
      console.log(res);
      setCharacters(res)
    })
  },[name,locale])

  return (
    <GridWrapper>

      {
        characters.map(character => <CharacterCard key={character.id} {...character} />)
      }
    </GridWrapper>
  )
}

export default CharacterGrid
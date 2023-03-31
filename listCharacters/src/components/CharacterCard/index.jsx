import React from 'react'
import styled from 'styled-components'

const CharacterCardComponent = ({className,name,description,imagePath}) => {
  return (
    <div className={className}>
      <img width='200' height='200' src={imagePath} alt={`image_${name}`}/>
      <p className='__name'>{name}</p>
      <p className='__description'>{description}</p>
  </div>
  )
}

const CharacterCard = styled(CharacterCardComponent)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #F6F1F1;
padding: 2em;
border-radius: 2em;
  .__name{
    color: #576CBC;
    font-weight: bold;
    font-size: larger;
    letter-spacing: 0.05em;
  }
  .__description{
    text-align: justify;
    color: #19376D;
  }
`
export default CharacterCard
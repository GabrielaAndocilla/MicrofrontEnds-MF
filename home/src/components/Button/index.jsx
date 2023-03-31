import React from 'react'
import styled from 'styled-components'


const ButtonComponent = ({className,onClick,children}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

const Button = styled(ButtonComponent)`
background: #19376D;
border: none;
border-radius: 5px;
color: #A5D7E8;
padding: 0.5em;
margin: 0.25em;
min-width: 65px;

`
export default Button
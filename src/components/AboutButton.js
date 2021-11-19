import React, { Fragment } from "react"
import styled from "styled-components"

const AboutButton = () => {
  return (
    <Fragment>
      <Button>ABOUT US</Button>
    </Fragment>
  )
}
const Button = styled.button`
  width: 300px;
  height: 100px;
  border: 3px solid #fff;
  color: #fff;
  background: black;
  border-radius: 4px;
  box-shadow: inset 0 0 0 0 white;
  transition: ease-out 0.1s;
  font-size: 2rem;
  outline: none;
  cursor: pointer;

  &:hover {
    box-shadow: inset 300px 0 0 0 white;
    background: white;
    color: black;
  }
`
export default AboutButton

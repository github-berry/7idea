import React, { Fragment } from "react"
import styled, { keyframes } from "styled-components"

const TitleComponent = () => {
  return (
    <Fragment>
      <SideTitle>
        <Greeting>we're</Greeting>
        <Title>7 idea</Title>
        <SubTitle>online marketing</SubTitle>
        <Desc>
          7 idea is a new startup company that offers IT solutions and online
          marketing.
        </Desc>
        <Button>ABOUT US</Button>
      </SideTitle>
    </Fragment>
  )
}

const belowToTop = keyframes`
from {
  top: 60%;
  opacity:0;
}

to {
  top: 30%;
  opacity:1;
}
`
const SideTitle = styled.div`
  position: absolute;
  top: 30%;
  animation: ${belowToTop} 2s;
  left: 15%;
  z-index: 1;
`
const Greeting = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #fff;
`
const Title = styled.h2`
  font-size: 10rem;
  @media (max-width: 1199px) {
    font-size: 5rem;
  }
  font-weight: 700;
  color: #d02020;
  margin-top: -20px;
  margin-bottom: -10px;
  text-transform: uppercase;
`
const SubTitle = styled.h1`
  font-size: 3.5rem;
  @media (max-width: 1199px) {
    font-size: 1.75rem;
  }
  text-transform: uppercase;
  color: #fff;
  margin-bottom: -5px;
`
const Desc = styled.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: #fff;
`
const Button = styled.a`
  width: 200px;
  height: 80px;
  border: 3px solid #fff;
  color: #fff;
  background: black;
  border-radius: 4px;
  box-shadow: inset 0 0 0 0 white;
  transition: ease-out 0.2s;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  padding: 15px 25px;
  &:hover {
    box-shadow: inset 300px 0 0 0 white;
    background: white;
    color: black;
  }
  @media (min-width: 1199px) {
    font-weight: bold;
    padding: 10px;
  }
  text-decoration: none;
`

export default TitleComponent

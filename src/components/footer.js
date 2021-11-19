import React, { Fragment } from "react"
import styled from "styled-components"
import { Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <Fragment>
      <MainBox>
        <Box>
          <Image src="logo-white.png" alt="" />
        </Box>
        <Box>
          <A href="#">Home</A>
          <A href="#">About Us.</A>
          <A href="#">Projects.</A>
          <A href="#">Clients.</A>
          <A href="#">Team.</A>
          <A href="#">Contact Us.</A>
        </Box>
        <Box>
          7 idea is a new startup company that offers IT solutions and online
          marketing. We are trying to build a bigger team to answer our business
          needs. As we are growing we are looking for people to join us and
          build up our team and culture. Our service offers a new cutting edge
          technology and we are able to move quickly to catch up with the new
          technology.
        </Box>
      </MainBox>
    </Fragment>
  )
}
const MainBox = styled.div`
  background: black;
  padding: 100px;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 250px 100px;
  @media (max-width: 800px) {
    display: block;
  }
  @media (max-width: 400px) {
    padding: 10px;
  }
`
const Box = styled.div`
  width: 33%;
  @media (max-width: 800px) {
    margin-bottom: 50px;
    width: 100%;
  }
`
const Image = styled.img`
  width: 180px;
  height: 180px;
`
const A = styled.a`
  display: block;
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export default Footer

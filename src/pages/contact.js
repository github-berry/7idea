import React, { Fragment } from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import NavbarComponent from "../components/Navbar"
import SidebarComponent from "../components/Sidebar"
import FooterComponent from "../components/footer"

const AboutPage = () => {
  return (
    <Fragment>
      <NavbarComponent />
      <SidebarComponent />
      <BlackContent>
        <Title>Contact Us.</Title>
      </BlackContent>
      <WhiteContent>
        <Container>
          <Input placeholder="NAME" />
          <Input placeholder="EMAIL" />
          <Textarea placeholder="MESSAGE" rows="4" cols="50" />
          <br />
          <br />
          <SendButton>SEND</SendButton>
        </Container>
      </WhiteContent>
      <FooterComponent />
    </Fragment>
  )
}

const BlackContent = styled.div`
  background: #000;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  margin-top: 100px;
  font-size: 120px;
  color: #fff;
  font-weight: bold;
  @media (max-width: 1200px) {
    font-size: 48px;
  }
`
const WhiteContent = styled.div`
  background: #fff;
  width: 100%;
  height: auto;
  padding-top: 50px;
  padding-bottom: 60px;
`

const Input = styled.input`
  height: 50px;
  width: 80%;
  @media (max-width: 1200px) {
    width: 100%;
  }
  border: none;
  border-bottom: 2px solid silver;
  &:focus {
    outline: none;
    border-bottom: 2px solid #66afe9;
  }
  margin-bottom: 30px;
`
const Textarea = styled.textarea`
  width: 80%;
  @media (max-width: 1200px) {
    width: 100%;
  }
  border: none;
  border-bottom: 2px solid silver;
  &:focus {
    outline: none;
    border-bottom: 2px solid #66afe9;
  }
`
const SendButton = styled.a`
  padding: 10px 20px;
  background: #000;
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    background: silver;
    color: #000;
  }
`
export default AboutPage

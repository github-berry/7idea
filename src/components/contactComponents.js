import React, { Fragment } from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"

const Contact = () => {
  return (
    <Fragment>
      <div className="bg-white" style={{ paddingBottom: "300px" }}>
        <Container style={{ paddingTop: "200px" }}>
          <Title>Let's</Title>
          <Title>Get in Touch</Title>
          <Input placeholder="NAME" />
          <Input placeholder="EMAIL" />
          <Textarea placeholder="MESSAGE" rows="4" cols="50" />
          <br />
          <br />
          <SendButton>SEND</SendButton>
        </Container>
      </div>
    </Fragment>
  )
}



const Title = styled.h1`
  font-size: 120px;

  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 48px;
  }
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
export default Contact

import React, { Fragment } from "react"
import styled, { keyframes } from "styled-components"
import { Row, Col } from "react-bootstrap"

const Project = () => {
  return (
    <Fragment>
      <Row style={{ paddingTop: "50px", paddingBottom: "100px" }}>
        <Col sm={12} lg={6}>
          <Title>Our Projects</Title>
          <Desc>
            7 idea is a new startup company that offers IT solutions and online
            marketing. We are trying to build a bigger team to answer our
            business needs.
            <br />
            <br />
            <Button>More Projects</Button>
          </Desc>
        </Col>
        <Col sm={12} lg={6} className="text-center">
          <img
            width="80%"
            src="project-1.jpeg"
            alt=""
          />
        </Col>
      </Row>
    </Fragment>
  )
}

const Title = styled.h1`
  color: #d01f20;
  font-size: 120px;
  padding-left: 100px;
  font-weight: bold;
  @media (max-width: 992px) {
    font-size: 48px;
    padding-left: 10vw;
  }
`
const Desc = styled.p`
  font-size: 32;
  padding-left: 110px;
  color: #fff;
  @media (max-width: 992px) {
    padding-left: 12vw;
  }
`
const Button = styled.button`
  margin-bottom: 10px;
  width: 300px;
  height: 80px;
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
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`
export default Project

import React, { Fragment } from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

const About = () => {
  return (
    <Fragment>
      <Main>
        <Row>
          <Col sm={12} md={6}>
            <Title>About Us</Title>
          </Col>
          <Col
            sm={12}
            md={6}
            className="text-center d-flex justify-content-center"
          >
            <Desc className="text-start">
              7 idea is a new startup company that offers IT solutions and
              online marketing. We are trying to build a bigger team to answer
              our business needs. As we are growing we are looking for people to
              join us and build up our team and culture. Our service offers a
              new cutting edge technology and we are able to move quickly to
              catch up with the new technology.
            </Desc>
          </Col>
        </Row>
      </Main>
    </Fragment>
  )
}

const Main = styled.div`
  @media (min-width: 768px) {
    padding-top: 500px;
  }
  padding-bottom: 500px;
`
const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 60px;
  margin-bottom: 0;
  @media (min-width: 768px) {
    font-size: 120px;
    transform: rotate(-90deg);
  }
  margin-bottom: 50px;
`
const Desc = styled.div`
  width: 75%;
  color: #fff;
  font-size: 20px;
`
export default About

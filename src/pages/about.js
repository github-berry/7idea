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
        <Title>About Us.</Title>
      </BlackContent>
      <WhiteContent>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <Image src="logo-7idea-about-page.png" alt="" />
            </Col>
            <Col
              sm={12}
              md={6}
              className="d-flex justify-content-center align-items-center flex-column mt-5"
            >
              <Desc>
                7 idea is a new startup company that offers IT solutions and
                online marketing. We are trying to build a bigger team to answer
                our business needs. As we are growing we are looking for people
                to join us and build up our team and culture. Our service offers
                a new cutting edge technology and we are able to move quickly to
                catch up with the new technology.
              </Desc>
              <Desc>
                7 idea is a new startup company that offers IT solutions and
                online marketing. We are trying to build a bigger team to answer
                our business needs. As we are growing we are looking for people
                to join us and build up our team and culture. Our service offers
                a new cutting edge technology and we are able to move quickly to
                catch up with the new technology.
              </Desc>
            </Col>
          </Row>
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
  height: 600px;
  @media (max-width: 768px) {
    height: 900px;
  }
`
const Image = styled.img`
  width: 100%;
`
const Desc = styled.p`
  color: #000;
`
export default AboutPage

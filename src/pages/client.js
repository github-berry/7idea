import React, { Fragment } from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import NavbarComponent from "../components/Navbar"
import SidebarComponent from "../components/Sidebar"
import FooterComponent from "../components/footer"

const ClientPage = () => {
  const _clientItems = ["7idea-marketing-online.png", "kongsalak-com.jpeg"]
  return (
    <Fragment>
      <NavbarComponent />
      <SidebarComponent />
      <BlackContent>
        <Title>Clients.</Title>
      </BlackContent>
      <WhiteContent>
        <Container>
          <Row>
            {_clientItems.map((client, i) => {
              return (
                <Col key={i} sm={12} md={6}>
                  <Image src={client} alt="" />
                </Col>
              )
            })}
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
  width: 80%;
`
const Desc = styled.p`
  color: #000;
`
export default ClientPage

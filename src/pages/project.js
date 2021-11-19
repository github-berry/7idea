import React, { Fragment } from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import NavbarComponent from "../components/Navbar"
import SidebarComponent from "../components/Sidebar"
import FooterComponent from "../components/footer"

const Project = () => {
  return (
    <Fragment>
      <NavbarComponent />
      <SidebarComponent />
      <BlackContent>
        <Title>Projects.</Title>
      </BlackContent>
      <WhiteContent>
        <Container className="d-flex justify-content-center align-items-center flex-column pt-5 pb-5">
          <Image
            src="project-1.jpeg"
            alt=""
          />
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
  @media (max-width: 770px) {
    height: 700px;
  }
  @media (max-width: 600px) {
    height: 600px;
  }
  @media (max-width: 500px) {
    height: 500px;
  }
`
const Image = styled.img`
  width: 500px;
  @media (max-width: 600px) {
    width: 90%;
  }
`
export default Project

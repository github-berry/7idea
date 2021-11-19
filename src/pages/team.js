import React, { Fragment } from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import NavbarComponent from "../components/Navbar"
import SidebarComponent from "../components/Sidebar"
import FooterComponent from "../components/footer"

const TeamPage = () => {
  const _teamItems = [
    {
      image: "team-1.jpeg",
      name: "John Doe",
      role: "Director",
    },
    {
      image: "team-2.jpeg",
      name: "Jane Doe",
      role: "Engineer Manager",
    },
  ]
  return (
    <Fragment>
      <NavbarComponent />
      <SidebarComponent />
      <BlackContent>
        <Title>Team.</Title>
      </BlackContent>
      <WhiteContent>
        <Container className="d-flex flex-wrap justify-content-center align-items-center">
          {_teamItems.map((team, i) => {
            return (
              <Team>
                <Image src={team.image} alt="" />
                <TeamName>{team.name}</TeamName>
                <TeamRole>{team.role}</TeamRole>
              </Team>
            )
          })}
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
  // @media (max-width: 768px) {
  //   height: 900px;
  // }
`
const Image = styled.img`
  width: 100%;
  height: 80%;
  // object-fit: cover;
  // object-position: top;
`
const Team = styled.div`
  width: 400px;
  height: 500px;
  box-sizing: border-box;
  margin: 10px;
  margin-top:30px;
`
const TeamName = styled.h1`
  font-weight: bold;
  margin-left: 10px;
`
const TeamRole = styled.p`
  color: #666;
  margin-left: 10px;
`

export default TeamPage

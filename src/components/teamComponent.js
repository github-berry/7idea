import React, { Fragment } from "react"
import styled, { keyframes } from "styled-components"
import { Row, Col } from "react-bootstrap"

const Team = () => {
  const imageTeam = ["team-1.jpeg", "team-2.jpeg", "team-1.jpeg"]
  return (
    <Fragment>
      <div className="bg-white pt-5">
        <Row className="mt-5 mb-5">
          <Col md={12} lg={4}>
            <Title>Meet</Title>
            <br />
            <Title>the</Title>
            <br />
            <Title>Team.</Title>
            <Desc>
              7 idea is a new startup company that offers IT solutions and
              online marketing. We are trying to build a bigger team to answer
              our business needs.
              <br />
              <br />
              <br />
              <MoreTeamButton>More Team</MoreTeamButton>
            </Desc>
          </Col>
          <Col md={12} lg={8}>
            <Row>
              {imageTeam.map((image, i) => {
                return (
                  <Col key={i}>
                    <BoxImage>
                      <Image src={image} />
                      <Tigger>
                        <BoxBlack className="box-black" />
                        <Content className="content">
                          <ContentBody>
                            <Name>John Doe</Name>
                            <CoverLine>
                              <Line className="line" />
                            </CoverLine>
                            <Role>Director</Role>
                          </ContentBody>
                        </Content>
                      </Tigger>
                    </BoxImage>
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

const animation = keyframes`
  from {
    transform: scaleX(0.4);
  }
  to {
    transform: scaleX(1);
  }
`
const BoxImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const Image = styled.img`
  width: 100%;
  height:100%
  // object-fit: cover;
  // object-position: top;
  margin-left: 20px;
`

const Tigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover .content {
    opacity: 1;
  }
  &:hover .box-black {
    opacity: 0.7;
  }
  &:hover .line {
    animation: ${animation} 1s;
  }
`
const BoxBlack = styled.div`
  position: absolute;
  background: black;
  opacity: 0;
  width: 100%;
  height: 100%;
  transition: ease-in 1s;
  top: 0;
`
const Content = styled.div`
  position: absolute;
  transition: ease-in 0.5s;
  opacity: 0;
  width: 30%;
  height: 30%;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Name = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`
const CoverLine = styled.div`
  width: 80%;
`
const Line = styled.div`
  background: red;
  height: 2px;
`
const Role = styled.p`
  margin-top: 10px;
  text-align: center;
  color: #fff;
`
const Title = styled.h1`
  display: inline-block;
  margin-left: 100px;
  @media (max-width: 1235px) {
    font-size: 48px;
    margin-left: 50px;
  }
  @media (max-width: 992px) {
    margin-left: 10px;
  }
  font-size: 120px;
  font-weight: bold;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
`
const Desc = styled.p`
  margin-left: 100px;
  margin-top: 40px;
  margin-bottom: 40px;
  @media (max-width: 1235px) {
    margin-left: 50px;
  }
  @media (max-width: 992px) {
    margin-left: 10px;
  }
`

const MoreTeamButton = styled.a`
  padding: 15px 32px;
  border: none;
  font-size: 20px;
  text-decoration: none;
  color: #fff;
  background: #d01f20;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`
export default Team

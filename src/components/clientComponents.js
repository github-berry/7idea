import React, { Fragment } from "react"
import styled, { keyframes } from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

const ClientForDesktop = () => {
  return (
    <Fragment>
      <Cont>
        <MainD>
          <MainRedD>
            <Row style={{ marginBottom: "100px" }} className="row">
              <Col xxl={6}>
                <TitleD>Beloved</TitleD>
                <TitleD>Clients.</TitleD>
              </Col>
              <Col xxl={6}>
                <DescD>
                  7 idea is a new startup company that offers IT solutions and
                  online marketing. We are trying to build a bigger team to
                  answer our business needs. As we are growing we are looking
                  for people to join us and build up our team and culture. Our
                  service offers a new cutting edge technology and we are able
                  to move quickly to catch up with the new technology.
                </DescD>
                <br />
                <MoreClientsButtonD>More Clients</MoreClientsButtonD>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={6} className="mb-5">
                <Image src="kongsalak-com.jpeg" alt="" />
              </Col>
              <Col md={12} lg={6}>
                <Image src="client-2.jpeg" alt="" />
              </Col>
            </Row>
          </MainRedD>
        </MainD>
      </Cont>
    </Fragment>
  )
}
const Cont = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  @media (max-width: 992px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`
const MainD = styled.div`
  position: relative;
  width: 100%;
  background: blue;
  box-sizing: border-box;
`
const MainRedD = styled.div`
  top: -100px;
  background: #d01f20;
  padding: 100px;
  @media (max-width: 992px) {
    padding: 10px;
  }
  box-sizing: border-box;
  width: 100%;
  display: block;
  position: absolute;
  font-weight: bold;
`
const TitleD = styled.h1`
  font-size: 120px;
  color: #fff;
  @media (max-width: 992px) {
    font-size: 48px;
  }
`
const DescD = styled.p`
  color: #fff;
`
const MoreClientsButtonD = styled.a`
  width: 200px;
  height: 80px;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 4px;
  box-shadow: inset 0 0 0 0 white;
  transition: ease-out 0.2s;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  padding: 15px 25px;
  &:hover {
    box-shadow: inset 300px 0 0 0 white;
    background: white;
    color: black;
  }
  @media (min-width: 1199px) {
    padding: 10px;
  }
  text-decoration: none;
`
const Image = styled.img`
  width: 100%;
`

//-------------------//
const Client = () => {
  return (
    <Fragment>
      <ClientForDesktop />
      <EmptyBox />
    </Fragment>
  )
}
const EmptyBox = styled.div`
  // background: #ffc0cb;

  height: 70vw;
  @media (max-width: 1400px) {
    height: 90vw;
    // background: blue;
  }
  @media (max-width: 1150px) {
    height: 105vw;
    // background: orange;
  }
  @media (max-width: 992px) {
    height: 250vw;
    // background: purple;
  }
  @media (max-width: 730px) {
    height: 315vw;
    // background: yellow;
  }
`

export default Client

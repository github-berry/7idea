import React, { Fragment } from "react"
import OneContent from "./oneContent"
import About from "../components/aboutComponents"
import Client from "../components/clientComponents"
import Team from "../components/teamComponent"
import Project from "../components/projectComponent"
import Contact from "../components/contactComponents"
import Footer from "../components/footer"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Home() {
  return (
    <Fragment>
      <Cover>
        <OneContent />
        <About />
        <Client />
        <Team />
        <Project />
        <Contact />
        <Footer />
      </Cover>
    </Fragment>
  )
}

const Cover = styled.div`
  background: #000;
`

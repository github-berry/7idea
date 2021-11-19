import React, { Fragment } from "react"
import styled from "styled-components"
import "normalize.css"

const NavbarComponent = () => {
  const _navItems = [
    { link: "/", name: "HOME" },
    { link: "about", name: "ABOUT US." },
    { link: "project", name: "PROJECTS." },
    { link: "client", name: "CLIENTS." },
    { link: "team", name: "TEAM." },
    { link: "contact", name: "CONTACT US." },
  ]
  return (
    <Fragment>
      <BoxFaded></BoxFaded>
      <Header>
        <Logo href="/">
          <img
            width="85"
            src="https://7idea.com/wp-content/uploads/2021/08/logo-white.png"
            alt="logo"
          />
        </Logo>
        <Ul>
          {_navItems.map((nav, i) => {
            return (
              <Li key={i}>
                <a href={nav.link}>{nav.name}</a>
              </Li>
            )
          })}
        </Ul>
        <GetInTouch href="#">Get In Touch</GetInTouch>
      </Header>
    </Fragment>
  )
}
const BoxFaded = styled.div`
  width: 100%;
  height: 120px;
  background: #000;
  opacity:.7;
  position: fixed;
  z-index: 1;
  @media (max-width:1199px){
    height: 85px;
  }
`
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #333333;
  z-index: 2;
`
const Logo = styled.a`
  background-color: #d02020;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
`
const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
`
const Li = styled.li`
  display: inline-block;
  & a {
    display: block;
    color: white;
    text-align: center;
    padding: 48px 40px;
    text-decoration: none;
    transition: all 0.5s ease;
    // font-weight: bold;
    @media (max-width: 1199px) {
      padding-top: 16px;
      padding-bottom: 16px;
    }
  }
  @media (max-width: 1199px) {
    display: none;
  }

  &:hover a {
    text-decoration: underline;
  }
`
const GetInTouch = styled.a`
  padding: 20px 70px;
  display: flex;
  align-items: center;
  background-color: #d02020;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #fff;
  }
  @media (max-width: 1199px) {
    display: none;
  }
`

export default NavbarComponent

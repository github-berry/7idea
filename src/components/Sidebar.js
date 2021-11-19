import React, { Fragment, useState } from "react"
import styled, { injectGlobal } from "styled-components"
import { FaBars, FaTimes } from "react-icons/fa"
import "normalize.css"
const SidebarComponent = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  console.log("openSidebar: ", openSidebar)

  const _navItems = [
    { link: "/", name: "Home" },
    { link: "about", name: "About Us." },
    { link: "project", name: "Project." },
    { link: "client", name: "Client." },
    { link: "team", name: "Team." },
    { link: "contact", name: "Contact Us." },
  ]
  return (
    <Fragment>
      <Open onClick={() => setOpenSidebar(!openSidebar)} active={openSidebar} />

      <Close
        onClick={() => setOpenSidebar(!openSidebar)}
        active={openSidebar}
      />
      <Sidebar active={openSidebar}>
        <ul>
          {_navItems.map((nav, i) => {
            return (
              <Li key={i}>
                <A href={nav.link}>{nav.name}</A>
              </Li>
            )
          })}
        </ul>
      </Sidebar>
      {/* <p>fjdklfjldsjfsldf</p> */}
      {/* <style jsx>
        {`
          p {
            background: red;
          }
        `}
      </style> */}
    </Fragment>
  )
}

const Sidebar = styled.div`
  left: ${props => (props.active ? "0" : "-250px")};
  position: fixed;
  width: 250px;
  height: 100%;
  top: 0;
  background: #d01f20;
  transition: all 0.5s ease;
  @media (min-width: 1199px) {
    display: none;
  }
  z-index: 3;
`
const Li = styled.li`
  list-style: none;
  &:hover ${A} {
    text-decoration: underline;
  }
`
const A = styled.a`
  display: block;
  height: 100%;
  width: 100%;
  line-height: 50px;
  font-size: 30px;
  color: white;
  font-weight: bold;
  box-sizing: border-box;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`
const Open = styled(FaBars)`
  z-index: ${props => (props.openSidebar ? 0 : 2)};
  opacity: ${props => (props.active ? 0 : 1)};
  position: fixed;
  cursor: pointer;
  // background: #042331;
  border-radius: 3px;
  display: none;
  right: 40px;
  top: 20px;
  font-size: 50px;
  color: white;
  padding: 6px 12px;
  transition: all 0.5s;
  @media (max-width: 1199px) {
    display: inline-block;
  }
`
const Close = styled(FaTimes)`
  z-index: ${props => (props.openSidebar ? 0 : 2)};
  opacity: ${props => (props.active ? 1 : 0)};
  position: fixed;
  cursor: pointer;
  // background: #042331;
  border-radius: 3px;
  display: none;
  right: 40px;
  top: 20px;
  font-size: 50px;
  color: white;
  padding: 8px 10px;
  transition: all 0.5s ease;
  @media (max-width: 1199px) {
    display: inline-block;
  }
`

export default SidebarComponent

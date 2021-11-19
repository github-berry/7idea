import React, { Fragment } from "react"
import NavbarComponent from "../components/Navbar"
import SidebarComponent from "../components/Sidebar"
import BackgroundImage from "../components/BackgroundImage"
import ContactUs from "../components/ContactUsLeft"
import TitleComponent from "../components/Title"
const OneContent = () => {
  return (
    <Fragment>
      <NavbarComponent />
      <BackgroundImage />
      
      <SidebarComponent />
      <ContactUs />
      <TitleComponent />
    </Fragment>
  )
}

export default OneContent

import React, { Fragment } from "react"
import styled from "styled-components"
import { FaFacebook, FaLinkedin } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"

const ContactUsLeft = () => {
  return (
    <Fragment>
      <ContactBar className="contact-bar">
        <div className="social-icon">
          <a href="#">
            <AiOutlineMail size="15" color="white" />
          </a>
        </div>
        <div className="social-icon">
          <a href="#">
            <FaFacebook
              size="15"
              color="white"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            />
          </a>
        </div>
        <div className="social-icon">
          <a href="#">
            <FaLinkedin size="15" color="white" />
          </a>
        </div>
        <Line />
        <Title>
          <strong>Contact</strong> Us
        </Title>
      </ContactBar>
    </Fragment>
  )
}
const ContactBar = styled.div`
  color: white;
  position: absolute;
  width: 120px;
  height: 1180px;
  top: 120px;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 2;
  background-color: #333;
  @media (max-width: 1199px) {
    display: none;
  }
`
const Line = styled.div`
  width: 1px;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 1rem 0;
`
const Title = styled.div`
  transform: rotate(-90deg);
  margin-top: 50px;
  font-size: 24px;
`

export default ContactUsLeft

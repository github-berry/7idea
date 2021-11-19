import React, { Fragment } from "react"
import styled from "styled-components"

const BackgroundImage = () => {
  return (
    <Fragment>
      <div style={{ position: "relative" }}>
        <Image />
        <div
          style={{
            background: "black",
            width: "100%",
            height: "1300px",
            opacity: ".8",
            position: "absolute",
            top: 0,
          }}
        ></div>
      </div>
    </Fragment>
  )
}
const Image = styled.div`
  background-image: url("https://7idea.com/wp-content/uploads/2021/08/home-main-bg.jpg");
  height: 1300px;
  background-size: cover;
  background-repeat: no-repeat;
`
export default BackgroundImage

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { media } from "../assets/js/helpers"

import icon1 from "../images/header-icon-1.png"
import icon2 from "../images/header-icon-2.png"
import icon3 from "../images/header-icon-3.png"
import icon4 from "../images/header-icon-4.png"

const Header = ({ siteTitle, className }) => (
  <div className={className}>
    <div className="left">
      <div className="cat">
        <img src={icon1} alt="icon1" />
      </div>
      <div className="cat">
        <img src={icon2} alt="icon2" />
      </div>
    </div>
    <div className="mid">
      <Link to="/">
        <h1>{siteTitle}</h1>
        <p>Never Ending Footsteps</p>
      </Link>
    </div>
    <div className="right">
      <div className="cat">
        <img src={icon3} alt="icon3" />
      </div>
      <div className="cat">
        <img src={icon4} alt="icon4" />
      </div>
    </div>
  </div>
)

export default styled(Header)`
  display: none;
  justify-content: space-between;
  margin: 3rem 0;

  ${media.medium`
		display: flex;
	`}

  & > * {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }

  svg {
    color: black;
    font-size: 3rem;
  }

  h1 {
    margin: 0;
    font-family: "Epic Ride";
    font-weight: 400;
    font-size: 5rem;
    color: black;
    text-decoration: none;
  }

  .cat {
    cursor: pointer;
  }

  .mid {
    text-align: center;
  }

  p {
    color: #959595;
    font-family: Montserrat, sans-serif;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.33em;
    text-transform: uppercase;
  }
`

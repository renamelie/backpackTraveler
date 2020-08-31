import { createGlobalStyle } from 'styled-components'
import epicRide from '../fonts/Epic-Ride.ttf'
import { pxToRem, media } from './helpers'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: white;
    animation: gradient 15s ease infinite;
  }

  a {
    text-decoration: none;
		box-shadow: none;
    color: black;
  }

  @font-face {
    font-family: "Epic Ride";
    src: url(${epicRide}) format("truetype");
  }

  .navActive span {
		color: #f7775e;
	}

  h3,
	p {
		margin: 1rem 1rem 0;
	}

	h3 {
		font-family: Montserrat, sans-serif;
		font-weight: 400;
		font-size: ${pxToRem(17)};
		line-height: 1.33em;
		letter-spacing: 0.2em;
		text-transform: uppercase;
	}

	p {
		color: #838383;
		font-size: ${pxToRem(18)};
		line-height: 30px;
	}

	${media.medium`
		h3 {
      font-size: ${pxToRem(24)};
    }
    p {
      font-size: ${pxToRem(16)};
    }
  `};

`

export default Global

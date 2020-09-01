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

  .articleText {
		flex: 1;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		padding: 0 10%;
	}

	.articleText h2,
	.articleText h4 {
		margin: 0;
		text-align: center;
	}

	.articleText h2 {
		font-family: 'Epic Ride', sans-serif;
		font-weight: 400;
	}

	.articleText h4 {
		font-family: 'Montserrat', sans-serif;
		line-height: 1.57em;
		font-weight: 500;
		margin: 5px 0;
	}

	.articleText p {
		color: #959595;
		font-family: Montserrat, sans-serif;
		line-height: 1.8em;
		text-transform: uppercase;
		font-weight: 400;
		letter-spacing: 0.33em;
		margin: 15px 0;
	}
`

export default Global

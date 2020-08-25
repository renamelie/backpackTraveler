import { createGlobalStyle } from "styled-components"
import epicRide from "../fonts/Epic-Ride.ttf"

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

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes slide {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(10px, 0);
    }
  }

  @keyframes rubberBand {
    from {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, .95, 1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }


`

export default Global

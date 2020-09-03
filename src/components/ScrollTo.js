import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaArrowCircleUp } from 'react-icons/fa'

const ScrollArrow = ({ className }) => {
	const [showScroll, setShowScroll] = useState(false)

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true)
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false)
		}
	}

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	useEffect(() => {
		window.addEventListener('scroll', checkScrollTop)
	})

	return (
		<FaArrowCircleUp
			className={className}
			onClick={scrollTop}
			style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
		/>
	)
}

export default styled(ScrollArrow)`
	position: fixed;
	width: 100%;
	bottom: 20px;
	align-items: center;
	height: 20px;
	justify-content: center;
	z-index: 1000;
	cursor: pointer;
	animation: fadeIn 0.3s;
	transition: opacity 0.4s;
	opacity: 0.5;

	&:hover {
		opacity: 1;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 0.5;
		}
	}
`

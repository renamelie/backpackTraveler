import React from 'react'
import GlobalStyle from './src/assets/js/GlobalStyle'
import 'typeface-montserrat'

export const wrapPageElement = ({ element }) => {
	return (
		<>
			{element}
			<GlobalStyle />
		</>
	)
}

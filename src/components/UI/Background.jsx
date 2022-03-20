import React from 'react'
import styled from 'styled-components'

const StyledBackgroundDiv = styled.div`
	z-index: -900;
	height: 100%;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	overflow: hidden;
	background-color: #f9fafc;
`

const Background = ({ children }) => {
	return <StyledBackgroundDiv>{children}</StyledBackgroundDiv>
}

export default Background

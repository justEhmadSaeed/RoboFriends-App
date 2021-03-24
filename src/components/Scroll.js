import React from 'react'

const Scroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll', maxHeight: '400px' }}>
			{props.children}
		</div>
	)
}

export default Scroll

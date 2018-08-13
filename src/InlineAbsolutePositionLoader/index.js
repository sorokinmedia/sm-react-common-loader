import PropTypes from 'prop-types'
import React from 'react'
import InlineSmallLoader from '../InlineSmallLoader'

function InlineAbsolutePositionLoader(props) {
	const { top, right, bottom, left } = props
	return (
		<div
			style={{
				position: 'absolute',
				top: `${top}`,
				right: `${right}`,
				bottom: `${bottom}`,
				left: `${left}`
			}}
		>
			<InlineSmallLoader />
		</div>)
}

InlineAbsolutePositionLoader.propTypes = {
	top: PropTypes.string,
	right: PropTypes.string,
	bottom: PropTypes.string,
	left: PropTypes.string,
}
InlineAbsolutePositionLoader.defaultProps = {
	top: '0',
	left: '0',
}
export default InlineAbsolutePositionLoader

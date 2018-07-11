import React from 'react'
import PropTypes from 'prop-types'
import Loading from 'react-loading'

function InlineSmallLoader(props) {
	const { size, color, style } = props;

	return (
		<div className="inline-small-loader" style={style}>
			<Loading type="bubbles" color={color} width={size} height={size} />
		</div>)
}

InlineSmallLoader.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string,
	style: PropTypes.object
};

InlineSmallLoader.defaultProps = {
	size: 32,
	color: '#888888',
	style: {}
};

export default InlineSmallLoader

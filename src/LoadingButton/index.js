import PropTypes from 'prop-types'
import React from 'react'
import Loader from '../InlineAbsolutePositionLoader'

function LoadingButton(props) {
	const {
		label, className, type, loading, onClick
	} = props

	return (
		<button
			type={type}
			className={className}
			style={{
				height: '34px',
				minWidth: '87px',
				position: 'relative'
			}}
			disabled={loading}
			onClick={onClick}
		>
			{
				loading ? <Loader color="#ffffff" left="30%" />
					: props.children}
		</button>)
}

LoadingButton.propTypes = {
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	className: PropTypes.string,
	type: PropTypes.string,
	loading: PropTypes.bool,
	children: PropTypes.node,
	onClick: PropTypes.func
}

LoadingButton.defaultProps = {
	label: 'OK',
	className: 'btn btn-primary btn-block btn-flat',
	type: 'submit',
	loading: false
}

export default LoadingButton

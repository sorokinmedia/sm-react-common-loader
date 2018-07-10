import React from 'react'
import PropTypes from 'prop-types'
import Loading from 'react-loading'
import './style.css'

function Loader(props) {
	const { text, type, size } = props;
	const viewSize = size ? size : 64;
	const usingType = type ? type : 'bubbles';
	const loader = (
		<div className="loading">
			<span className="loader-text">{text ? text : 'Загрузка...'}</span>
			<Loading type={usingType} color="#888888" width={viewSize} height={viewSize} />
		</div>)

	return <div>{loader}</div>
}

Loader.propTypes = {
	text: PropTypes.string,
	type: PropTypes.string,
	size: PropTypes.number
};

export default Loader

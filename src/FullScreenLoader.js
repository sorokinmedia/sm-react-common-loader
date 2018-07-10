import React from 'react'
import Loader from './Loader';

function FullScreenLoader() {
	return (
		<div className="loader-wrapper full-screen-loader">
			<div className="centerViewer">
				<Loader />
			</div>
		</div>)
}

export default FullScreenLoader

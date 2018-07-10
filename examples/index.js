import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { Loader } from '../lib';

function App() {
	return (
		<div>
			<Loader />
		</div>
	)
}

App.propTypes = {}
App.defaultProps = {}

render(<App />, document.getElementById('root'));

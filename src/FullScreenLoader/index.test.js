import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import FullScreenLoader from './index';

configure({ adapter: new Adapter() });

function setup(customProps, lifeCycle = false) {
	const props = { ...customProps }
	const container = shallow(
		<FullScreenLoader {...props} />,
		{ disableLifecycleMethods: lifeCycle }
	)
	return { container, props }
}


describe('FullScreenLoader', () => {
	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true);
	});

	it('should has loader-wrapper class', () => {
		const { container } = setup()
		expect(container.hasClass('loader-wrapper full-screen-loader')).toBe(true)
	});

	it('should render loader loading', () => {
		const { container } = setup()
		expect(container.find('Loader').length).toEqual(1)
	});


});

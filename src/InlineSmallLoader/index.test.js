import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import InlineSmallLoader from './index';

configure({ adapter: new Adapter() });

function setup(customProps, lifeCycle = false) {
	const props = { ...customProps }
	const container = shallow(
		<InlineSmallLoader {...props} />,
		{ disableLifecycleMethods: lifeCycle }
	)
	return { container, props }
}


describe('InlineSmallLoader', () => {
	const { container } = setup()
	it('should render the component', () => {
		expect(container.exists()).toBe(true);
	});

	it('should render loader loading', () => {
		expect(container.find('Loading').length).toEqual(1)
	});

});

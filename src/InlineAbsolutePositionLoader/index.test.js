import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import InlineAbsolutePositionLoader from './index';

configure({ adapter: new Adapter() });

function setup(customProps, lifeCycle = false) {
	const props = { ...customProps }
	const container = shallow(
		<InlineAbsolutePositionLoader {...props} />,
		{ disableLifecycleMethods: lifeCycle }
	)
	return { container, props }
}


describe('InlineAbsolutePositionLoader', () => {
	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true);
	});

	it('should the component show text prop text', () => {
		const styleProps = {
			top: '10px',
			right: '30px',
			bottom: '50px',
			left: '70px'
		}
		const { container } = setup(styleProps)
		expect(container.prop('style').top).toEqual(styleProps.top);
		expect(container.prop('style').right).toEqual(styleProps.right);
		expect(container.prop('style').bottom).toEqual(styleProps.bottom);
		expect(container.prop('style').left).toEqual(styleProps.left);
	});

	it('should render InlineSmallLoader', () => {
		const { container } = setup()
		expect(container.find('InlineSmallLoader').length).toEqual(1)
	});
});

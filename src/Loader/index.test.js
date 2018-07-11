import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Loader from './index';

configure({ adapter: new Adapter() });

function setup(customProps, lifeCycle = false) {
	const props = { ...customProps }
	const container = shallow(
		<Loader {...props} />,
		{ disableLifecycleMethods: lifeCycle }
	)
	return { container, props }
}


describe('Loader', () => {
	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true);
	});

	it('should the component has div with class loading', () => {
		const { container } = setup()
		expect(container.find('.loading').length).toEqual(1)
	});

	it('should the component show text prop text', () => {
		const { container } = setup({ text: 'Some text' })
		expect(container.find('.loader-text').text()).toEqual('Some text')
	});

	it('should render default styles', () => {
		const { container } = setup()
		expect(container.find('Loading').props().type).toEqual('bubbles')
		expect(container.find('Loading').props().height).toEqual(64)
	});

	it('should render loader loading', () => {
		const { container } = setup()
		expect(container.find('Loading').length).toEqual(1)
	});

});

import React from 'react';
import { shallow } from 'react-native-testing-library';
import AddItemButton from '../../components/AddItemButton';

describe('AddItemButton component', () => {
	it('renders correctly', () => {
		const { output } = shallow(<AddItemButton />);

		expect(output).toMatchSnapshot();
	});
});

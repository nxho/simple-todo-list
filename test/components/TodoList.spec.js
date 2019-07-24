import React from 'react';
import { render, shallow, waitForElement, fireEvent } from 'react-native-testing-library';
import TestRenderer from 'react-test-renderer';
import {
	ScrollView,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import TodoList from '../../components/TodoList';

describe('TodoList component', () => {
	it('renders correctly', () => {
		const { output } = shallow(<TodoList />);

		expect(output).toMatchSnapshot();
	});

	it('pressing add item button creates new item that is editable', async () => {
		// workaround for react-test-renderer not being able to render ScrollView
		jest.mock('ScrollView', () => require.requireMock('ScrollViewMock'));

		const { getByType, getByTestId, update, debug } = render(<TodoList />);

		fireEvent.press(getByTestId('add-item-button'));

		await expect(waitForElement(() => getByTestId('item0-text-input'))).resolves.not.toThrow();

		await fireEvent.changeText(getByTestId('item0-text-input'), 'List item 0');
		expect(getByTestId('item0-text-input').props.value).toEqual('List item 0');
	});
});

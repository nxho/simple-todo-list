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

  xit('pressing add item button creates new item that is editable', async () => {
    const { getByType, getByTestId, update, debug } = render(<TodoList />);

    fireEvent.press(getByTestId('add-item-button'));

    // TODO: this currently breaks because react-test-renderer cannot render ScrollView????
    // it works if you change it to a View component instead
    await expect(waitForElement(() => getByTestId('item0-text-input'))).resolves.not.toThrow();

    await fireEvent.changeText(getByTestId('item0-text-input'), 'List item 0');
    expect(getByTestId('item0-text-input').props.value).toEqual('List item 0');
  });

  it('pressing add item button creates new item that is editable - test-renderer version', () => {
    const renderer = TestRenderer.create(<TodoList />);
    const root = renderer.root;

    root.findByType(TouchableOpacity).props.onPress();

    expect(root.findByType(ScrollView).props.children[0]).toBeDefined();
    expect(root.findByType(ScrollView).props.children[0].props.testID).toEqual('item0-text-input');
    expect(root.findByType(ScrollView).props.children[0].props.value).toEqual('');

    root.findByType(ScrollView).props.children[0].props.onChangeText('List item 0');
    expect(root.findByType(ScrollView).props.children[0].props.value).toEqual('List item 0');
  });
});

import React from 'react';
import { shallow } from 'react-native-testing-library';
import ItemList from '../../components/ItemList';

describe('ItemList component', () => {
  it('renders correctly', () => {
    const items = [];
    const mockFn = jest.fn();
    const { output } = shallow(<ItemList items={items} onChange={mockFn} />);

    expect(output).toMatchSnapshot();
  });
});


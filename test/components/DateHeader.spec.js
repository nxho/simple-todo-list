import React from 'react';
import { render, shallow, fireEvent } from 'react-native-testing-library';
import DateHeader from '../../components/DateHeader';

describe('DateHeader component', () => {
  const origDate = Date;
  const testDate = new Date(1549411200000);

  beforeEach(() => {
    // mock current date to Wednesday, February 5, 2019, 12:00:00 AM
    global.Date = class extends Date {
      constructor() {
        return testDate;
      }
    }
  });

  afterEach(() => {
    global.Date = origDate;
  });

  it('renders correctly', () => {
    const { output } = shallow(<DateHeader />);

    expect(output).toMatchSnapshot();
  });

  it('displays current date correctly', () => {
    const { getByTestId } = render(<DateHeader />);

    expect(getByTestId('month').props.children).toEqual(new Intl.DateTimeFormat('en-US', { month: 'long' }).format(testDate).substr(0,3).toUpperCase());
    expect(getByTestId('day').props.children).toEqual(testDate.getDate());
    expect(getByTestId('year').props.children).toEqual(testDate.getFullYear());
    expect(getByTestId('weekday').props.children).toEqual(new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(testDate).toUpperCase());
  });
});


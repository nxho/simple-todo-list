import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class DateHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    }
  }

  formatMonth(date) {
    return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date).substr(0,3).toUpperCase();
  }

  formatWeekday(date) {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date).toUpperCase();
  }

  render() {
    const { date } = this.state;

    return(
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.dayText} testID='day'>
            { date.getDate() }
          </Text>
          <View style={{ justifyContent: 'center', marginLeft: 5 }}>
            <Text style={styles.monthText} testID='month'>
              { this.formatMonth(date) }
            </Text>
            <Text style={styles.yearText} testID='year'>
              { date.getFullYear() }
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.weekdayText} testID='weekday'>
            { this.formatWeekday(date) }
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayText: {
    fontSize: 45,
  },
  monthText: {
    fontWeight: 'bold',
  },
  yearText: {
  },
  weekdayText: {
  },
});


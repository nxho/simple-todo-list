import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DateHeader from './DateHeader';
import ItemList from './ItemList';
import AddItemButton from './AddItemButton';

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
		}
	}

	handleChange = (text, index) => {
		this.state.items[index].text = text;
		this.setState({
			items: this.state.items
		});
	}

	handlePress = () => {
		this.setState({
			items: this.state.items.concat([
				{
					text: '',
					checked: false,
				}
			])
		});
	}

	handleCheckItem = (index) => {
		this.state.items[index].checked = !(this.state.items[index].checked);
		this.setState({
			items: this.state.items
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<DateHeader testID='date-header'/>
				<ItemList testID='item-list' items={this.state.items} onChange={this.handleChange} onCheckItem={this.handleCheckItem} />
				<AddItemButton testID='add-item-button' onPress={this.handlePress} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 800,
		padding: 50,
		justifyContent: 'space-between',
	},
});


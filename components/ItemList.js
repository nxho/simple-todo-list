import React from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import Checkbox from './Checkbox';

export default class ItemList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<ScrollView
				style={styles.container}
				contentContainerStyle={styles.contentContainer}
				pinchGestureEnabled={false}
				bounces={false}
				showsVerticalScrollIndicator={false}
			>
				{
					this.props.items.map((item, index) => {
						return(
							<View key={index} style={styles.itemContainer}>
								<TextInput
									testID={`item${index}-text-input`}
									style={[styles.textInput, item.checked ? styles.checkedText : null]}
									onChangeText={(text) => this.props.onChange(text, index)}
									value={item.text}
								/>
								<Checkbox
									style={styles.checkbox}
									onCheckItem={() => this.props.onCheckItem(index)}
									checked={item.checked}
								/>
							</View>
						);
					})
				}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	},
	contentContainer: {
		justifyContent: 'flex-start',
	},
	itemContainer: {
		height: 50,
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	textInput: {
		flex: 6,
		color: 'black',
	},
	checkedText: {
		color: '#EDEFF4',
	},
	checkbox: {
		flex: 1,
	},
});


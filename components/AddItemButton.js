import React from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

export default function AddItemButton(props) {
	return(
		<TouchableOpacity style={styles.container} onPress={props.onPress}>
			<Text style={styles.text}>+</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 65,
		width: 65,
		borderRadius: 100,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#50E3A4',
	},
	text: {
		textAlign: 'center',
		textAlignVertical: 'center',
		lineHeight: 35,
		fontSize: 35,
		color: '#46BD8A'
	},
});


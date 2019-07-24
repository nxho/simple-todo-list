import React from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

export default function Checkbox(props) {
	const button_check_style = props.checked ? styles.checked : styles.unchecked;
	return(
		<View style={[props.style, styles.container]}>
			<TouchableOpacity style={[styles.button_common, button_check_style]} onPress={props.onCheckItem}>
				{ props.checked ? <View style={styles.dot}></View> : null }
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
	},
	button_common: {
		marginLeft: 5,
		aspectRatio: 1.0,
		borderRadius: 100,
		borderWidth: 3.0,
	},
	unchecked: {
		borderColor: '#EDEFF4',
	},
	checked: {
		borderColor: '#71E8B5',
		justifyContent: 'center',
	},
	dot: {
		flex: 1,
		backgroundColor: '#71E8B5',
		margin: 7,
		alignSelf: 'center',
		borderRadius: 100,
		aspectRatio: 1.0,
	},
});


import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function LoadingComponent({ loading, textBelowLoadingCircle, logoInsideLoadingCircle }) {
	if (!loading) return null;

	return (
		<View style={styles.container}>
			<View style={styles.circle}>
				{logoInsideLoadingCircle || <ActivityIndicator size="large" color="#888" />}
			</View>
			{textBelowLoadingCircle && <Text style={styles.text}>{textBelowLoadingCircle}</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	circle: {
		borderWidth: 3,
		borderColor: '#aaa',
		borderRadius: 50,
		padding: 20,
		marginBottom: 10,
	},
	text: {
		fontSize: 16,
		color: '#333',
	},
});

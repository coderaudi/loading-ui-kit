// index.tsx
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Platform, Image } from 'react-native';

export interface LoadingProps {
	loading: boolean;
	textBelowLoadingCircle?: string;
	logoInsideLoadingCircle?: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = ({
	loading,
	textBelowLoadingCircle,
	logoInsideLoadingCircle,
}) => {
	if (!loading) return null;

	return (
		<View style={styles.container}>
			<View style={styles.loadingCircle}>
				{logoInsideLoadingCircle || <ActivityIndicator size="large" color="#0000ff" />}
			</View>
			{textBelowLoadingCircle && (
				<Text style={styles.loadingText}>{textBelowLoadingCircle}</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	loadingCircle: {
		width: 80,
		height: 80,
		borderRadius: 40,
		backgroundColor: '#eee',
		justifyContent: 'center',
		alignItems: 'center',
	},
	loadingText: {
		marginTop: 12,
		fontSize: 16,
		color: '#333',
	},
});

export default Loading;

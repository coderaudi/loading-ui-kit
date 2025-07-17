let LoadingComponent;

try {
	// If 'react-native' exists, prefer RN version
	require.resolve('react-native');
	LoadingComponent = require('./ReactNative/LoadingComponent').default;
} catch (e) {
	// Fallback to web version
	LoadingComponent = require('./React/LoadingComponent').default;
}

export default LoadingComponent;

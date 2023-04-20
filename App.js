import { View, StyleSheet } from 'react-native';
import AppScreen from './src/screens/AppScreen';

export default function App() {
	return (
		<View style={styles.container}>
			<AppScreen />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
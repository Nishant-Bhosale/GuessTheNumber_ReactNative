import { Text, StyleSheet, View } from "react-native";

const Title = ({ children }) => {
	return (
		<View style={styles.title}>
			<Text style={styles.text}>{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		borderWidth: 3,
		borderColor: "white",
		marginHorizontal: 24,
		marginTop: 60,
		paddingVertical: 16,
	},
	text: {
		color: "white",
		alignSelf: "center",
		fontSize: 24,
		fontFamily: "open-sans-bold",
	},
});

export default Title;

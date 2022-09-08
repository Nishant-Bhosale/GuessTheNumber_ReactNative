import { Text, View, StyleSheet } from "react-native";

const NumberContainer = ({ children }) => {
	return (
		<View style={styles.guessedNumber}>
			<Text style={styles.guessedNumberText}>{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	guessedNumber: {
		borderWidth: 3,
		borderColor: "#ddb52f",
		marginHorizontal: 50,
		borderRadius: 4,
		paddingVertical: 20,
		marginTop: 30,
	},
	guessedNumberText: { color: "#ddb52f", fontSize: 36, alignSelf: "center" },
});

export default NumberContainer;

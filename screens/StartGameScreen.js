import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				maxLength={2}
				autoCapitalize="none"
				autoCorrect={false}
				keyboardType="number-pad"
				textContentType="number"
				style={styles.numberInput}
			/>
			<PrimaryButton>Reset</PrimaryButton>
			<PrimaryButton>Confirm</PrimaryButton>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		padding: 16,
		marginTop: 100,
		marginHorizontal: 24,
		borderRadius: 8,
		backgroundColor: "#4e0329",
		elevation: 10,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 4 },
		shadowRadius: 6,
		shadowOpacity: 1,
	},
	numberInput: {
		height: 50,
		width: 60,
		fontSize: 32,
		borderBottomColor: "#ddb52f",
		borderBottomWidth: 2,
		marginLeft: "40%",
		color: "#ddb52f",
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
	},
});

export default StartGameScreen;

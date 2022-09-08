import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
	const [inputVal, setInputVal] = useState("");

	const handleChange = (enteredText) => {
		setInputVal(parseInt(enteredText));
	};

	const handleReset = () => {
		setInputVal("");
	};

	const handleConfirm = () => {
		const val = parseInt(inputVal);
		if (isNaN(val) || val <= 0 || val > 99) {
			Alert.alert(
				"Invalid Details!",
				"Number has to be a number between 1 and 99.",
				[{ text: "Okay", style: "destructive", onPress: handleReset }],
			);
			return;
		}
		console.log("confirm");
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput
				maxLength={2}
				autoCapitalize="none"
				autoCorrect={false}
				keyboardType="number-pad"
				textContentType="number"
				value={inputVal}
				style={styles.numberInput}
				onChangeText={handleChange}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPressHandler={handleReset}>Reset</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPressHandler={handleConfirm}>Confirm</PrimaryButton>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		marginTop: 100,
		marginHorizontal: 24,
		borderRadius: 8,
		backgroundColor: "#3b021f",
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
		color: "#ddb52f",
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
	},
	buttonsContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonContainer: {
		flex: 1,
	},
});

export default StartGameScreen;

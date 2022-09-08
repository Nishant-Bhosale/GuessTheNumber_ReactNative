import { useState, useEffect } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import ButtonWrapper from "../components/ui/ButtonWrapper";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

const StartGameScreen = ({ onPickNumber, changeGameState }) => {
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
		onPickNumber(inputVal);
	};

	return (
		<>
			<View style={styles.title}>
				<Text style={styles.text}>Guess The Number</Text>
			</View>
			<Card>
				<Text style={styles.text}>Enter a Number</Text>
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
				<ButtonWrapper>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPressHandler={handleReset}>Reset</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPressHandler={handleConfirm}>
							Confirm
						</PrimaryButton>
					</View>
				</ButtonWrapper>
			</Card>
		</>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		marginTop: 50,
		marginHorizontal: 24,
		borderRadius: 8,
		backgroundColor: "#3b021f",
		elevation: 10,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 4 },
		shadowRadius: 6,
		shadowOpacity: 1,
	},
	title: {
		borderWidth: 3,
		borderColor: "white",
		marginHorizontal: 54,
		marginTop: 120,
		paddingVertical: 16,
	},
	text: {
		color: "white",
		alignSelf: "center",
		fontSize: 24,
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
	buttonContainer: {
		flex: 1,
	},
});

export default StartGameScreen;

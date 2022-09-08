import { useState, useEffect } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

const generateRandomNumber = (min, max, exclude) => {
	const rndNumber = Math.floor(Math.random() * (max - min)) + min;

	if (rndNumber === exclude) {
		return generateRandomNumber(min, max, exclude);
	} else {
		return rndNumber;
	}
};

let minBoundary = 1,
	maxBoundary = 100;

const GameScreen = ({ enteredNum, changeGameState }) => {
	const initialGuess = generateRandomNumber(1, 100, enteredNum);

	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	useEffect(() => {
		if (enteredNum === currentGuess) {
			changeGameState();
		}
	}, [currentGuess, changeGameState, enteredNum]);

	function nextGuessHandler(direction) {
		if (
			(direction === "lower" && currentGuess < enteredNum) ||
			(direction === "greater" && currentGuess > enteredNum)
		) {
			Alert.alert("Don't lie!", "You know that this is wrong...", [
				{ text: "Sorry!", style: "cancel" },
			]);
			return;
		}

		if (direction === "lower") {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}

		const newRndNumber = generateRandomNumber(
			minBoundary,
			maxBoundary,
			currentGuess,
		);
		setCurrentGuess(newRndNumber);
	}
	return (
		<>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View style={styles.inputContainer}>
				<Text style={styles.highlow}>Higher or Lower?</Text>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton
							onPressHandler={nextGuessHandler.bind(this, "lower")}
						>
							-
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton
							onPressHandler={nextGuessHandler.bind(this, "greater")}
						>
							+
						</PrimaryButton>
					</View>
				</View>
			</View>
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
		marginHorizontal: 48,
		borderRadius: 8,
		backgroundColor: "#3b021f",
		elevation: 10,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 4 },
		shadowRadius: 6,
		shadowOpacity: 1,
	},
	highlow: {
		color: "#ddb52f",
		fontSize: 20,
	},
	guessedNumber: {
		borderWidth: 3,
		borderColor: "#ddb52f",
		marginHorizontal: 50,
		borderRadius: 4,
		paddingVertical: 20,
		marginTop: 30,
		// paddingHorizontal: 50,
	},
	guessedNumberText: { color: "#ddb52f", fontSize: 30, alignSelf: "center" },
	buttonsContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 10,
	},
	buttonContainer: {
		flex: 1,
	},
});

export default GameScreen;

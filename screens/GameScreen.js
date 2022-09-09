import { useState, useEffect } from "react";
import { View, StyleSheet, Text, Alert, FlatList } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import ButtonWrapper from "../components/ui/ButtonWrapper";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import GuessLogItem from "../components/ui/GuessLogItem";

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

const GameScreen = ({
	enteredNum,
	changeGameState,
	updateNumOfRounds,
	roundNumber,
}) => {
	const initialGuess = generateRandomNumber(1, 100, enteredNum);
	const [guessRounds, setGuessRounds] = useState([]);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	useEffect(() => {
		if (enteredNum === currentGuess) {
			changeGameState();
		}
	}, [currentGuess, changeGameState, enteredNum]);

	useEffect(() => {
		minBoundary = 1;
		maxBoundary = 100;
	}, []);

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
		updateNumOfRounds();
		setGuessRounds((prev) => [
			{ num: newRndNumber, roundNum: roundNumber + 1 },
			...prev,
		]);
	}
	return (
		<>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<Text style={styles.highlow}>Higher or Lower?</Text>
				<ButtonWrapper>
					<View style={styles.buttonContainer}>
						<PrimaryButton
							onPressHandler={nextGuessHandler.bind(this, "lower")}
						>
							<Ionicons name="md-remove" size={24} color="white" />
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton
							onPressHandler={nextGuessHandler.bind(this, "greater")}
						>
							<Ionicons name="md-add" size={24} color="white" />
						</PrimaryButton>
					</View>
				</ButtonWrapper>
			</Card>
			<View style={styles.listContainer}>
				<FlatList
					data={guessRounds}
					renderItem={(items) => (
						<GuessLogItem
							guess={items.item.num}
							roundNumber={items.item.roundNum}
						/>
					)}
					keyExtractor={(item) => item.num}
				/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	highlow: {
		color: "#ddb52f",
		fontSize: 20,
		fontFamily: "open-sans",
	},
	guessedNumber: {
		borderWidth: 3,
		borderColor: "#ddb52f",
		marginHorizontal: 50,
		borderRadius: 4,
		paddingVertical: 20,
		marginTop: 30,
	},
	guessedNumberText: {
		color: "#ddb52f",
		fontSize: 30,
		alignSelf: "center",
		fontFamily: "open-sans",
	},
	buttonContainer: {
		flex: 1,
	},
	listContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default GameScreen;

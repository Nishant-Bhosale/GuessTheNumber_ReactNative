import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import AppLoading from "expo-app-loading";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [isGameOver, setIsGameOver] = useState(true);
	const [numOfRounds, setNumOfRounds] = useState(0);

	const [fontsLoaded] = useFonts({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	const pickedNumberHandler = (number) => {
		setUserNumber(number);
		setIsGameOver(false);
	};

	const updateNumOfRounds = () => {
		setNumOfRounds((prev) => (prev += 1));
	};

	const startNewGame = () => {
		setUserNumber(0);
		changeGameState();
		setNumOfRounds(0);
	};

	const changeGameState = () => {
		setIsGameOver((prev) => !prev);
	};

	let screen = (
		<StartGameScreen
			onPickNumber={pickedNumberHandler}
			changeGameState={changeGameState}
		/>
	);

	if (userNumber) {
		screen = (
			<GameScreen
				enteredNum={userNumber}
				changeGameState={changeGameState}
				updateNumOfRounds={updateNumOfRounds}
				roundNumber={numOfRounds}
			/>
		);
	}

	if (isGameOver && userNumber) {
		screen = (
			<GameOverScreen
				changeGameState={changeGameState}
				startNewGame={startNewGame}
				userNumber={userNumber}
				roundsNumber={numOfRounds}
			/>
		);
	}

	return (
		<LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
			<ImageBackground
				source={require("./assets/images/background.png")}
				resizeMode="cover"
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.25,
	},
});

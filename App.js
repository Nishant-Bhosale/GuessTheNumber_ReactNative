import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useState } from "react";

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [isGameOver, setIsGameOver] = useState(true);

	const pickedNumberHandler = (number) => {
		setUserNumber(number);
		setIsGameOver(false);
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
			<GameScreen enteredNum={userNumber} changeGameState={changeGameState} />
		);
	}

	if (isGameOver && userNumber) {
		screen = <GameOverScreen changeGameState={changeGameState} />;
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

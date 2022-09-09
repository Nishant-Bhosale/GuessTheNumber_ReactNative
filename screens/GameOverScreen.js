import { Text, StyleSheet, View, Image } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
const GameOverScreen = ({ userNumber, roundsNumber, startNewGame }) => {
	return (
		<View>
			<View style={styles.title}>
				<Text style={styles.text}>GAME OVER!</Text>
			</View>
			<View style={styles.gameOverImageContainer}>
				<Image
					source={require("../assets/images/success.png")}
					style={styles.image}
				/>
			</View>
			<Text style={styles.summaryText}>
				Your phone needed <Text style={styles.hightlight}>{roundsNumber}</Text>{" "}
				rounds to guess the number{" "}
				<Text style={styles.hightlight}>{userNumber}</Text>.
			</Text>
			<PrimaryButton onPressHandler={startNewGame}>
				Start New Game
			</PrimaryButton>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		borderWidth: 3,
		borderColor: "white",
		marginHorizontal: 94,
		marginTop: 110,
		paddingVertical: 16,
	},
	text: {
		color: "white",
		alignSelf: "center",
		fontSize: 24,
		fontFamily: "open-sans-bold",
	},
	gameOverImageContainer: {
		marginTop: 30,
		alignSelf: "center",
		borderWidth: 4,
		height: 300,
		width: 300,
		overflow: "hidden",
		borderRadius: 300 / 2,
		marginBottom: 30,
	},
	image: {
		height: "100%",
		width: "100%",
	},
	summaryText: {
		fontFamily: "open-sans",
		fontSize: 24,
		textAlign: "center",
		marginHorizontal: 16,
	},
	hightlight: {
		color: "#3b021f",
		fontFamily: "open-sans-bold",
	},
});

export default GameOverScreen;

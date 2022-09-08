import { Text, StyleSheet, View, ImageBackground } from "react-native";
const GameOverScreen = () => {
	return (
		<>
			<View style={styles.title}>
				<Text style={styles.text}>GAME OVER!</Text>
			</View>
			<View style={styles.gameOverImageContainer}>
				<ImageBackground
					source={require("../assets/images/success.png")}
					resizeMode="cover"
				/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	title: {
		borderWidth: 3,
		borderColor: "white",
		marginHorizontal: 94,
		marginTop: 130,
		paddingVertical: 16,
	},
	text: {
		color: "white",
		alignSelf: "center",
		fontSize: 24,
	},
	gameOverImageContainer: {
		marginTop: 50,
		alignSelf: "center",
		borderWidth: 2,
		height: 300,
		width: 300,
		borderRadius: 300 / 2,
	},
});

export default GameOverScreen;

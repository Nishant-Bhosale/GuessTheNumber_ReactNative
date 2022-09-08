import { Text, StyleSheet, View, Image } from "react-native";
const GameOverScreen = () => {
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
			<Text>Your phone needed X rounds to guess the number Y.</Text>
		</View>
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
		fontFamily: "open-sans-bold",
	},
	gameOverImageContainer: {
		marginTop: 50,
		alignSelf: "center",
		borderWidth: 4,
		height: 300,
		width: 300,
		overflow: "hidden",
		borderRadius: 300 / 2,
	},
	image: {
		height: "100%",
		width: "100%",
	},
});

export default GameOverScreen;

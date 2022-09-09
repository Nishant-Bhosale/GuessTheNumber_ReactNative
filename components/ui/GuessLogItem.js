import { View, Text, StyleSheet } from "react-native";

const GuessLogItem = ({ roundNumber, guess }) => {
	return (
		<View style={styles.listItem}>
			<Text style={styles.itemText}>#{roundNumber}</Text>
			<Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	listItem: {
		flex: 1,
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 30,
		padding: 12,
		marginVertical: 8,
		width: 270,
		backgroundColor: "#ddb52f",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		elevation: 4,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.25,
		shadowRadius: 3,
	},
	itemText: {
		fontFamily: "open-sans",
	},
});

export default GuessLogItem;

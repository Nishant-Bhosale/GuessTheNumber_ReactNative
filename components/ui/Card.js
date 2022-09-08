import { View, StyleSheet } from "react-native";

const Card = ({ children }) => {
	return <View style={styles.inputContainer}>{children}</View>;
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
});
export default Card;

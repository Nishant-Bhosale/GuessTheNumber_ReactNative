import { View, StyleSheet } from "react-native";

const ButtonWrapper = ({ children }) => {
	return <View style={styles.buttonsContainer}>{children}</View>;
};

const styles = StyleSheet.create({
	buttonsContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 10,
	},
});
export default ButtonWrapper;

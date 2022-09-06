import { View, Text, Pressable } from "react-native";

const PrimaryButton = ({ children }) => {
	return (
		<Pressable>
			<View>
				<Text>{children}</Text>
			</View>
		</Pressable>
	);
};

export default PrimaryButton;

import { TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
	return (
		<View>
			<TextInput />
			<PrimaryButton>Reset</PrimaryButton>
			<PrimaryButton>Confirm</PrimaryButton>
		</View>
	);
};

export default StartGameScreen;

import {
	ImageBackground,
	StyleSheet,
	Text,
	View,
	ViewProps,
} from "react-native";
import React from "react";
import { Colors, Typography } from "../constants";
import { dollar1 } from "../assets/icons";
import { TextStroke } from "./ui/TextStroke";

const TotalBalance: React.FC<ViewProps> = (props) => {
	return (
		<View style={styles.container} {...props}>
			<TextStroke stroke={1} color="black">
				<Text style={styles.text}>Total Balance</Text>
			</TextStroke>
			<ImageBackground source={dollar1} style={styles.dollar} />
			<TextStroke stroke={1} color="black">
				<Text style={styles.text}>$23,560</Text>
			</TextStroke>
		</View>
	);
};

export default TotalBalance;

const styles = StyleSheet.create({
	container: {
		borderTopWidth: 2,
		borderLeftWidth: 2,
		borderRightWidth: 2,
		borderBottomWidth: 2,
		borderColor: Colors.darkest,
		backgroundColor: Colors.primary["500"],
		borderRadius: 60,
		height: 60,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		paddingRight: 10,
	},
	dollar: {
		width: 40,
		height: 40,
	},
	text: {
		color: Colors.offwhite,
		fontFamily: Typography.fonts.bold,
	},
});

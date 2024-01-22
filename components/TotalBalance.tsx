import {
	ImageBackground,
	StyleSheet,
	Text,
	View,
	ViewProps,
} from "react-native";
import React from "react";
import { Colors, Typography } from "../constants";
import { Dollar } from "../assets/icons";
import { TextStroke } from "./ui/TextStroke";

import Yen from "@/assets/icons/svg/yen.svg";
const TotalBalance: React.FC<ViewProps> = (props) => {
	return (
		<View style={styles.container} {...props}>
			<TextStroke stroke={1} color="black">
				<Text style={styles.text}>Total Balance</Text>
			</TextStroke>
			<View
				style={{
					borderWidth: 2,
					borderColor: "black",
					borderRadius: 40,
					padding: 5,
				}}>
				<Dollar width={30} height={30} fill={"#000"} />
			</View>
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
		borderColor: Colors.black,
		backgroundColor: Colors.green.primary,
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
		color: Colors.white,
		fontFamily: Typography.fonts.bold,
	},
});

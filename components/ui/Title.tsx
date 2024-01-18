import * as React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { Colors, Typography } from "../../constants";

import { TextStroke } from "./TextStroke";
import PopShadow from "./PopShadow";

const Title = ({
	title,
	style,
	...rest
}: {
	title: string;
	style?: StyleProp<ViewStyle>;
}) => {
	return (
		<PopShadow style={[style, { marginLeft: 10 }]} {...rest}>
			<TextStroke stroke={1} color="black">
				<Text style={styles.text}>{title}</Text>
			</TextStroke>
		</PopShadow>
	);
};

export default Title;

const styles = StyleSheet.create({
	text: {
		fontSize: Typography.sizes.md,
		fontFamily: Typography.fonts.regular,
		color: Colors.offwhite,
		padding: 5,
	},
});

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
		<PopShadow
			{...rest}
			style={[style, { marginLeft: 10, borderRadius: 20 }]}
			shadowProps={{
				style: {
					backgroundColor: Colors.white,
					borderTopWidth: 2,
					borderLeftWidth: 2,
					borderRightWidth: 2,
					borderBottomWidth: 2,
					borderRadius: 8,
				},
			}}>
			<TextStroke stroke={2} color={Colors.black}>
				<Text style={styles.text}>{title}</Text>
			</TextStroke>
		</PopShadow>
	);
};

export default Title;

const styles = StyleSheet.create({
	text: {
		fontSize: Typography.sizes.md,
		fontFamily: Typography.fonts.bold,
		color: Colors.white,
		paddingHorizontal: 8,
		paddingBottom: 4,

		backgroundColor: Colors.orange.primary,
		borderRadius: 6,
	},
});

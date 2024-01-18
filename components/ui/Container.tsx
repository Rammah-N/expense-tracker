import { SafeAreaView, StyleSheet, View, ViewProps } from "react-native";
import React from "react";
import { Colors } from "../../constants";
import { SafeAreaViewProps } from "react-native-safe-area-context";

const Container: React.FC<SafeAreaViewProps> = ({
	children,
	style,
	...rest
}) => (
	<SafeAreaView style={[styles.container, style]} {...rest}>
		{children}
	</SafeAreaView>
);

export default Container;

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.offwhite,
		height: "100%",
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,
		flex: 1,
	},
});

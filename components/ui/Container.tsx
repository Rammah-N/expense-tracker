import { SafeAreaView, StyleSheet, View, ViewProps } from "react-native";
import React from "react";
import { Colors } from "../../constants";
import { SafeAreaViewProps } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

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
		backgroundColor: Colors.white,
		height: "100%",
		paddingHorizontal: 10,
		paddingVertical: 10,
		flex: 1,
	},
});

import { SafeAreaView, StyleSheet, View, ViewProps } from "react-native";
import React from "react";
import { Colors } from "../../constants";

const Container: React.FC<ViewProps> = ({ children, ...rest }) => (
	<SafeAreaView style={styles.container} {...rest}>
		{children}
	</SafeAreaView>
);

export default Container;

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.offwhite,
		height: "100%",
		padding: 10,
		flex: 1,
	},
});

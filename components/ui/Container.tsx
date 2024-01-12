import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants";

const Container = ({ children }: { children: React.ReactNode }) => {
	return <View style={styles.container}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.offwhite,
		height: "100%",
		padding: 10,
	},
});

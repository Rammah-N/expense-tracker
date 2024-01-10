import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Homepage = () => {
	return (
		<View>
			<Text>Hello</Text>
			<Link href="/settings">Settings</Link>
		</View>
	);
};

export default Homepage;

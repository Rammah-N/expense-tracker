import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Budgets = () => {
	return (
		<View>
			<Text>Budgets</Text>
			<Link href="/budgets/1">Go 1</Link>
		</View>
	);
};

export default Budgets;

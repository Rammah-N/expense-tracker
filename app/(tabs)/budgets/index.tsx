import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Container from "@/components/ui/Container";

const Budgets = () => {
	return (
		<Container>
			<Text>Budgets</Text>
			<Link href="/budgets/1">Go 1</Link>
		</Container>
	);
};

export default Budgets;
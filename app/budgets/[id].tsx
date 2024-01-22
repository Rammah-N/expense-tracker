import { StyleSheet, Text } from "react-native";
import React from "react";
import { Stack, useGlobalSearchParams } from "expo-router";
import Container from "@ui/Container";
import { Colors, Typography } from "@constants";

export default function BudgetId() {
	const { id } = useGlobalSearchParams();
	return (
		<Container style={{}}>
			<Stack.Screen
				options={{
					title: "Budgets",
					headerTitleStyle: {
						fontFamily: Typography.fonts.bold,
					},
					headerStyle: { backgroundColor: Colors.white },
				}}
			/>
			<Text>{id}</Text>
		</Container>
	);
}

const styles = StyleSheet.create({});

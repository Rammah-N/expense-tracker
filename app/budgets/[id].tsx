import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useGlobalSearchParams } from "expo-router";
import Container from "@/components/ui/Container";
import RootLayout from "../(tabs)/_layout";
import { Colors, Typography } from "@/constants";

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
					headerStyle: { backgroundColor: Colors.offwhite },
				}}
			/>
			<Text>{id}</Text>
			<RootLayout />
		</Container>
	);
}

const styles = StyleSheet.create({});

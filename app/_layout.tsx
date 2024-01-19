import { Stack } from "expo-router";
import { Colors, Typography } from "../constants";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();
export default function Layout() {
	const [loadedFonts] = useFonts({ ...Typography.sources });

	const onLayoutRootView = useCallback(async () => {
		if (loadedFonts) {
			await SplashScreen.hideAsync();
		}
	}, [loadedFonts]);

	if (!loadedFonts) {
		return null;
	}
	return (
		<SafeAreaView
			onLayout={onLayoutRootView}
			style={{ flex: 1, backgroundColor: Colors.blue["900"] }}>
			<Stack
				screenOptions={{
					// headerShown: false,
					contentStyle: {
						backgroundColor: Colors.blue["900"],
					},
				}}>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="budgets/[id]" />
			</Stack>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

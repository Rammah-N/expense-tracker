import { Stack } from "expo-router";
import { Colors, Typography } from "../constants";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { Link } from "expo-router";

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
		<Stack
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: Colors.offwhite,
				},
			}}>
			<Stack.Screen name="(tabs)" />
		</Stack>
	);
}

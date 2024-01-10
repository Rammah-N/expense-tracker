import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Typography, Colors } from "./constants";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import PopShadow from "./components/ui/PopShadow";

SplashScreen.preventAutoHideAsync();

export default function App() {
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
		<View style={[styles.container, styles.body]} onLayout={onLayoutRootView}>
			<PopShadow>
				<View
					style={{
						backgroundColor: Colors.offwhite,
						borderColor: "#000000",
						borderWidth: 1,
					}}>
					<Text>Hello World!!</Text>
				</View>
			</PopShadow>
			<StatusBar style="light" />
		</View>
	);
}

const styles = StyleSheet.create({
	body: {
		backgroundColor: Colors.offwhite,
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

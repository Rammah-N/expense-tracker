import { Link } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Avatar from "../../components/ui/Avatar";
import person from "../../assets/person.png";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { Colors, Typography } from "@/constants";
import Title from "@/components/ui/Title";
import Container from "@/components/ui/Container";
import TotalBalance from "@/components/TotalBalance";

const Homepage = () => {
	return (
		<Container>
			<ScrollView>
				{/* <View style={styles.profile}>
				<Avatar source={person} />
				<Text style={styles.profileText}>Hello, Rammah</Text>
			</View> */}
				<TotalBalance />
				<Title title="Accounts" style={{ marginVertical: 20 }} />
				<Link href="/settings">Settings</Link>
			</ScrollView>
		</Container>
	);
};

export default Homepage;

const styles = StyleSheet.create({
	profile: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
		justifyContent: "flex-start",
	},
	profileText: {
		fontFamily: Typography.fonts.medium,
		fontSize: Typography.sizes.rg,
	},
});

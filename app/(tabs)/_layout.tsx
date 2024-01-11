import React from "react";
import { Tabs } from "expo-router";
import { Image, StyleSheet } from "react-native";
import {
	coin2,
	dashboard,
	home,
	setting,
} from "../../assets/icons";

const RootLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon(props) {
						return <Image source={home} width={20} style={styles.icon} />;
					},
				}}
			/>
			<Tabs.Screen
				name="stats/index"
				options={{
					title: "Stats",
					tabBarIcon(props) {
						return <Image source={dashboard} style={styles.icon} />;
					},
				}}
			/>
			<Tabs.Screen
				name="budgets/index"
				options={{
					title: "Budgets",
					tabBarIcon(props) {
						return <Image source={coin2} style={styles.icon} />;
					},
				}}
			/>
			<Tabs.Screen
				name="settings/index"
				options={{
					title: "Settings",
					tabBarIcon(props) {
						return <Image source={setting} style={styles.icon} />;
					},
				}}
			/>
		</Tabs>
	);
};

export default RootLayout;

const styles = StyleSheet.create({ icon: { width: 20, height: 20 } });

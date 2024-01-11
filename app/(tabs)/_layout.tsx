import React from "react";
import { Tabs } from "expo-router";
import { Image, StyleSheet, Text } from "react-native";
import { coin2, dashboard, home, setting } from "../../assets/icons";
import { Colors } from "../../constants";

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
					tabBarStyle: {
						backgroundColor: Colors.secondary["500"],
						borderTopRightRadius: 100,
						borderTopLeftRadius: 100,
						paddingBottom: 5,
						justifyContent: "center",
					},
					tabBarLabel(props) {
						if (props.focused) {
							return <Text style={styles.labelFocused}>{props.children}</Text>;
						}
						return <Text style={styles.label}>{props.children}</Text>;
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
					tabBarStyle: {
						backgroundColor: Colors.secondary["500"],
						borderTopRightRadius: 100,
						borderTopLeftRadius: 100,
						paddingBottom: 5,
						justifyContent: "center",
					},
					tabBarLabel(props) {
						if (props.focused) {
							return <Text style={styles.labelFocused}>{props.children}</Text>;
						}
						return <Text style={styles.label}>{props.children}</Text>;
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
					tabBarStyle: {
						backgroundColor: Colors.secondary["500"],
						borderTopRightRadius: 100,
						borderTopLeftRadius: 100,
						paddingBottom: 5,
						justifyContent: "center",
					},
					tabBarLabel(props) {
						if (props.focused) {
							return <Text style={styles.labelFocused}>{props.children}</Text>;
						}
						return <Text style={styles.label}>{props.children}</Text>;
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
					tabBarStyle: {
						backgroundColor: Colors.secondary["500"],
						borderTopRightRadius: 100,
						borderTopLeftRadius: 100,
						paddingBottom: 5,
						justifyContent: "center",
					},
					tabBarLabel(props) {
						if (props.focused) {
							return <Text style={styles.labelFocused}>{props.children}</Text>;
						}
						return <Text style={styles.label}>{props.children}</Text>;
					},
				}}
			/>
		</Tabs>
	);
};

export default RootLayout;

const styles = StyleSheet.create({
	icon: { width: 20, height: 20 },
	label: { fontFamily: "Inter-Regular", color: Colors.offwhite },
	labelFocused: { fontFamily: "Inter-Bold", color: Colors.offwhite },
});

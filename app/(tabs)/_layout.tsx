import React from "react";
import { Tabs } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import {
	Chart,
	Discount,
	HomeTab,
	Settings,
	ChartFilled,
	DiscountFilled,
	HomeFilled,
	SettingsFilled,
} from "@icons";
import { Colors, Typography } from "../../constants";

const RootLayout = () => {
	const tabBarLabel = (props: {
		focused: boolean;
		color: string;
		position: any;
		children: string;
	}) => {
		return <Text style={styles.label}>{props.children}</Text>;
	};

	const tabOptions: any = {
		headerStyle: {
			backgroundColor: Colors.blue.variants["900"],
			borderBottomColor: Colors.black,
			borderBottomWidth: 1,
		},
		headerTitleStyle: {
			fontFamily: Typography.fonts.bold,
			textAlign: "left",
		},
		tabBarStyle: styles.tabBar,
		tabBarLabel: tabBarLabel,
		headerTitleAlign: "left",
	};

	const iconStyle = {
		width: 20,
		height: 20,
	};

	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					...tabOptions,
					headerShown: false,
					tabBarIcon(props) {
						if (props.focused) return <HomeFilled {...iconStyle} />;
						return <HomeTab {...iconStyle} />;
					},
				}}
			/>
			<Tabs.Screen
				name="stats/index"
				options={{
					...tabOptions,
					title: "Stats",
					tabBarIcon(props) {
						if (props.focused) return <ChartFilled {...iconStyle} />;
						return <Chart {...iconStyle} />;
					},
				}}
			/>
			<Tabs.Screen
				name="budgets/index"
				options={{
					title: "Budgets",
					...tabOptions,
					headerTitleStyle: {
						fontFamily: Typography.fonts.bold,
						textAlign: "left",
					},
					tabBarIcon(props) {
						if (props.focused) return <DiscountFilled {...iconStyle} />;
						return <Discount {...iconStyle} />;
					},
				}}
			/>
			<Tabs.Screen
				name="settings/index"
				options={{
					title: "Settings",
					...tabOptions,
					tabBarIcon(props) {
						if (props.focused) return <SettingsFilled {...iconStyle} />;
						return <Settings {...iconStyle} />;
					},
				}}
			/>
		</Tabs>
	);
};

export default RootLayout;

const styles = StyleSheet.create({
	icon: { width: 20, height: 20, resizeMode: "contain" },
	label: {
		fontFamily: Typography.fonts.regular,
		color: Colors.white,
		fontSize: Typography.sizes.xxs,
	},
	tabBar: {
		backgroundColor: Colors.blue.primary,
		paddingTop: 5,
		justifyContent: "center",
		borderTopColor: Colors.black,
	},
});

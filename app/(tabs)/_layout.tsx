import React from "react";
import { Tabs } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import {
	chartWhite,
	discountWhite,
	homeWhite,
	settingsWhite,
	chartWhiteFilled,
	discountWhiteFilled,
	homeWhiteFilled,
	settingsWhiteFilled,
} from "../../assets/icons";
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
			backgroundColor: Colors.offwhite,
			borderBottomColor: Colors.darkest,
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

	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					...tabOptions,
					tabBarIcon(props) {
						if (props.focused)
							return (
								<ImageBackground source={homeWhiteFilled} style={styles.icon} />
							);
						return <Image source={homeWhite} style={styles.icon} />;
					},
				}}
			/>
			<Tabs.Screen
				name="stats/index"
				options={{
					...tabOptions,
					title: "Stats",
					tabBarIcon(props) {
						if (props.focused)
							return (
								<Image
									source={chartWhiteFilled}
									width={20}
									style={styles.icon}
								/>
							);
						return <Image source={chartWhite} style={styles.icon} />;
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
						if (props.focused)
							return (
								<Image
									source={discountWhiteFilled}
									width={20}
									style={styles.icon}
								/>
							);
						return <Image source={discountWhite} style={styles.icon} />;
					},
				}}
			/>
			<Tabs.Screen
				name="settings/index"
				options={{
					title: "Settings",
					...tabOptions,
					tabBarIcon(props) {
						if (props.focused)
							return (
								<Image
									source={settingsWhiteFilled}
									width={20}
									style={styles.icon}
								/>
							);
						return <Image source={settingsWhite} style={styles.icon} />;
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
		fontFamily: "Inter-Regular",
		color: Colors.offwhite,
		fontSize: Typography.sizes.xxs,
	},
	tabBar: {
		backgroundColor: Colors.secondary["500"],
		paddingTop: 5,
		justifyContent: "center",
	},
});

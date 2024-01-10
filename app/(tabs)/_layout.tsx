import React from "react";
import { Tabs } from "expo-router";

const RootLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen name="index" options={{ title: "Home" }} />
			<Tabs.Screen name="stats/index" options={{ title: "Stats" }} />
			<Tabs.Screen name="budgets/index" options={{ title: "Budgets" }} />
			<Tabs.Screen name="settings/index" options={{ title: "Settings" }} />
		</Tabs>
	);
};

export default RootLayout;

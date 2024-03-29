import { FlatList, StyleSheet, Text, View, ViewProps } from "react-native";
import React from "react";
import AccountCard from "./AccountCard";
import { Account } from "@types";
import Title from "@ui/Title";
import { Spacing } from "@constants";

const Accounts: React.FC<ViewProps> = (props) => {
	const accounts: Array<Account> = [
		{
			name: "Acme Bank",
			balance: 96400,
			currency: "USD",
			type: "cash",
			id: "1",
		},
		{
			name: "Acme Bank",
			balance: 32340,
			currency: "AED",
			type: "debit",
			id: "1",
		},
		{
			name: "Acme Bank",
			balance: 1000,
			currency: "EUR",
			type: "credit",
			id: "1",
		},
	];

	return (
		<View {...props}>
			<View
				style={{
					justifyContent: "space-between",
					alignItems: "center",
					flexDirection: "row",
					marginTop: 20,
					marginBottom: 20,
				}}>
				<Title title="Accounts" />
				<Text>Add</Text>
			</View>
			<FlatList
				data={accounts}
				renderItem={({ item }) => <AccountCard account={item} />}
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					columnGap: Spacing[3],
				}}
			/>
		</View>
	);
};

export default Accounts;

const styles = StyleSheet.create({});

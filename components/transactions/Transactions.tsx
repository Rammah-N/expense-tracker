import { StyleSheet, Text, View } from "react-native";
import React from "react";

import TransactionRecord from "./TransactionRecord";
import { Transaction } from "@types";
import { Colors } from "@constants";
import Title from "../ui/Title";
const Transactions = (props) => {
	const data: Array<Transaction> = [];

	for (let i = 0; i < 10; i++) {
		const item: Transaction = {
			id: `id-${i}`,
			amount: Math.floor(Math.random() * 1000),
			type: ["income", "expense", "transfer"][
				Math.floor(Math.random() * 3)
			] as any,
			category: {
				id: `id-${i}`,
				name: "Food",
			},
			account: {
				id: `id-${i}`,
				name: "Checking Account",
			},
			date: new Date(),
			description: "This is a description",
		};
		data.push(item);
	}

	return (
		<View>
			{/* <Title title="Transactions" /> */}
			<View style={[styles.table, props.style]} {...props}>
				{data.map((item) => (
					<TransactionRecord key={item.id} transaction={item} />
				))}
				T
			</View>
		</View>
	);
};

export default Transactions;

const styles = StyleSheet.create({
	table: {
		borderWidth: 2,
		borderColor: Colors.black,
		borderRadius: 10,
		padding: 20,
		gap: 20,
		marginVertical: 20,
	},
});

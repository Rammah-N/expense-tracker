import { StyleSheet, Text, View, ViewProps } from "react-native";
import React from "react";
import { Transaction } from "../../util/types";
import { Colors, Typography } from "@constants";
import { Shop } from "@/assets/icons";
import { formatPrice } from "@/util/helpers";

interface Props extends ViewProps {
	transaction: Transaction;
}

const borderColors = {
	income: Colors.green.primary,
	expense: Colors.red.primary,
	transfer: Colors.blue.variants["100"],
};

const Amount = ({ amount, type }: { amount: number; type: string }) => {
	return (
		<Text
			style={{
				color: borderColors[type],
				fontFamily: Typography.fonts.bold,
				textAlign: "right",
			}}>
			{formatPrice(amount, "USD")}
		</Text>
	);
};

const TransactionRecord: React.FC<Props> = ({
	transaction,
	style,
	...rest
}) => {
	return (
		<View
			{...rest}
			style={[
				styles.transaction,
				style,
				{ borderColor: borderColors[transaction.type] },
			]}>
			<View style={styles.categories}>
				<Shop width={30} height={30} fill="#fff" />
				<View style={{ justifyContent: "center", marginLeft: 10 }}>
					<Text style={styles.cateoryName}>{transaction.category.name}</Text>
					<Text style={styles.account}>{transaction.account.name}</Text>
				</View>
			</View>
			<View style={styles.amountContainer}>
				<Amount amount={transaction.amount} type={transaction.type} />
				<Text style={styles.date}>
					{new Date(transaction.date).toDateString()}
				</Text>
			</View>
		</View>
	);
};

export default TransactionRecord;

const styles = StyleSheet.create({
	transaction: {
		borderWidth: 2,
		borderRadius: 10,
		padding: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		flex: 1,
	},
	categories: {
		flexDirection: "row",
		alignItems: "center",
	},
	account: {
		fontSize: Typography.sizes.xs,
		fontFamily: Typography.fonts.regular,
		color: Colors.white,
	},
	cateoryName: {
		fontSize: Typography.sizes.sm,
		fontFamily: Typography.fonts.bold,
		color: Colors.white,
	},
	amountContainer: {
		gap: 5,
	},
	date: {
		fontSize: Typography.sizes.xxs,
		fontFamily: Typography.fonts.regular,
		color: Colors.gray,
	},
});

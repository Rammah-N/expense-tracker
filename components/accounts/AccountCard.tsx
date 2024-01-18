import {
	Image,
	ListRenderItemInfo,
	StyleSheet,
	Text,
	View,
	ViewProps,
} from "react-native";
import React from "react";
import PopShadow from "@ui/PopShadow";
import { Colors, Typography } from "@/constants";
import { walletWhite, cashWhite, cash } from "@/assets/icons";
import { formatPrice } from "@/util/helpers";
import { TextStroke } from "../ui/TextStroke";

export interface Account {
	balance: number;
	currency: string;
	name: string;
	type: "cash" | "debit" | "credit";
}

interface AccountCardProps extends ViewProps {
	account: Account;
}

const AccountCard: React.FC<AccountCardProps> = ({
	account,
	style,
	...rest
}) => {
	return (
		<PopShadow
			style={{
				marginLeft: 10,
				height: 270,
			}}
			shadowProps={{ offset: [-10, 10], style: { borderRadius: 12 } }}>
			<View {...rest} style={[styles[account.type], styles.card, style]}>
				<View style={styles.infoContainer}>
					<Text
						style={[
							styles.name,
							{
								color: ["cash", "debit"].includes(account.type)
									? Colors.offwhite
									: Colors.darkest,
							},
						]}>
						{account.name.toUpperCase()}
					</Text>
					<Image
						source={
							["credit", "debit"].includes(account.type)
								? walletWhite
								: cashWhite
						}
						style={{ width: 50, height: 27, resizeMode: "contain" }}
						width={50}
					/>
				</View>
				<View>
					<Text
						style={{
							fontSize: Typography.sizes.xs,
							color: ["cash", "debit"].includes(account.type)
								? Colors.offwhite
								: Colors.darkest,
						}}>
						Available Balance
					</Text>
					<TextStroke color="#000" stroke={2}>
						<Text style={styles.balance} numberOfLines={1}>
							{formatPrice(account.balance, account.currency)}
						</Text>
					</TextStroke>
				</View>
			</View>
		</PopShadow>
	);
};

export default AccountCard;

const styles = StyleSheet.create({
	cash: {
		backgroundColor: Colors.primary["700"],
		color: "#fff",
	},

	debit: {
		backgroundColor: Colors.secondary["950"],
		color: "#fff",
	},

	credit: {
		backgroundColor: Colors.primary["300"],
	},

	card: {
		width: 250,
		height: 150,
		padding: 20,
		borderRadius: 10,
		justifyContent: "space-between",
	},

	infoContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	balance: {
		fontSize: Typography.sizes.lg,
		color: Colors.offwhite,
		fontFamily: Typography.fonts.bold,
	},
	name: {
		fontSize: Typography.sizes.rg,
		fontFamily: Typography.fonts.regular,
	},
});

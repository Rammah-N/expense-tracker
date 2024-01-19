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
import { Wallet, Cash } from "@/assets/icons";
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
	const icons = {
		cash: <Cash width={50} height={27} fill="#fff" />,
		debit: <Wallet width={50} height={27} fill="#fff" />,
		credit: <Wallet width={50} height={27} fill="#000" />,
	};
	const textColor = ["cash", "debit"].includes(account.type)
		? Colors.white
		: Colors.black;
	return (
		<PopShadow
			style={{
				marginLeft: 10,
				height: 270,
			}}
			shadowProps={{ offset: [-10, 10], style: { borderRadius: 12 } }}>
			<View {...rest} style={[styles[account.type], styles.card, style]}>
				<View style={styles.infoContainer}>
					<View>
						<Text
							style={[
								styles.name,
								{
									color: textColor,
								},
							]}>
							{account.name.toUpperCase()}
						</Text>
						<Text style={{ color: textColor }}>
							{account.type.toLowerCase()}
						</Text>
					</View>
					{icons[account.type]}
				</View>
				<View>
					<Text
						style={{
							fontSize: Typography.sizes.xs,
							color: textColor,
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
		backgroundColor: Colors.green["700"],
		color: "#fff",
	},

	debit: {
		backgroundColor: Colors.sienna["950"],
		color: "#fff",
	},

	credit: {
		backgroundColor: Colors.green["300"],
	},

	card: {
		width: 250,
		height: 150,
		paddingHorizontal: 20,
		paddingVertical: 10,
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
		color: Colors.white,
		fontFamily: Typography.fonts.bold,
	},
	name: {
		fontSize: Typography.sizes.rg,
		fontFamily: Typography.fonts.bold,
	},
});

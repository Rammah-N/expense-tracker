import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Avatar from "../../components/ui/Avatar";
import person from "../../assets/person.png";
import { Colors, Spacing, Typography } from "@constants";
import Container from "@/components/ui/Container";
import TotalBalance from "@/components/TotalBalance";
import Accounts from "@/components/accounts/Accounts";
import Transactions from "@/components/transactions/Transactions";

const Homepage = () => {
	return (
		<Container style={{ paddingTop: 50 }}>
			<ScrollView>
				<View style={styles.profile}>
					<Avatar source={person} />
					<Text style={styles.profileText} numberOfLines={1}>
						Hello, Rammah
					</Text>
				</View>

				<TotalBalance />
				<Accounts style={{ marginVertical: Spacing[3] }} />
				<Transactions />
			</ScrollView>
		</Container>
	);
};

export default Homepage;

const styles = StyleSheet.create({
	profile: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		justifyContent: "flex-start",
		paddingBottom: Spacing[1],
		marginBottom: 20,
		borderBottomWidth: 1,
		borderBottomColor: Colors.black,
	},
	profileText: {
		fontFamily: Typography.fonts.bold,
		fontSize: Typography.sizes.rg,
	},
});

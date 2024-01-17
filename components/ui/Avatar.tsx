import { ImageBackground, ImageSourcePropType, StyleSheet } from "react-native";
import React from "react";

const Avatar = ({ source }: { source: ImageSourcePropType }) => {
	return (
		<ImageBackground
			source={source}
			style={styles.image}
			borderRadius={40}></ImageBackground>
	);
};

export default Avatar;

const styles = StyleSheet.create({
	image: {
		width: 40,
		height: 40,
		resizeMode: "cover",
	},
});

import React from "react";
import { Shadow } from "react-native-shadow-2";
import { Colors } from "../../constants";
import {
	StyleProp,
	StyleSheet,
	View,
	ViewProps,
	ViewStyle,
} from "react-native";

const PopShadow: React.FC<ViewProps> = ({
	children,
	style,
	...rest
}: {
	children: React.ReactNode;
	style?: StyleProp<ViewStyle>;
}) => {
	return (
		<View style={[{ paddingLeft: 5 }, style]} {...rest}>
			<Shadow
				distance={0}
				offset={[-5, 5]}
				startColor="#000000"
				style={{
					backgroundColor: Colors.offwhite,
					borderTopWidth: 1,
					borderLeftWidth: 1,
					borderRightWidth: 1,
					borderBottomWidth: 1,
					paddingHorizontal: 5,
					paddingVertical: 5,
				}}>
				{children}
			</Shadow>
		</View>
	);
};

export default PopShadow;

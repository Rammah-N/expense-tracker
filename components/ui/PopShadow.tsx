import React from "react";
import { Shadow, ShadowProps } from "react-native-shadow-2";
import { Colors } from "../../constants";
import { View, ViewProps } from "react-native";

interface Props extends ViewProps {
	shadowProps?: ShadowProps;
}

const PopShadow: React.FC<Props> = ({
	children,
	style,
	shadowProps,
	...rest
}) => {
	return (
		<View {...rest} style={style}>
			<Shadow
				distance={0}
				offset={[-5, 5]}
				startColor="#000000"
				style={{
					backgroundColor: Colors.white,
					borderTopWidth: 2,
					borderLeftWidth: 2,
					borderRightWidth: 2,
					borderBottomWidth: 2,
					borderRadius: 5,
				}}
				{...shadowProps}>
				{children}
			</Shadow>
		</View>
	);
};

export default PopShadow;

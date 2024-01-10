import React from "react";
import { Shadow } from "react-native-shadow-2";
import { Colors } from "../../constants";

export default function PopShadow({
	children,
	...rest
}: {
	children: React.ReactNode;
}) {
	return (
		<Shadow
			distance={0}
			offset={[-5, 5]}
			startColor="#000000"
			style={{ backgroundColor: Colors.offwhite }}
			{...rest}>
			{children}
		</Shadow>
	);
}

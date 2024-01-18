export const formatPrice = (
	num: number,
	currency: Intl.NumberFormatOptions["currency"]
): string => {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
	});

	return formatter.format(num);
};

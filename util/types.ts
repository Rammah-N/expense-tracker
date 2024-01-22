export interface Account {
	balance: number;
	currency: string;
	name: string;
	id: string;
	type: "cash" | "debit" | "credit";
}

interface BaseTransaction {
	id: string;
	amount: number;
	account: {
		id: string;
		name: string;
	};
	category: {
		id: string;
		name: string;
	};
	date: Date;
	description: string;
}

interface ExpenseTransaction extends BaseTransaction {
	type: "expense";
}

interface IncomeTransaction extends BaseTransaction {
	type: "income";
}

interface TransferTransaction extends BaseTransaction {
	type: "transfer";
	from: string;
	to: string;
}

export type Transaction =
	| ExpenseTransaction
	| IncomeTransaction
	| TransferTransaction;

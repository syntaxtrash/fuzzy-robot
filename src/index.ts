// let sales: number = 123_456_789;
// let coutse: string = "Typescript";
// let is_published: boolean = true;
// let level;

// let numbers: number[] = [1, 2, 3];

// let user: [number, string] = [1, "Juan"];

// const enum Size {
// 	Small = 1,
// 	Medium,
// 	Large,
// }

// let mySize: Size = Size.Medium;

// console.log(mySize);

// function calcTax(income: number, taxYear = 2022): number {
// 	if (taxYear < 2024) {
// 		return income * 1.2;
// 	}
// 	return income * 1.3;
// }

// console.log(calcTax(1000));

// type Employee = {
// 	readonly id: number;
// 	name: string;
// 	retire: (date: Date) => void;
// };

// let employee: Employee = {
// 	id: 1,
// 	name: "juan",
// 	retire: (date: Date) => {
// 		console.log(date);
// 	},
// };

// function ktw(w: number | string): number {
// 	if (typeof w === "number") {
// 		return w * 2.2;
// 	} else {
// 		return parseInt(w) * 2.2;
// 	}
// }

// console.log(ktw(10));
// console.log(ktw("10kg"));

// type Draggable = {
// 	drag: () => void;
// };

// type Resizable = {
// 	resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
// 	drag: () => {},
// 	resize: () => {},
// };

// type Quantity = 50 | 100;
// type Metric = "cm " | "inch";

// let q: Quantity = 100;

// function greet(name: string | null | undefined) {
// 	if (name) {
// 		console.log(name.toUpperCase());
// 	} else {
// 		console.log("Allo");
// 	}
// }

// greet(null);

// type Customer = {
// 	birthdate?: Date;
// };

// function getCustomer(id: number): Customer | null | undefined {
// 	return id === 0 ? null : { birthdate: new Date() };
// }

// let customer = getCustomer(0);
// console.log(customer?.birthdate?.getFullYear());

// let speed: number | null = null;
// let ride = {
// 	speed: speed ?? 30,
// };

// let phone = document.getElementById("phone") as HTMLInputElement;
// let phone1 = <HTMLInputElement>document.getElementById("phone");

// console.log(phone.value);
// console.log(phone1.value);

// // exercises

// let users = [
// 	{
// 		name: "John Smith",
// 		age: 30,
// 		occupation: "Software engineer",
// 	},
// 	{
// 		name: "Kate Müller",
// 		age: 28,
// 	},
// ];

class Account {
	readonly id: number;
	owner: string;
	balance: number;
	nickname?: string;

	constructor(id: number, owner: string, balance: number) {
		this.id = id;
		this.owner = owner;
		this.balance = balance;
	}

	deposit(amount: number): void {
		if (amount <= 0) {
			throw new Error("Invalid error");
		} else {
			this.balance += amount;
		}
	}
}
let account = new Account(1, "Juan", 0);
account.deposit(100);
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);

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

// class Account {
// 	nickname?: string;

// 	constructor(
// 		public readonly id: number,
// 		public owner: string,
// 		private _balance: number
// 	) {}

// 	deposit(amount: number): void {
// 		if (amount <= 0) {
// 			throw new Error("Invalid error");
// 		} else {
// 			this._balance += amount;
// 		}
// 	}

// 	private calcTax() {}

// 	get balance(): number {
// 		return this._balance;
// 	}

// 	set balance(val: number) {
// 		if (val < 0) {
// 			throw new Error("Invalid value");
// 		} else {
// 			this._balance = val;
// 		}
// 	}
// }
// let account = new Account(1, "Juan", 0);
// account.deposit(100);
// console.log(account);
// console.log(account.balance);
// console.log(typeof account);
// console.log(account instanceof Account);

// class SeatAssignment {
// 	[seatNumber: string]: string;
// }

// let seats = new SeatAssignment();

// seats.A1 = "Juan";
// seats.A2 = "Pedro";

// class Ride {
// 	private static _activeRides: number = 0;

// 	start() {
// 		Ride._activeRides++;
// 	}

// 	stop() {
// 		Ride._activeRides--;
// 	}

// 	static get activeRides() {
// 		return Ride._activeRides;
// 	}
// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// console.log(Ride.activeRides);
// console.log(Ride.activeRides);

// class Person {
// 	constructor(public firstName: string, public lastName: string) {}

// 	get fullName(): string {
// 		return `${this.firstName} ${this.lastName}`;
// 	}

// 	walk() {
// 		console.log("Walking");
// 	}
// }

// class Student extends Person {
// 	constructor(public studentId: number, firstName: string, lastName: string) {
// 		super(firstName, lastName);
// 	}

// 	takeTest() {
// 		console.log("Taking a test");
// 	}
// }

// class Teacher extends Person {
// 	override get fullName(): string {
// 		return `Prof. ${super.fullName}`;
// 	}
// }

// class Principal extends Person {
// 	override get fullName(): string {
// 		return `Principal. ${super.fullName}`;
// 	}
// }

// let teacher = new Teacher("John", "Smith");

// console.log(teacher.fullName);

// function printNames(people: Person[]) {
// 	for (let person of people) {
// 		console.log(person.fullName);
// 	}
// }

// printNames([
// 	new Student(1, "Juan", "Delacruz"),
// 	new Teacher("Pedro", "Penduko"),
// 	new Principal("Maria", "Clara"),
// ]);

// abstract class Shape {
// 	constructor(public color: string) {}

// 	abstract render(): void;
// }

// class Circle extends Shape {
// 	constructor(public radius: number, color: string) {
// 		super(color);
// 	}

// 	override render(): void {
// 		console.log("Rendering a circle");
// 	}
// }

// abstract class Calender {
// 	constructor(public name: string) {}

// 	abstract addEvent(): void;
// 	abstract removeEvent(): void;
// }

interface Calender {
	name: string;
	addEvent(): void;
	removeEvent(): void;
}

interface CloudCalender extends Calender {
	sync(): void;
}

class GoogleCalendar implements Calender {
	constructor(public name: string) {}

	addEvent(): void {
		throw new Error("Method not implemented.");
	}

	removeEvent(): void {
		throw new Error("Method not implemented.");
	}
}

let sales: number = 123_456_789;
let coutse: string = "Typescript";
let is_published: boolean = true;
let level;

let numbers: number[] = [1, 2, 3];

let user: [number, string] = [1, "Juan"];

// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size {
	Small = 1,
	Medium,
	Large,
}

let mySize: Size = Size.Medium;

console.log(mySize);

function calcTax(income: number, taxYear = 2022): number {
	if (taxYear < 2024) {
		return income * 1.2;
	}
	return income * 1.3;
}

console.log(calcTax(1000));

type Employee = {
	readonly id: number;
	name: string;
	retire: (date: Date) => void;
};

let employee: Employee = {
	id: 1,
	name: "juan",
	retire: (date: Date) => {
		console.log(date);
	},
};

function ktw(w: number | string): number {
	if (typeof w === "number") {
		return w * 2.2;
	} else {
		return parseInt(w) * 2.2;
	}
}

console.log(ktw(10));
console.log(ktw("10kg"));

type Draggable = {
	drag: () => void;
};

type Resizable = {
	resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
	drag: () => {},
	resize: () => {},
};

type Quantity = 50 | 100;
type Metric = "cm " | "inch";

let q: Quantity = 100;

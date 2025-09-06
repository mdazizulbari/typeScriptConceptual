const user = {
  name: "Toufiq",
  age: 20,
};

const user2 = {
  id: 1,
  ...user,
  address: "Dhaka",
};

const { name, age, id } = user2;
console.log(id, name, age);

console.log(user2);

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const numbers2: number[] = [0, ...numbers, 8, 9];

console.log(numbers2);

// rest
function restFn(...num: number[]): void {
  console.log(num);
}

restFn(1, 2, 3, 4, 5);

// console.log();

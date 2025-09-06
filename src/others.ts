{
  // type alias
  type TNickname = "Muskil Asan" | "Ural Ponkhi";

  const bondhu: TNickname = "Poruya";

  //   And
  type A = { bondhu: "Upokari" };
  type B = { shotru: number };

  type AB = A & B;
  const robot: AB = {
    bondhu: "Upokari",
    shotru: 2,
  };

  // ternary
  // let age = 21;
  // const status = age >= 18 ? "Voter" : "Shishu";
  let age = "test";

  if (typeof age == "number") {
    type voter = number;
  }

  type VoterType = typeof age extends number ? number : string;

  // console.log(status);

  // optional chaining

  interface Iuser {
    name: string;
    age: number;
    address: {
      country: string;
      city: string;
    };
  }

  const user = {
    name: "jekono",
    age: 32,
    address: {
      country: "BD",
      city: "Dhaka",
    },
  };
  console.log(user?.address?.city);
}

// nullish policy
const input = null;
const userInput = input ?? "GuestMajor ";

// never type
function crash(): never {
  //you can also use void too
  throw new Error("Error hoye gese vhai");
}
// crash();

// unknown type
let nm: unknown = "Tanjim";
console.log((nm as string).length);
console.log((<string>nm).length); 

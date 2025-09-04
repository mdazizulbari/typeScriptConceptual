const str: string = "String";
// ss bb u nn => string,symbol, bigint, boolean, undefined, number, null
// non-primitive array, object

let anyVar: number = 1;

let arr: number[] = [1, 2, 3];

export type TObj = {
  name: string;
  age: number;
  education?: {
    institution: "University" | "College" | "Diploma" | "School";
    level: string;
  };
};

const obj: TObj = {
  name: "Mansur",
  age: 21,
  education: {
    institution: "University",
    level: "Undergrad",
  },
};

{
  // type narrowing
  function fn(input: string | number | boolean | "Osthir") {
    if (typeof input === "number") {
      console.log("narrow number", input * 2);
    } else if (typeof input === "string") {
      console.log(input.length);
    } else {
      console.log(1);
    }
  }

  //   interface
  type TUser = {
    name: string;
    age: number;
  };

  type TLearner = {
    attitude: "learning";
  };

  type combined = TUser & TLearner;

  interface IUser {
    name: string;
    age: number;
  }

  interface ILearner extends IUser {
    attitude: "learning";
  }

  //   interface object

  const learner: combined = {
    name: "Salman",
    age: 23,
    attitude: "learning",
  };

  // generic
  function identity<T>(value: T): T[] {
    return [value];
  }

  interface IYouLearner<T> extends IUser {
    attitude: T;
  }

  const user23: IYouLearner<string | number> = {
    name: "test",
    age: 53,
    attitude: "No Learning",
  };

  // Constraints => barrier
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  const name = getProperty(user23, "name");
  console.log(typeof name);
}

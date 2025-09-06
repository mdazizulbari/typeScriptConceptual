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

  // asynchronus TS
  async function fetchUser(): Promise<string> {
    return "str";
  }

  const myPromise = new Promise((resolve, reject) => {
    const success = false;

    setTimeout(() => {
      if (success) {
        resolve("promise resolved successfully");
      } else {
        reject("promise rejected due to an error");
      }
    }, 1000);
  });

  myPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

  console.log(fetchUser());
  fetchUser().then((user) => console.log(user));

  // extisting map

  // interface IUser {
  //   name: string;
  //   age: number;
  // }

  // interface ILearner extends IUser {
  //   attitude: "learning";
  // }

  type result<T> = {
    [J in keyof T]: boolean;
  };
  const resultTest: result<ILearner> = {
    name: true,
    age: true,
    attitude: true,
  };

  // utility types
  const userUpdate: Partial<ILearner> = {
    name: "Abdur Rahim",
  };

  type unchangeable = Readonly<ILearner>;
  const user420: unchangeable = {
    name: "change me if you can",
    age: 30,
    attitude: "learning",
  };
}

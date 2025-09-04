function fn(input: string | null): void | null | undefined {
  const multi = 2 * 2;
  console.log(input, multi);
}

const fnAgain = (input: string | null): void | null | undefined => {
  const multi = 2 * 2;
  console.log(input, multi);
};

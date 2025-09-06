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
}

// 8 min 
export enum SneakerCategory {
  Nike = "nike",
  Adidas = "adidas",
  Puma = "puma",
}
export enum SneakerColor {
  White = "white",
  Black = "black",
  Red = "red",
  Yellow = "yellow",
}
export type Sneaker = {
  image: string;
  name: string;
  discount: number;
  price: number;
  color: SneakerColor;
  category: SneakerCategory;
};

export const sneakerData: Sneaker[] = [
  {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Air Runner",
    discount: 25,
    price: 99.99,
    color: SneakerColor.White,
    category: SneakerCategory.Nike,
  },
  {
    image:
      "https://images.unsplash.com/photo-1603787081207-362bcef7c144?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Street Glide",
    discount: 30,
    price: 89.5,
    color: SneakerColor.Black,
    category: SneakerCategory.Adidas,
  },
  {
    image:
      "https://images.unsplash.com/photo-1571601035754-5c927f2d7edc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sprint Blaze",
    discount: 15,
    price: 74.0,
    color: SneakerColor.Red,
    category: SneakerCategory.Puma,
  },
  {
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Court Classic",
    discount: 20,
    price: 120.0,
    color: SneakerColor.Black,
    category: SneakerCategory.Nike,
  },
  {
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Cloud Dash",
    discount: 18,
    price: 95.0,
    color: SneakerColor.White,
    category: SneakerCategory.Adidas,
  },
  {
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Volt Runner",
    discount: 35,
    price: 82.25,
    color: SneakerColor.Yellow,
    category: SneakerCategory.Puma,
  },
  {
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Urban Red",
    discount: 22,
    price: 110.0,
    color: SneakerColor.Red,
    category: SneakerCategory.Nike,
  },
  {
    image:
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sunburst",
    discount: 28,
    price: 77.75,
    color: SneakerColor.Yellow,
    category: SneakerCategory.Adidas,
  },
  {
    image:
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Neutral Step",
    discount: 0,
    price: 65.0,
    color: SneakerColor.White,
    category: SneakerCategory.Nike,
  },
  {
    image:
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Neutral Step",
    discount: 0,
    price: 65.0,
    color: SneakerColor.White,
    category: SneakerCategory.Nike,
  },
  {
    image:
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Neutral Step",
    discount: 0,
    price: 65.0,
    color: SneakerColor.White,
    category: SneakerCategory.Nike,
  },
  {
    image:
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Neutral Step",
    discount: 0,
    price: 65.0,
    color: SneakerColor.White,
    category: SneakerCategory.Nike,
  },
  {
    image:
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Neutral Step",
    discount: 0,
    price: 65.0,
    color: SneakerColor.White,
    category: SneakerCategory.Nike,
  },
  {
    image:
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Neutral Step",
    discount: 0,
    price: 65.0,
    color: SneakerColor.White,
    category: SneakerCategory.Nike,
  },
  {
    image:
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Neutral Step",
    discount: 0,
    price: 65.0,
    color: SneakerColor.White,
    category: SneakerCategory.Nike,
  },
  {
    image:
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Neutral Step",
    discount: 0,
    price: 65.0,
    color: SneakerColor.White,
    category: SneakerCategory.Nike,
  },
  {
    image:
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Neutral Step",
    discount: 0,
    price: 65.0,
    color: SneakerColor.White,
    category: SneakerCategory.Nike,
  },
  {
    image:
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Neutral Step",
    discount: 0,
    price: 65.0,
    color: SneakerColor.White,
    category: SneakerCategory.Nike,
  },
  {
    image:
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Neutral Step",
    discount: 0,
    price: 65.0,
    color: SneakerColor.White,
    category: SneakerCategory.Nike,
  },
  {
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mono Pulse",
    discount: 0,
    price: 70.0,
    color: SneakerColor.Black,
    category: SneakerCategory.Adidas,
  },
  {
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mono Pulse",
    discount: 0,
    price: 70.0,
    color: SneakerColor.Black,
    category: SneakerCategory.Adidas,
  },
  {
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mono Pulse",
    discount: 0,
    price: 70.0,
    color: SneakerColor.Black,
    category: SneakerCategory.Adidas,
  },
  {
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mono Pulse",
    discount: 0,
    price: 70.0,
    color: SneakerColor.Black,
    category: SneakerCategory.Adidas,
  },
  {
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mono Pulse",
    discount: 0,
    price: 70.0,
    color: SneakerColor.Black,
    category: SneakerCategory.Adidas,
  },
  {
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mono Pulse",
    discount: 0,
    price: 70.0,
    color: SneakerColor.Black,
    category: SneakerCategory.Adidas,
  },
  {
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mono Pulse",
    discount: 0,
    price: 70.0,
    color: SneakerColor.Black,
    category: SneakerCategory.Adidas,
  },
  {
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mono Pulse",
    discount: 0,
    price: 70.0,
    color: SneakerColor.Black,
    category: SneakerCategory.Adidas,
  },
  {
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mono Pulse",
    discount: 0,
    price: 70.0,
    color: SneakerColor.Black,
    category: SneakerCategory.Adidas,
  },
  {
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mono Pulse",
    discount: 0,
    price: 70.0,
    color: SneakerColor.Black,
    category: SneakerCategory.Adidas,
  },
  {
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Easy Walk",
    discount: 0,
    price: 49.99,
    color: SneakerColor.White,
    category: SneakerCategory.Puma,
  },
  {
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Easy Walk",
    discount: 0,
    price: 49.99,
    color: SneakerColor.White,
    category: SneakerCategory.Puma,
  },
  {
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Easy Walk",
    discount: 0,
    price: 49.99,
    color: SneakerColor.White,
    category: SneakerCategory.Puma,
  },
  {
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Easy Walk",
    discount: 0,
    price: 49.99,
    color: SneakerColor.White,
    category: SneakerCategory.Puma,
  },
  {
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Easy Walk",
    discount: 0,
    price: 49.99,
    color: SneakerColor.White,
    category: SneakerCategory.Puma,
  },
  {
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Easy Walk",
    discount: 0,
    price: 49.99,
    color: SneakerColor.White,
    category: SneakerCategory.Puma,
  },
  {
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Easy Walk",
    discount: 0,
    price: 49.99,
    color: SneakerColor.White,
    category: SneakerCategory.Puma,
  },
  {
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Easy Walk",
    discount: 0,
    price: 49.99,
    color: SneakerColor.White,
    category: SneakerCategory.Puma,
  },
  {
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Easy Walk",
    discount: 0,
    price: 49.99,
    color: SneakerColor.White,
    category: SneakerCategory.Puma,
  },
  {
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Easy Walk",
    discount: 0,
    price: 49.99,
    color: SneakerColor.White,
    category: SneakerCategory.Puma,
  },
  {
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Easy Walk",
    discount: 0,
    price: 49.99,
    color: SneakerColor.White,
    category: SneakerCategory.Puma,
  },
  {
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Easy Walk",
    discount: 0,
    price: 49.99,
    color: SneakerColor.White,
    category: SneakerCategory.Puma,
  },
  {
    image:
      "https://images.unsplash.com/photo-1608666634759-4376010f863d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Daylight",
    discount: 0,
    price: 59.5,
    color: SneakerColor.Red,
    category: SneakerCategory.Adidas,
  },
  {
    image:
      "https://images.unsplash.com/photo-1621315271772-28b1f3a5df87?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Shadow Low",
    discount: 0,
    price: 68.0,
    color: SneakerColor.Black,
    category: SneakerCategory.Nike,
  },
  {
    image:
      "https://images.unsplash.com/photo-1579338908476-3a3a1d71a706?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Comfy Run",
    discount: 0,
    price: 54.0,
    color: SneakerColor.White,
    category: SneakerCategory.Puma,
  },
  {
    image:
      "https://images.unsplash.com/photo-1621665421558-831f91fd0500?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Basic Trainer",
    discount: 0,
    price: 60.0,
    color: SneakerColor.Yellow,
    category: SneakerCategory.Adidas,
  },
  {
    image:
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Everyday Flex",
    discount: 0,
    price: 75.0,
    color: SneakerColor.Yellow,
    category: SneakerCategory.Nike,
  },
  {
    image:
      "https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Casual Slip",
    discount: 0,
    price: 45.5,
    color: SneakerColor.Black,
    category: SneakerCategory.Puma,
  },
  {
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Core Motion",
    discount: 0,
    price: 80.0,
    color: SneakerColor.Red,
    category: SneakerCategory.Adidas,
  },
];

function randomId() {
    return Math.floor(Math.random() * 100000);
}

const initialProducts = [
    {
      id: randomId(),
      name: "Marceline",
      price: 250000,
      img: "https://i.pinimg.com/564x/b5/30/87/b530872823fe3bd8e3b44fe2276813cd.jpg",
      quantity: 1,
    },
    {
      id: randomId(),
      name: "Marceline",
      price: 250000,
      img: "https://i.pinimg.com/564x/b5/30/87/b530872823fe3bd8e3b44fe2276813cd.jpg",
      quantity: 1,
    },
    {
      id: randomId(),
      name: "Marceline ver2",
      price: 350000,
      img: "https://i.pinimg.com/736x/dc/f7/7f/dcf77f294341e4a910575435e464dd2c.jpg",
      quantity: 1,
    },
    {
      id: randomId(),
      name: "Marceline ver3",
      price: 290000,
      img: "https://i.pinimg.com/564x/02/89/04/02890480b8306ac1731eacefe1e28325.jpg",
      quantity: 1,
    },
  ];

export default initialProducts;
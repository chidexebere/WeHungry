export default {
  menus: [
    {
      id: 1,
      cusine: "Regular",
      meals: [
        {
          id: 1,
          name: "Fried Rice",
          image: "1",
          price: "450",
          catererId: 2
        },
        {
          id: 2,
          name: "Jollof Rice",
          image: "2",
          price: "550",
          catererId: 1
        }
      ]
    },
    {
      id: 2,
      cusine: "Nigerian",
      meals: [
        {
          id: 3,
          name: "Eba & Egusi soup",
          image: "3",
          price: "650",
          catererId: 2
        },
        {
          id: 4,
          name: "Ewedu & Amala",
          image: "4",
          price: "400",
          catererId: 1
        }
      ]
    }
  ]
};

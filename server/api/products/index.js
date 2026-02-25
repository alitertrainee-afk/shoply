export default defineEventHandler(async (event) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return [
    {
      id: 1,
      title: "Nitro Laptop",
      price: 999.99,
      description: "Fastest laptop",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Vue Monitor",
      price: 299.99,
      description: "4K display",
      image: "https://via.placeholder.com/150",
    },
  ];
});

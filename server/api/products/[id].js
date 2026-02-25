export default defineEventHandler((event) => {
  const id = getRouterParam(event, "id");
  console.log("🚀 ~ id:", id);

  const products = [
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

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: "Product not found",
    });
  }

  return product;
});

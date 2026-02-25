export default defineEventHandler(async (event) => {
  const products = await db.getProducts();
  return products;
});

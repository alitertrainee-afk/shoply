export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const product = await db.getProductById(id);

  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: "Product not found in database",
    });
  }

  return product;
});

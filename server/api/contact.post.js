export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: "Message is required",
    });
  }

  const saved = await db.addMessage(body.message);

  return {
    success: true,
    message: saved,
  };
});

import { ZodSchema } from "zod";

export const validateRequestBody = async (schema: ZodSchema, body: unknown) => {
  try {
    schema.parse(body);
  } catch (error) {
    return { statusMessage: "Bad Request", statusCode: 400, error };
  }
};

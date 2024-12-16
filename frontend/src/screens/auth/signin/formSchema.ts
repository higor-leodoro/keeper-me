import { z } from "zod";

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});

export default signInFormSchema;

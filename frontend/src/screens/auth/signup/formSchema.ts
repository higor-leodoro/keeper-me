import { z } from "zod";

const singUpFormSchema = z.object({
  name: z.string().min(3, "Name is required."),
  lastName: z.string().min(3, "Last name is required."),
  email: z.string().email(),
  password: z.string().min(3, "Password is required."),
});

export default singUpFormSchema;

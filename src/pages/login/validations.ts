import {isAddress} from "viem";
import {z} from "zod";

export const LoginFormValidation = z.object({
  wallet: z.string().refine((value) => isAddress(value), {
    message: "Invalid wallet address",
  }),
});

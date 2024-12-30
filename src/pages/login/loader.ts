import {redirect} from "react-router-dom";
import {LoginFormValidation} from "./validations";

export async function loginLoader() {
  try {
    const wallet = window.localStorage.getItem("wallet");

    console.log(wallet);
    if (!wallet) return null;

    const {success, error} = LoginFormValidation.safeParse({
      wallet: JSON.parse(wallet),
    });
    if (!success) {
      return {ok: false, data: {error: error?.message}};
    }

    return redirect("/");
  } catch (error) {
    console.error(error);
    return null;
  }
}

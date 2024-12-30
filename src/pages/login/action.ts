import {ActionFunctionArgs, redirect} from "react-router-dom";
import {LoginFormValidation} from "./validations";

export async function loginAction({request}: ActionFunctionArgs) {
  console.log("Login page action");
  const wallet = (await request.formData()).get("wallet");

  const {success, data, error} = LoginFormValidation.strict().safeParse({
    wallet,
  });

  if (!success) {
    return {ok: false, data: {error: error?.message}};
  }
  window.localStorage.setItem("wallet", JSON.stringify(data.wallet));

  return redirect("/");
}

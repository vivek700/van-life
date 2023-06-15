import { useLoaderData, Form, redirect, useActionData, useNavigation } from "react-router-dom"
import { loginUser } from "../../api"

export function loginLoader({ request }) {
  return new URL(request.url).searchParams.get("message")
}

export async function action({request}) {

  const pathName = new URL(request.url).searchParams.get("redirectTo") || "/host"

  const formdata = await request.formData()
  const email = formdata.get("email")
  const password = formdata.get("password")
  try {
    const data = await loginUser({email, password})
    if (data) {
      localStorage.setItem("loggedin", JSON.stringify(true))
      return redirect(pathName)
    }
  
  }catch(err) {
    return err.message

  }
}

export default function Login() {
  const navigation =  useNavigation()
  const message = useActionData()
  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      <Form method="POST" replace className="login-form">
        <input type="email" name="email" placeholder="Email address" />
        <input type="password" name="password" placeholder="Password" />
        <button disabled={navigation.state === "submitting"}>{navigation.state=== "submitting" ? "Logging in..." : "Log in"}</button>
      </Form>
    </div>
  )
}

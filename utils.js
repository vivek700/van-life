import { redirect } from "react-router-dom"

export async function requireAuth(request) {

    const pathName = new URL(request.url).pathname 

    const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"))
    
    if (!isLoggedIn) {
        throw redirect(`/login?message=You must log in first!&redirectTo=${pathName}`)
    }
}
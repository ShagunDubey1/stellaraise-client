import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "../pages";

export default function PublicRoutes() {
  return (
    <>
      <Routes>
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
      </Routes>
    </>
  )
}

import { Route, Routes } from "react-router-dom";
import { Home, Login, Organization, Profile, Signup } from "../pages";
import { MainLayout } from "../layouts";

export default function PublicRoutes() {
  return (
    <>
      <Routes>
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />

        <Route path={'/'} element={<MainLayout />}>
          <Route path={'/'} element={<Home />} index />
          <Route path={'/profile'} element={<Profile />} />
          <Route path={'/organization'} element={<Organization />} />
          <Route path={'/campaign'} element={<TeamDepartment />} />
        </Route>
      </Routes>
    </>
  )
}

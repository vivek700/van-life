import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import "./src/css/index.css"
import "./src/css/Home.css"

import Home from "./src/pages/Home.jsx"
import About from "./src/pages/About.jsx"
import Vans, { loader as vansLoader } from "./src/pages/Vans/Vans.jsx"
import VanDetail, {
  loader as vanDetailLoader,
} from "./src/pages/Vans/VanDetail.jsx"
import Layout from "./src/components/Layout.jsx"
import Dashboard from "./src/pages/Host/Dashboard.jsx"
import Income from "./src/pages/Host/Income.jsx"
import Reviews from "./src/pages/Host/Reviews.jsx"
import HostLayout from "./src/components/HostLayout"
import HostVans, {
  loader as hostVansLoader,
} from "./src/pages/Host/HostVans.jsx"
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./src/pages/Host/HostVanDetail"

import HostVanPricing from "./src/pages/Host/HostVanPricing"
import HostVanPhotos from "./src/pages/Host/HostVanPhotos"
import HostVanInfo from "./src/pages/Host/HostVanInfo"
import NotFound from "./src/pages/NotFound"
import Error from "./src/components/Error"
import Login, { loginLoader, action as loginAction } from "./src/pages/Login"
import { requireAuth } from "./utils"
import "./server.js"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} loader={loginLoader} action={loginAction } />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} errorElement={<Error />} />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({request}) => await requireAuth(request)}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({request}) => await requireAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({request}) => await requireAuth(request)}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} errorElement={<Error />} />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({request}) => await requireAuth(request)}
          />
          <Route
            path="details"
            element={<HostVanInfo />}
            loader={async ({request}) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({request}) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({request}) => await requireAuth(request)}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
)

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { RouterLayout } from "@/layout";
import { Error, Home, Planet } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <Home />,
        index: true,
      },
      {
        path: "/planets/:id",
        element: <Planet />,
      },
      {
        path: "/",
        element: <Navigate to="/home" replace />,
      },
    ],
  },
]);

const Routes = () => <RouterProvider router={router} />;

export { Routes };

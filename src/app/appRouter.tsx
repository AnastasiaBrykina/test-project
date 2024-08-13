import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Layout } from "./Layout";
import { Main } from "@pages/main";
import { Signup } from "@pages/signup";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes,
  },
]);

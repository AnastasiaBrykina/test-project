import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Main } from "@pages/main/Main";
import { Layout } from "./Layout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
  },
];

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes,
  },
]);

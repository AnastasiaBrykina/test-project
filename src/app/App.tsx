import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { appRouter } from "./appRouter";
import { appStore } from "./appStore";

export const App = () => {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

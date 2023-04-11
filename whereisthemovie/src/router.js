import {createBrowserRouter} from "react-router-dom";
import BasicCard from "./components/cards/card";

const router = createBrowserRouter([
    {
      path: "/",
      element: <BasicCard/>,
    },
  ]);

  export default router;
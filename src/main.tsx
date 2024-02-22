import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import User from "./User.tsx";
import Chart from "./Chart.tsx";
import PassCH from "./PassCH.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VerificationCODE from "./VerificationCODE.tsx";
import Home from "./components/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/chart",
    element: <Chart />,
  },
  {
    path: "/PassCH",
    element: <PassCH />,
  },
  {
    path: "/VerificationCODE",
    element: <VerificationCODE />,
  },
  {
    path: "/home",
    element: <Home />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

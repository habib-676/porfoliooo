import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomeLayout from "./layouts/HomeLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import SkillsDetails from "./Pages/skills/SkillsDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
  },
  {
    path: "skillDetails",
    Component: SkillsDetails,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

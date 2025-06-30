import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomeLayout from "./layouts/HomeLayout.jsx";
import { createBrowserRouter, Link, RouterProvider } from "react-router";
import SkillsDetails from "./Pages/skills/SkillsDetails.jsx";
import ProDetails from "./Pages/projects/ProDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
  },
  {
    path: "skillDetails",
    Component: SkillsDetails,
  },
  {
    path: "projectDetails/:id",
    loader: async ({ params }) => {
      const res = await fetch("/projectData.json");
      const data = await res.json();
      return data.find((item) => item.id === parseInt(params.id));
    },
    Component: ProDetails,
  },
  {
    path: "*",
    Component: () => (
      <div className="text-3xl text-center mt-20">
        <h1 className="mb-4">404 Not Found</h1>
        <Link to="/" className="text-blue-500 underline">
          Go to Home
        </Link>
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

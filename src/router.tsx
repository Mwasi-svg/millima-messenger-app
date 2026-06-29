import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./components/main_layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { HomePage } = await import("./pages/home_page");
          return { Component: HomePage };
        },
      },
      {
        path: "privacy-policy",
        lazy: async () => {
          const { PrivacyPolicyPage } =
            await import("./pages/privacy_policy_page");
          return { Component: PrivacyPolicyPage };
        },
      },
    ],
  },
]);

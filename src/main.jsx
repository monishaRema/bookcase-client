import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { routes } from "./Routes/Routes.jsx";
import AuthProvider from "./Contex/AuthProvider.jsx";
import "./app.css";
import { HelmetProvider } from "@dr.pogodin/react-helmet";




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
   <AuthProvider>
      
      <RouterProvider router={routes} />
    </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);

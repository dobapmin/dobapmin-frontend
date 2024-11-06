import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/common/Layout";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import PostPage from "../pages/PostPage";
import { useLogin } from "../lib/hooks/useLogin";

function ProtectedRoute({ element }) {
  const { loggedIn } = useLogin();
  return loggedIn !== "" ? element : <Navigate to="/login" replace />;
  // return loggedIn === "" ? element : element;
}

export const mainRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { element: <ProtectedRoute element={<MainPage />} />, index: true },
      { element: <ProtectedRoute element={<PostPage />} />, path: "post" },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];

const router = createBrowserRouter(mainRoutes);

export default router;

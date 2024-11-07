import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/common/Layout";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import PostPage from "../pages/PostPage";
import ModalPage from "../components/modal/ModalPage";
import { useLogin } from "../lib/hooks/useLogin";

function ProtectedRoute({ element }) {
  const { loggedIn } = useLogin();
  return loggedIn !== null ? element : <Navigate to="/login" replace />;
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
  {
    path: "/main",
    element: <ModalPage />,
    children: [{ element: <ModalPage />, path: ":id" }],
  },
];

const router = createBrowserRouter(mainRoutes);

export default router;

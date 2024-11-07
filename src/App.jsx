// App.jsx
import { RouterProvider, Navigate } from "react-router-dom";
import mainRouter from "./routers/main-router";
import { LoginProvider } from "./context/loginContext";

function App() {
  return (
    <LoginProvider>
      <RouterProvider router={mainRouter} />
    </LoginProvider>
  );
}

export default App;

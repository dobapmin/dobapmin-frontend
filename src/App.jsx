import { RouterProvider, Navigate } from "react-router-dom";
import mainRouter from "./routers/main-router";
import { LoginProvider } from "./context/loginContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <LoginProvider>
      <RouterProvider router={mainRouter} />
    </LoginProvider>
  );
}

export default App;

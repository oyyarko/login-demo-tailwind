import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";
import Layout from "./layout";
import Signin from "./modules/Signin";
import Signup from "./modules/Signup";
import Dashboard from "./modules/Dashboard";
import NoPage from "./modules/404";
import { RootState } from "./store/store";

function App() {
  const { isLoggedIn } = useSelector((state: RootState) => state.login);

  return (
    <div className="max-sm:bg-secondary">
      <Routes>
        <Route path="/" element={<Layout />}>
          {isLoggedIn ? (
            <>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="*" element={<NoPage />} />
              <Route index element={<Navigate to="/dashboard" replace />} />
            </>
          ) : (
            <>
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route index element={<Signin />} />
              <Route path="signup" element={<Signup />} />
            </>
          )}
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

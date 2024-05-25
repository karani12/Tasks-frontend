import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import Home from "./pages/Home"
import { AuthProvider, useAuth } from "./context/AuthContext"
import UserDashboard from './pages/UserDashboard';
import AdminDashBoard from './pages/AdminDashboard';
import { useEffect } from 'react';

const PrivateRoute = () => {
  const { isAuthenticated, isLoading, IsAuthenticatedHandler,accessToken, getUser } = useAuth();
  useEffect(() => {
    if (!isAuthenticated && accessToken) {
      getUser();
      IsAuthenticatedHandler(true);
    }
  }, [isAuthenticated, accessToken, getUser, IsAuthenticatedHandler]);
  if (isLoading) return <div>Loading...</div>;

  if (!accessToken) return <Navigate to="/login" />;
  return <Outlet />;
};



function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<PrivateRoute />} >
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/admin" element={<AdminDashBoard />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </Router>



    </>
  )
}

export default App

import { createBrowserRouter } from "react-router-dom"
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import Home from "./pages/Home"
import { AuthProvider } from "./context/AuthContext"
import { RouterProvider } from "react-router-dom"
import UserDashboard from './pages/UserDashboard';
import AdminDashBoard from './pages/AdminDashboard';


const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/dashboard", Component: UserDashboard },
  { path: "/admin", Component: AdminDashBoard },
  { path: "/login", Component: Login },
  { path: "/register", Component: Register }
])

function App() {

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>


    </>
  )
}

export default App

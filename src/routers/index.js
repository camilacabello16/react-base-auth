import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Profile from "~/components/Profile";
import WebLayout from "~/layout/WebLayout";
import Login from "~/pages/Login";
import Signup from "~/pages/Signup";
import { useAuth } from "~/provider/authProvider";

const Routes = () => {
    const publicRouters = [
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <Signup /> }
    ];

    const privateRouters = [
        {
            path: "/",
            element: <WebLayout />, // Wrap the component in ProtectedRoute
            children: [
                {
                    path: "",
                    element: <Profile />,
                },
                {
                    path: "/profile",
                    element: <div>User Profile</div>,
                },
            ],
        },
    ];

    const { token } = useAuth();

    const router = createBrowserRouter([
        ...publicRouters,
        ...(token ? privateRouters : []),
    ]);

    // Provide the router configuration using RouterProvider
    return <RouterProvider router={router} />;
}

export default Routes;
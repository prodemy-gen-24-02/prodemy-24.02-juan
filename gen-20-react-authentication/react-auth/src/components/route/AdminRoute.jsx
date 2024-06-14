import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoutes() {
    const isAdmin = useSelector(
        (state) => state.auth.token !== "" && state.auth.users.role === "admin"
    );

    if (isAdmin) {
        return <Outlet />;
    }

    return <Navigate to="/" />;
}

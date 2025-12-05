import { Navigate, Outlet } from "react-router-dom";

function AdminLayout() {
    const token = localStorage.getItem('token')
    if (!token) return <Navigate to={'/login'} />

    return
}
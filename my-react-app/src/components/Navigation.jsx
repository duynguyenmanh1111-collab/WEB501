import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="flex gap-4 p-4 bg-green-500 text-white text-xl font-semibold">
            <NavLink to="/" className="hover:underline">
                Trang chủ
            </NavLink>

            <NavLink to="/about" className="hover:underline">
                Giới thiệu
            </NavLink>
            <NavLink to="/tour" className="hover:underline">
                Tour nổi bật
            </NavLink>
            <NavLink to="/cskh" className="hover:underline">
                CSKH
            </NavLink>
        </nav>
    );
}

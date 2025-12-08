// src/layouts/AdminLayout.jsx
import { Link, Outlet } from 'react-router-dom'   // Đã thêm Link vào đây

function AdminLayout() {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside className="fixed inset-y-0 left-0 w-64 bg-blue-800 text-white p-6">
                <h2 className="text-2xl font-bold mb-8">WEB501 Admin</h2>
                <nav className="space-y-4">
                    <Link to="/list" className="block py-3 px-4 rounded hover:bg-blue-700 transition font-medium">
                        Danh sách Tour
                    </Link>
                    <Link to="/add" className="block py-3 px-4 rounded hover:bg-blue-700 transition font-medium">
                        Thêm mới Tour
                    </Link>
                </nav>
            </aside>

            {/* Nội dung chính */}
            <main className="ml-64 flex-1 p-10">
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout 
import { Toaster } from "react-hot-toast";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB501</h1>
      <p className="text-lg text-gray-600">Ứng dụng quản lý dữ liệu</p>
    </div>
  );
}

function List() {
  const data = [
    { id: 1, name: "Sản phẩm A", price: 1000 },
    { id: 2, name: "Sản phẩm B", price: 2000 },
    { id: 3, name: "Sản phẩm C", price: 3000 },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Tên</th>
            <th className="border p-2">Giá</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.id}</td>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

          <Link to="/" className="text-xl font-semibold">
            <strong>WEB501 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">Trang chủ</Link>
            <Link to="/list" className="hover:text-gray-200">Danh sách</Link>
            <Link to="/add" className="hover:text-gray-200">Thêm mới</Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-gray-200">Đăng nhập</a>
            <a href="#" className="hover:text-gray-200">Đăng ký</a>
          </div>
        </div>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;

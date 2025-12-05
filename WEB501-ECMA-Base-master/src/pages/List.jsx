import toast from 'react-hot-toast'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
const API = "  http://localhost:3000"
// Hiển thị
function List() {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/tours`)
      .then((response) => {
        setTours(response.data);
        toast.success("Thành công");
      }).catch(() => {
        toast.error("Không thành công ");
      });
  }, []);
  const handleDelete = () => {
    toast.success('Delete successfull');
  }
  // Xóa 
  const Delete = (id) => {
    if (confirm("Bạn có muốn xóa trang này không ")) {
      axios.delete(`${API}/tours/${id}`).then(() => {
        setTours(tours.filter(tour => tour.id == !id));
        toast.success("Xóa thành công")
      }).catch(() => {
        toast.error("Xóa thất bại ")
      });
    };
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">#</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Tên tour
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Giá
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Thời gian
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Ảnh
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Hành động
              </th>
            </tr>
          </thead>

          <tbody>
            {tours.map((tour, index) => (
              <tr key={tour.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{tour.name}</td>
                <td className="px-4 py-3">{tour.price.toLocaleString()}$</td>
                <td className="px-4 py-3">{tour.duration}</td>
                <td className="px-4 py-3">
                  <img src={tour.image} alt={tour.name} className="w-16 h-12 object-cover rounded" />
                </td>
                <td>
                  <button onClick={() => Delete(tour.id)} className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Xóa</button>
                  <Link to={`/edit/${tour.id}`}>
                    <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Sửa</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default List;
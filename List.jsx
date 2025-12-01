import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

function ListPage() {
  const [tours, setTour] = useState([]);

  useEffect(() => {
    const getTours = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/tours");
        setTour(data);
      } catch (error) {
        toast.error("Lỗi tải dữ liệu");
      }
    };
    getTours();
  }, []);

  const handleDelete = async (id) => {
    try {
      if (confirm("toi muon xoa tour nay")) {
        await axios.delete("http://localhost:3000/tours/" + id);
        setTour(tours.filter((tour) => tour.id !== id));
        toast.success("xoa thanh cong");
      }
    } catch (error) {
      toast.error("Lỗi xóa tour");
    }
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
                First
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Last
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Email
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {tours.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{item.id}</td>


                <td className="px-4 py-2 border border-gray-300">{item.name}</td>


                <td className="px-4 py-2 border border-gray-300">
                  {item.destination}
                </td>


                <td className="px-4 py-2 border border-gray-300">
                  {item.price.toLocaleString()}
                </td>

                <td className="px-4 py-2 border border-gray-300">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}

            {tours.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-4 border border-gray-300 text-gray-500"
                >
                  Không có dữ liệu
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;

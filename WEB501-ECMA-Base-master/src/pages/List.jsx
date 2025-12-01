import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ListPage() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(false)
  const [deletingId, setDeletingId] = useState(null)

  useEffect(() => {
    const getTours = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get('http://localhost:3000/tours')
        setTours(data)
      } catch (error) {
        toast.error(error.response?.data?.message || error.message || 'Lỗi khi lấy dữ liệu')
      } finally {
        setLoading(false)
      }
    }
    getTours()
  }, [])

  const handleDelete = async id => {
    try {
      if (!window.confirm('Tao muon xoa tour nay')) return
      setDeletingId(id)
      await axios.delete(`http://localhost:3000/tours/${id}`)
      setTours(prev => prev.filter(t => String(t.id) !== String(id)))
      toast.success('Ok tao da xoa duoc roi')
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="p-6">
      <Toaster />
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      {loading ? (
        <p>Đang tải...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Name</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Last</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Handle</th>
              </tr>
            </thead>

            <tbody>
              {tours.map(tour => (
                <tr key={tour.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300">{tour.id}</td>
                  <td className="px-4 py-2 border border-gray-300">{tour.name}</td>
                  <td className="px-4 py-2 border border-gray-300">....</td>
                  <td className="px-4 py-2 border border-gray-300 flex gap-2">


                    <Link
                      to={`/tours/edit/${tour.id}`}
                      className="px-3 py-1 rounded bg-blue-500 text-white"
                    >
                      Edit
                    </Link>


                    <button
                      onClick={() => handleDelete(tour.id)}
                      disabled={deletingId === tour.id}
                      className="px-3 py-1 rounded bg-red-500 text-white disabled:opacity-50"
                    >
                      {deletingId === tour.id ? 'Đang xóa...' : 'Delete'}
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default ListPage

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

function EditPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Tour noi dia')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchTour = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`http://localhost:3000/tours/${id}`)
        const tour = res.data
        setName(tour.name || '')
        setPrice(tour.price || '')
        setCategory(tour.category || 'Tour noi dia')
      } catch (err) {
        toast.error('Không tìm thấy tour này!')
        navigate('/list')
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchTour()
  }, [id, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name.trim() || !price) {
      toast.error('Vui lòng điền đầy đủ thông tin')
      return
    }

    try {
      await axios.put(`http://localhost:3000/tours/${id}`, {
        name: name.trim(),
        price: Number(price),
        category,
      })

      toast.success('Sửa thành công')
      navigate('/list')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Thất bại rồi cố lên')
    }
  }



  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold mb-8 text-center">Sửa Tour</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <label className="block text-sm font-medium mb-2">Tên tour</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Nhập tên tour"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Giá tour</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            min="0"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập giá tiền"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Loại tour</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="Tour noi dia">Tour nội địa</option>
            <option value="Tour quoc te">Tour quốc tế</option>
          </select>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Sửa
          </button>
          <button
            type="button"
            onClick={() => navigate('/list')}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition font-medium"
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditPage
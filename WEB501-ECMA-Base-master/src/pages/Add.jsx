import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

function Add() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Tour nội địa ')
  // handleChange
  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:3000/tours', {
        name,
        price: Number(price),
        category: category,
      })
      toast.success('Them thành công')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Text input */}
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Name
          </label>
          <input
            value={name}
            onChange={event => setName(event.target.value)}
            type="text"
            id="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Price
          </label>
          <input
            value={price}
            onChange={event => setPrice(event.target.value)}
            type="number"
            id="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        {/* Checkbox list
        <div>
          <label className="block font-medium mb-1">Radio</label>

          <div className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              id="flexCheck1"
              className="h-4 w-4 text-blue-600 rounded border-gray-300"
            />
            <label htmlFor="flexCheck1" className="text-gray-700">
              checkbox 1
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="flexCheck2"
              className="h-4 w-4 text-blue-600 rounded border-gray-300"
            />
            <label htmlFor="flexCheck2" className="text-gray-700">
              checkbox 2
            </label>
          </div>
        </div> */}

        {/* Radio list */}
        {/* <div>
          <label className="block font-medium mb-1">Checkbox</label>

          <div className="flex items-center space-x-2 mb-2">
            <input
              type="radio"
              name="flexRadioDefault"
              id="flexRadio1"
              className="h-4 w-4 text-blue-600"
            />
            <label htmlFor="flexRadio1" className="text-gray-700">
              Checkbox 1
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="flexRadioDefault"
              id="flexRadio2"
              className="h-4 w-4 text-blue-600"
            />
            <label htmlFor="flexRadio2" className="text-gray-700">
              Checkbox 2
            </label>
          </div>
        </div> */}

        {/* Select */}
        <div>
          <label htmlFor="selectOption" className="block font-medium mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            id="selectOption"
            className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Tour noi dia">Tour noi dia</option>
            <option value="Tour quoc te">Tour quoc te</option>
          </select>
        </div>

        {/* Submit button */}
        <div className="text-center pt-6">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Heading from './components/Heading';
import TourCard from './components/TourCard';

function HomePage() {
  const tours = [
    {
      id: 1,
      title: 'Tour Du Lịch Cuba',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg',
    },
    {
      id: 2,
      title: 'Tour Du Lịch Hoa Kỳ',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg',
    },
    {
      id: 3,
      title: 'Tour Du Lịch Úc',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg',
    },
  ];

  return (
    <>
      <Heading title="Tour Nội Địa" />

      <p className="text-xl font-medium my-4 px-2 text-gray-700">
        Các chuyến đi đồng hành cùng chúng tôi là khoảnh khắc đặc biệt...
      </p>

      <div className="flex flex-wrap gap-4 justify-center px-2">
        {tours.map(tour => (
          <TourCard key={tour.id} title={tour.title} image={tour.image} />
        ))}
      </div>

      <Heading title="Tour Quốc Tế" />
    </>
  );
}

function AboutPage() {
  return <h1 className="text-3xl p-4 font-bold">Chào mừng bạn đã đến với TravelGO</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="p-4 flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

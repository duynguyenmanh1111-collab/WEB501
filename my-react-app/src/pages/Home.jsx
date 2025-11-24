import Heading from "../components/Heading";
import TourCard from "../components/TourCard";

export default function Home() {
    const tours = [
        {
            id: 1,
            title: "Tour Du Lịch Cuba",
            image:
                "https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg",
        },
        {
            id: 2,
            title: "Tour Du Lịch Hoa Kỳ",
            image:
                "https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg",
        },
        {
            id: 3,
            title: "Tour Du Lịch Nhật Bản",
            image:
                "https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg",
        },
    ];

    return (
        <div>
            <Heading title="Tour Nội Địa" />

            <p className="text-xl font-medium my-4 px-2">
                Các chuyến đi đồng hành cùng chúng tôi là khoảnh khắc đặc biệt, luôn
                sẵn sàng tạo ra những trải nghiệm độc đáo và khó quên cho du khách,
                giúp mang đến những chuyến hành trình tuyệt vời.
            </p>

            <div className="flex flex-nowrap gap-5">
                {tours.map((tour) => (
                    <TourCard key={tour.id} title={tour.title} image={tour.image} />
                ))}
            </div>

            <div className="mt-10">
                <Heading title="Tour Quốc Tế" />
            </div>
        </div>
    );
}

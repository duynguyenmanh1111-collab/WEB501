import Button from './Button'

export default function TourCard(props) {
    return (
        <div className="text-center">
            <img
                src={props.image}
                width={500}
                height={300}
                alt=""
                className="rounded-md transition-transform duration-500 hover:scale-105 hover:brightness-110"
            />

            <h2 className="text-1xl font-bold text-orange-300 mt-2">
                {props.title}
            </h2>

            <div className="flex justify-around mt-2">
                <Button label="Xem chi tiết" bgColor="bg-blue-500 hover:bg-blue-600" />
                <Button label="Đặt tour" bgColor="bg-red-500 hover:bg-red-600" />
            </div>
        </div>
    )
}

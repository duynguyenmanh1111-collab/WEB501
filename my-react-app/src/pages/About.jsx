export default function About() {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Giới Thiệu</h1>
            <p className="text-lg">
                Chúng tôi là đơn vị cung cấp các tour du lịch chất lượng cao...
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <img src="https://picsum.photos/400/250?random=1" className="rounded-lg shadow" />
                <img src="https://picsum.photos/400/250?random=2" className="rounded-lg shadow" />
                <img src="https://picsum.photos/400/250?random=3" className="rounded-lg shadow" />
            </div>
        </div>
    );
}

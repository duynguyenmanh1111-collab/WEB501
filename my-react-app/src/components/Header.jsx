import { useState } from "react";

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">


                <h1 className="text-2xl font-extrabold text-blue-600">
                    ManhDuy
                </h1>


                <ul className="hidden md:flex gap-8 text-lg font-semibold">
                    <li className="hover:text-orange-500 duration-200 cursor-pointer">
                        Trang Chủ
                    </li>
                    <li className="hover:text-orange-500 duration-200 cursor-pointer">
                        Thông Tin
                    </li>
                    <li className="hover:text-orange-500 duration-200 cursor-pointer">
                        Đặt Tour
                    </li>
                    <li className="hover:text-orange-500 duration-200 cursor-pointer">
                        Liên Hệ
                    </li>
                </ul>



            </div>


            {open && (
                <ul className="md:hidden bg-green-500 text-white shadow-md px-6 py-3 space-y-3 text-lg font-semibold">

                </ul>
            )}
        </nav>
    );
}

export default Header;

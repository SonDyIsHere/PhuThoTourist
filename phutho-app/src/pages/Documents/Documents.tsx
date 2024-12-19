import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { DatePicker, Space } from "antd";
import PageHeader from "../../components/PageHeader";
import icon from "../../assets/icon";
import image from "../../assets/images";

import document_1 from "../../assets/images/document/document_1.png";
import document_2 from "../../assets/images/document/document_2.png";
import document_3 from "../../assets/images/document/document_3.png";
import document_4 from "../../assets/images/document/document_4.png";
import document_5 from "../../assets/images/document/document_5.png";
import document_6 from "../../assets/images/document/document_6.png";
import document_7 from "../../assets/images/document/document_7.png";
import document_8 from "../../assets/images/document/document_8.png";

const images = [
    document_1,
    document_2,
    document_3,
    document_4,
    document_5,
    document_6,
    document_7,
    document_8,
];

function Documents() {
    const mainSectionRef = useRef<HTMLDivElement | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(7); // Số tài liệu mỗi trang

    const totalItems = 30; // Tổng số tài liệu (giả lập)
    const totalPages = Math.ceil(totalItems / itemsPerPage); // Tổng số trang
    const items = Array.from({ length: totalItems }, (_, i) => `Tài liệu ${i + 1}`); // Tạo danh sách tài liệu

    const scrollToMainSection = () => {
        if (mainSectionRef.current) {
            mainSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Lấy danh sách tài liệu cho trang hiện tại
    const paginatedItems = items.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Xử lý thay đổi trang
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Intro Section */}
            <div className="flex flex-col items-center py-12 px-4 md:py-6 md:px-2">
                <div className="flex justify-center pt-12 md:pt-6">
                    <PageHeader text="TÀI LIỆU" />
                </div>
                <div className="mt-12 md:mt-6 max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 mb-10">
                        {images.map((image, i) => (
                            <div
                                key={i}
                                className="relative w-56 pt-[100%] group overflow-hidden"
                            >
                                <img
                                    src={image}
                                    alt={`Document ${i + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                    <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">
                                        Click để xem
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={scrollToMainSection}
                            className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center transition-transform transform hover:scale-105"
                        >
                            ↓
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Section */}
            <section
                ref={mainSectionRef}
                className="bg-slate-300 rounded-lg shadow-md p-6 sm:p-8 mb-12 mx-4"
            >
                <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 px-4">
                    {/* Left Section */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <p className="text-sm sm:text-lg font-medium text-blue-600">Ngày tạo</p>
                        <Space direction="vertical">
                            <DatePicker className="h-10 text-sm sm:text-base border border-gray-300 rounded-md" />
                        </Space>
                        <img src={icon.arrow_right} alt="Arrow" className="mx-2 hidden sm:block" />
                        <Space direction="vertical">
                            <DatePicker className="h-10 text-sm sm:text-base border border-gray-300 rounded-md" />
                        </Space>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        <p className="text-sm sm:text-lg font-medium text-blue-600">Từ khoá</p>
                        <div className="flex items-center border border-gray-300 rounded-lg p-2 w-full sm:w-auto">
                            <img src={icon.search} alt="Search" className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm"
                                className="text-sm sm:text-lg text-gray-500 placeholder-gray-400 w-full"
                            />
                        </div>
                        <div className="flex items-center w-8 h-8 sm:w-10 sm:h-10 border border-gray-300 rounded-full justify-center">
                            <img src={icon.filter} alt="Filter" />
                        </div>
                    </div>
                </div>



                {/* Documents List */}
                <ul className="mt-6 space-y-4 px-4">

                    <li className="bg-blue-900 text-white text-left font-semibold text-sm sm:text-lg rounded-lg flex items-center">
                        <span className="w-10 text-center p-2 sm:p-4">STT</span>
                        <span className="flex-grow text-left ml-2 sm:ml-5 p-2 sm:p-4">Tên tài liệu</span>
                        <span className="flex-grow p-2 sm:p-4">Ngày tạo</span>
                        <span className="w-16 sm:w-28 text-center p-2 sm:p-4">Tải về</span>
                    </li>
                    {paginatedItems.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center bg-blue-50 rounded-lg p-2 sm:p-4 gap-2 shadow-sm"
                        >
                            <span className="w-10 text-center text-sm sm:text-lg font-medium">
                                {(currentPage - 1) * itemsPerPage + index + 1}
                            </span>
                            <span className="flex-grow text-left ml-2 sm:ml-5 text-sm sm:text-lg font-medium text-blue-700">
                                {item}
                            </span>
                            <span className="flex-grow text-gray-600 text-sm sm:text-base">
                                03/03/12 22:43
                            </span>
                            <button className="w-16 sm:w-28 text-center flex items-center justify-center">
                                <img
                                    src={icon.download}
                                    alt="Download"
                                    className="w-4 sm:w-6 h-4 sm:h-6"
                                />
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Pagination */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
                    <div className="flex items-center gap-2">
                        <button
                            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            &lt;
                        </button>
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                className={`w-8 h-8 sm:w-10 sm:h-10 text-center font-medium ${
                                    currentPage === i + 1
                                        ? "bg-blue-600 text-white rounded-lg"
                                        : "text-gray-700"
                                }`}
                                onClick={() => handlePageChange(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Documents;

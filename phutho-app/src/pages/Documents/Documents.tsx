import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { DatePicker, Space } from 'antd';
import PageHeader from '../../components/PageHeader';
import icon from '../../assets/icon';
import image from '../../assets/images';

import document_1 from '../../assets/images/document/document_1.png';
import document_2 from '../../assets/images/document/document_2.png';
import document_3 from '../../assets/images/document/document_3.png';
import document_4 from '../../assets/images/document/document_4.png';
import document_5 from '../../assets/images/document/document_5.png';
import document_6 from '../../assets/images/document/document_6.png';
import document_7 from '../../assets/images/document/document_7.png';
import document_8 from '../../assets/images/document/document_8.png';

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
    // Sử dụng ref để tham chiếu đến phần main section
    const mainSectionRef = useRef<HTMLDivElement | null>(null); // Chỉ định kiểu HTMLDivElement

    const scrollToMainSection = () => {
        if (mainSectionRef.current) {
            mainSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container mx-auto">
            {/* Intro Section */}
            <div className="flex flex-col items-center py-12 px-4 md:py-6 md:px-2">
                <div className="flex justify-center pt-12 md:pt-6">
                    <PageHeader text="TÀI LIỆU" />
                </div>
                <div className="mt-12 md:mt-6 max-w-5xl mx-auto">
                    <div className="grid grid-cols-4 gap-4 mt-20 mb-10">
                        {images.map((image, i) => (
                            <div key={i} className="relative w-56 pt-[100%] group overflow-hidden">
                                <img
                                    src={image}
                                    alt={`Document ${i + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                    <span className="text-white font-semibold text-lg">Click để xem</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Arrow Button */}
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
            <section ref={mainSectionRef} className="bg-slate-300 rounded-lg shadow-md p-8 mb-20 mx-4 md:p-6 md:mb-12">
                {/* Top Controls */}
                <div className="flex items-center justify-between w-full gap-4 px-10 pt-10">
                    {/* Left Section - Ngày tạo and Từ khoá */}
                    <div className="flex items-center gap-4">
                        <p className="text-lg font-medium text-blue-600">Ngày tạo</p>
                        <Space direction="vertical">
                            <DatePicker className="h-10 text-lg border border-gray-300 rounded-md" />
                        </Space>
                        <img src={icon.arrow_right} alt="Arrow" className="mx-2" />
                        <Space direction="vertical">
                            <DatePicker className="h-10 text-lg border border-gray-300 rounded-md" />
                        </Space>
                    </div>

                    {/* Right Section - Search and Filter */}
                    <div className="flex items-center gap-4 ml-auto">
                        <p className="text-lg font-medium text-blue-600">Từ khoá</p>
                        <div className="flex items-center border border-gray-300 rounded-lg p-2">
                            <img src={icon.search} alt="Search" className="w-5 h-5 mr-2" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm"
                                className="text-lg text-gray-500 placeholder-gray-400 w-full"
                            />
                        </div>
                        <div className="flex items-center w-10 h-10 border border-gray-300 rounded-full justify-center">
                            <img src={icon.filter} alt="Filter" />
                        </div>
                    </div>
                </div>


                {/* Documents List */}
                <ul className="mt-6 space-y-4 px-10">
                    {/* Header */}
                    <li className="bg-blue-900 text-white text-left font-semibold text-lg rounded-lg flex items-center">
                        <span className="w-10 text-center p-4">STT</span>
                        <span className="border-l-2 border-white w-[700px] text-left ml-5 p-4">Tên tài liệu</span>
                        <span className="border-l-2 border-white w-[500px] p-4">Ngày tạo</span>
                        <span className="border-l-2 border-white w-28 text-center p-4">Tải về</span>
                    </li>

                    {/* Document Items */}
                    {[...Array(10)].map((_, i) => (
                        <li
                            key={i}
                            className="flex items-center bg-blue-50 rounded-lg p-4 gap-2 lg:bg-white lg:shadow-md"
                        >
                            <span className="w-10 text-center text-lg font-medium">{i + 1}</span>
                            <span className="w-[700px] text-left ml-5 text-lg font-medium text-blue-700">Tài liệu {i + 1}</span>
                            <span className="w-[500px] text-gray-600">03/03/12 22:43</span>
                            <button className="w-28 text-center flex items-center justify-center">
                                <img src={icon.download} alt="Download" className="w-6 h-6" />
                            </button>
                        </li>
                    ))}
                </ul>



                {/* Pagination */}
                <div className="flex justify-between items-center mt-8">
                    <div className="hidden lg:flex items-center gap-2 text-lg">
                        Hiển thị <input type="text" value="10" className="border border-blue-600 rounded-md text-center w-10" /> tài liệu mỗi trang
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center">
                            <img src={icon.prev_prev} alt="Previous" />
                        </button>
                        <button className="w-8 h-8 text-center font-medium bg-blue-600 text-white rounded-lg">1</button>
                        <button className="w-8 h-8 text-center font-medium text-gray-700">2</button>
                        <button className="w-8 h-8 text-center font-medium text-gray-700">...</button>
                        <button className="w-8 h-8 text-center font-medium text-gray-700">10</button>
                        <button className="w-8 h-8 flex items-center justify-center">
                            <img src={icon.prev_next} alt="Next" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Documents;

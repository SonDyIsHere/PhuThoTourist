import { Link } from 'react-router-dom';
import { DatePicker, Space } from 'antd';
import PageHeader from '../../components/PageHeader';
import icon from '../../assets/icon';
import CareerCard from '../../components/CareerCard';
import { useState } from 'react';
import React from 'react';

const Careers: React.FC = () => {

    const [selectedFields, setSelectedFields] = useState<string[]>([]);
    const [selectedWorkForms, setSelectedWorkForms] = useState<string[]>([]);
    const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

    const toggleSelection = (item: string, setSelected: React.Dispatch<React.SetStateAction<string[]>>, selectedItems: string[]) => {
        if (selectedItems.includes(item)) {
            setSelected(selectedItems.filter(i => i !== item));
        } else {
            setSelected([...selectedItems, item]);
        }
    };

    return (
        <div className="flex flex-col items-center py-12 px-4 md:py-6 md:px-2">
            <div className="flex justify-center pt-12 md:pt-6">
                <PageHeader text="TUYỂN DỤNG" />
            </div>
            <div className="flex p-44 min-w-[1000px] mx-auto space-x-12">
                <div className='min-w-[400px]'>
                {/* Career Filter */}
                <div className="flex flex-col border-white border-b lg:flex-row gap-4 bg-slate-300 p-6 lg:p-4 rounded-t-lg shadow-lg backdrop-blur-md">
                    <div className="flex items-center gap-4 bg-white p-2 rounded-md shadow-sm w-full">
                        <img src={icon.search} alt="Search" className="w-5 h-5" />
                        <input
                            type="text"
                            className="flex-1 text-gray-500 placeholder-gray-400 text-lg"
                            placeholder="Tìm kiếm"
                        />
                    </div>
                </div>


                
                    {/* Career Category */}
                    <div className="space-y-8 bg-slate-300 p-10">
                        <div>
                            <h2 className="text-2xl font-semibold text-blue-800 flex items-center gap-2">
                                <img src={icon.bag} alt="Bag Icon" className="w-6 h-6" />
                                Lĩnh vực
                            </h2>
                            <ul className="flex flex-wrap gap-2 mt-4">
                                {['Hướng dẫn viên', 'Kinh doanh', 'Kỹ sư xây dựng', 'Nhân viên kế toán'].map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => toggleSelection(item, setSelectedFields, selectedFields)}
                                        className={`px-4 py-2 rounded-full shadow-md text-gray-600 cursor-pointer ${selectedFields.includes(item) ? 'bg-blue-900 text-white' : 'bg-white hover:opacity-70'}`}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-blue-800 flex items-center gap-2">
                                <img src={icon.card} alt="Card Icon" className="w-6 h-6" />
                                Hình thức làm việc
                            </h2>
                            <ul className="flex flex-wrap gap-2 mt-4">
                                {['Bán thời gian', 'Nhân viên chính thức', 'Theo ca', 'Thực tập'].map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => toggleSelection(item, setSelectedWorkForms, selectedWorkForms)}
                                        className={`px-4 py-2 rounded-full shadow-md text-gray-600 cursor-pointer ${selectedWorkForms.includes(item) ? 'bg-blue-900 text-white' : 'bg-white hover:opacity-70'}`}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-blue-800 flex items-center gap-2">
                                <img src={icon.location} alt="Location Icon" className="w-6 h-6" />
                                Nơi làm việc
                            </h2>
                            <ul className="flex flex-wrap gap-2 mt-4">
                                {['Cà Phê Vườn Đá', 'NH Thủy Tạ Đầm Sen', 'CVVH Đầm Sen', 'Khách sạn Ngọc Lan'].map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => toggleSelection(item, setSelectedLocations, selectedLocations)}
                                        className={`px-4 py-2 rounded-full shadow-md text-gray-600 cursor-pointer ${selectedLocations.includes(item) ? 'bg-blue-900 text-white' : 'bg-white hover:opacity-70'}`}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    </div>
                <div >
                    {/* Career Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        <CareerCard active={true} />
                        <CareerCard />
                        <CareerCard active={true} />
                        <CareerCard active={true} />
                        <CareerCard active={true} />
                        <CareerCard />
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center space-x-2 mt-8">
                        <button className="w-8 h-8 flex items-center justify-center text-gray-400">
                            <img src={icon.paginate_prev_disable} alt="Previous" />
                        </button>
                        <button className="w-8 h-8 text-center font-medium bg-blue-600 text-white rounded">1</button>
                        <button className="w-8 h-8 text-center font-medium text-gray-700">2</button>
                        <button className="w-8 h-8 text-center font-medium text-gray-700">3</button>
                        <button className="w-8 h-8 text-center font-medium text-gray-700">...</button>
                        <button className="w-8 h-8 text-center font-medium text-gray-700">10</button>
                        <button className="w-8 h-8 flex items-center justify-center">
                            <img src={icon.paginate_next} alt="Next" />
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Careers;

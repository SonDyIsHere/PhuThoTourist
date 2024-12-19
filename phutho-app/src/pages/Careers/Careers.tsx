import { Link } from 'react-router-dom';
import { DatePicker, Space } from 'antd';
import PageHeader from '../../components/PageHeader';
import icon from '../../assets/icon';
import CareerCard from '../../components/CareerCard';
import { useState, useEffect } from 'react';
import React from 'react';

const ITEMS_PER_PAGE = 6; // Số lượng bài tuyển dụng trên mỗi trang

const Careers: React.FC = () => {
    const [selectedFields, setSelectedFields] = useState<string[]>([]); // Lĩnh vực
    const [selectedWorkForms, setSelectedWorkForms] = useState<string[]>([]); // Hình thức làm việc
    const [selectedLocations, setSelectedLocations] = useState<string[]>([]); // Nơi làm việc
    const [careersData, setCareersData] = useState<any[]>([]); // Danh sách bài tuyển dụng
    const [currentPage, setCurrentPage] = useState<number>(1); // Trang hiện tại
    const [filteredData, setFilteredData] = useState<any[]>([]); // Dữ liệu sau khi lọc

    // Giả lập dữ liệu tuyển dụng (hoặc thay bằng API)
    useEffect(() => {

        const fakeJobs = [
            { jobTitle: 'Nhân viên', field: 'Thiết kế đồ hoạ', location: 'CVVH Đầm Sen', postedTime: '2 tuần trước', status: 'Đang tuyển', jobDescription: 'Thiết kế đồ họa cho các dự án marketing và truyền thông.' },
            { jobTitle: 'Nhân viên', field: 'Kinh doanh', location: 'TP.HCM', postedTime: '1 tuần trước', status: 'Hết hạn', jobDescription: 'Phát triển và duy trì mối quan hệ với khách hàng tiềm năng.' },
            { jobTitle: 'Nhân viên', field: 'Công nghệ thông tin', location: 'Hà Nội', postedTime: '3 ngày trước', status: 'Đang tuyển', jobDescription: 'Lập trình phần mềm và bảo trì các hệ thống công nghệ.' },
            { jobTitle: 'Lập trình viên', field: 'Công nghệ thông tin', location: 'TP.HCM', postedTime: '1 tháng trước', status: 'Đang tuyển', jobDescription: 'Phát triển ứng dụng web và phần mềm theo yêu cầu.' },
            { jobTitle: 'Nhân viên', field: 'Marketing', location: 'Hà Nội', postedTime: '3 tuần trước', status: 'Đang tuyển', jobDescription: 'Lên kế hoạch và triển khai các chiến dịch marketing trực tuyến.' },
            { jobTitle: 'Nhân viên', field: 'Nhân sự', location: 'Đà Nẵng', postedTime: '5 ngày trước', status: 'Hết hạn', jobDescription: 'Quản lý và phát triển nguồn nhân lực, tuyển dụng nhân viên.' },
            { jobTitle: 'Chuyên viên', field: 'Tài chính', location: 'TP.HCM', postedTime: '4 tuần trước', status: 'Đang tuyển', jobDescription: 'Đảm bảo các hoạt động tài chính, kế toán trong công ty đúng quy trình.' },
            { jobTitle: 'Nhân viên', field: 'Quản lý dự án', location: 'Hà Nội', postedTime: '2 tháng trước', status: 'Đang tuyển', jobDescription: 'Quản lý và giám sát tiến độ các dự án của công ty.' },
            { jobTitle: 'Nhân viên', field: 'Phân tích dữ liệu', location: 'TP.HCM', postedTime: '1 ngày trước', status: 'Đang tuyển', jobDescription: 'Phân tích và báo cáo dữ liệu nhằm hỗ trợ quyết định kinh doanh.' },
            { jobTitle: 'Lập trình viên', field: 'Công nghệ thông tin', location: 'Đà Nẵng', postedTime: '1 tuần trước', status: 'Hết hạn', jobDescription: 'Phát triển các ứng dụng phần mềm phục vụ khách hàng.' },
            { jobTitle: 'Nhân viên', field: 'Quản lý sản phẩm', location: 'Hà Nội', postedTime: '5 tuần trước', status: 'Đang tuyển', jobDescription: 'Quản lý và phát triển các sản phẩm mới của công ty.' },
            { jobTitle: 'Chuyên viên', field: 'Kế toán', location: 'TP.HCM', postedTime: '6 ngày trước', status: 'Hết hạn', jobDescription: 'Quản lý báo cáo tài chính và xử lý các vấn đề kế toán.' },
            { jobTitle: 'Nhân viên', field: 'Thiết kế đồ hoạ', location: 'Hà Nội', postedTime: '2 tuần trước', status: 'Đang tuyển', jobDescription: 'Thiết kế các tài liệu quảng cáo và hình ảnh trực quan.' },
            { jobTitle: 'Quản lý', field: 'Logistics', location: 'TP.HCM', postedTime: '3 tuần trước', status: 'Đang tuyển', jobDescription: 'Quản lý chuỗi cung ứng và các hoạt động logistics của công ty.' },
            { jobTitle: 'Nhân viên', field: 'Dịch vụ khách hàng', location: 'Đà Nẵng', postedTime: '1 tháng trước', status: 'Hết hạn', jobDescription: 'Cung cấp dịch vụ hỗ trợ khách hàng qua các kênh trực tuyến.' },
            { jobTitle: 'Chuyên viên', field: 'Quản lý tài sản', location: 'Hà Nội', postedTime: '2 tuần trước', status: 'Đang tuyển', jobDescription: 'Quản lý và giám sát các tài sản của công ty.' },
            { jobTitle: 'Nhân viên', field: 'Bán hàng', location: 'TP.HCM', postedTime: '3 ngày trước', status: 'Đang tuyển', jobDescription: 'Tìm kiếm và duy trì mối quan hệ với khách hàng bán lẻ.' },
            { jobTitle: 'Lập trình viên', field: 'Ứng dụng di động', location: 'Hà Nội', postedTime: '4 tuần trước', status: 'Đang tuyển', jobDescription: 'Phát triển và tối ưu hóa ứng dụng di động cho công ty.' },
            { jobTitle: 'Nhân viên', field: 'Chăm sóc khách hàng', location: 'Hà Nội', postedTime: '2 tháng trước', status: 'Hết hạn', jobDescription: 'Hỗ trợ khách hàng trong quá trình sử dụng sản phẩm dịch vụ.' },
            { jobTitle: 'Chuyên viên', field: 'Phát triển kinh doanh', location: 'TP.HCM', postedTime: '1 tháng trước', status: 'Đang tuyển', jobDescription: 'Phát triển kế hoạch kinh doanh, tìm kiếm cơ hội phát triển mới.' },
            { jobTitle: 'Nhân viên', field: 'Kỹ thuật', location: 'Đà Nẵng', postedTime: '1 tuần trước', status: 'Đang tuyển', jobDescription: 'Sửa chữa, bảo trì thiết bị kỹ thuật của công ty.' },
            { jobTitle: 'Lập trình viên', field: 'Công nghệ thông tin', location: 'TP.HCM', postedTime: '2 ngày trước', status: 'Đang tuyển', jobDescription: 'Xây dựng và duy trì phần mềm công nghệ thông tin cho công ty.' }
        ];
        
        
        const fakeData = fakeJobs.map((job, index) => ({
            id: index + 1,
            jobTitle: `${job.jobTitle} ${job.field}`, // Kết hợp Công việc + Lĩnh vực
            location: job.location,
            postedTime: job.postedTime,
            status: job.status,
            field: job.field, // Thêm thông tin lĩnh vực nếu cần
            description: job.jobDescription
        }));
        setCareersData(fakeData);
        setFilteredData(fakeData);
    }, []);

    // Lọc dữ liệu khi có sự thay đổi ở các tiêu chí lọc
    useEffect(() => {
        const filtered = careersData.filter(career => {
            const matchesField = selectedFields.length === 0 || selectedFields.includes(career.field);
            const matchesWorkForm = selectedWorkForms.length === 0 || selectedWorkForms.includes(career.type);
            const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(career.location);

            return matchesField && matchesWorkForm && matchesLocation;
        });

        setFilteredData(filtered);
        setCurrentPage(1); // Reset to the first page whenever filters are changed
    }, [selectedFields, selectedWorkForms, selectedLocations, careersData]);

    // Dữ liệu bài tuyển dụng theo trang hiện tại
    const currentData = filteredData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // Tổng số trang
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

    // Xử lý thay đổi trang
    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    // Hàm toggleSelection giữ nguyên lựa chọn của các bộ lọc
    const toggleSelection = (
        item: string,
        selectedList: string[],
        setSelectedList: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        if (selectedList.includes(item)) {
            setSelectedList(selectedList.filter(i => i !== item)); // Bỏ chọn nếu đã có
        } else {
            setSelectedList([...selectedList, item]); // Thêm vào nếu chưa có
        }
    };

    return (

        <div className="flex flex-col items-center py-12 px-4 sm:py-6 sm:px-2">
            <div className="flex justify-center pt-12 sm:pt-6">
                <PageHeader text="TUYỂN DỤNG" />
            </div>
            <div className="flex flex-col sm:flex-row px-4 py-6 space-y-6 sm:space-y-0 sm:space-x-6 sm:px-8 sm:py-8">
                {/* Bộ lọc */}
                <div className="sm:w-1/3 flex flex-col space-y-4 bg-white p-5 rounded-xl">
                <div>
                            <h2 className="text-2xl font-semibold text-blue-800 flex items-center gap-2">
                                <img src={icon.bag} alt="Bag Icon" className="w-6 h-6" />
                                Lĩnh vực
                            </h2>
                            <ul className="flex flex-wrap gap-2 mt-4">
                                {['Công nghệ thông tin', 'Marketing', 'Kinh doanh', 'Thiết kế đồ hoạ', 'Quản lý dự án'].map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => toggleSelection(item, selectedFields, setSelectedFields)}
                                        className={`px-4 py-2 rounded-full shadow-md text-gray-600 cursor-pointer ${
                                            selectedFields.includes(item) ? 'bg-blue-900 text-white' : 'bg-white hover:opacity-70'
                                        }`}
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
                                        onClick={() => toggleSelection(item,  selectedWorkForms, setSelectedWorkForms)}
                                        className={`px-4 py-2 rounded-full shadow-md text-gray-600 cursor-pointer ${
                                            selectedWorkForms.includes(item) ? 'bg-blue-900 text-white' : 'bg-white hover:opacity-70'
                                        }`}
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
                                        onClick={() => toggleSelection(item, selectedLocations, setSelectedLocations)}
                                        className={`px-4 py-2 rounded-full shadow-md text-gray-600 cursor-pointer ${
                                            selectedLocations.includes(item) ? 'bg-blue-900 text-white' : 'bg-white hover:opacity-70'
                                        }`}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                </div>
                {/* Cards */}
                <div className="sm:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentData.map((career) => (
                        <CareerCard
                            key={career.id}
                            combinedTitle={career.jobTitle}
                            location={career.location}
                            postedTime={career.postedTime}
                            status={career.status}
                            description={career.description}
                            isActive={career.isActive}
                        />
                    ))}
                </div>
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-2">
                <button
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-400"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    &lt;
                </button>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-8 h-8 sm:w-10 sm:h-10 text-center font-medium rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    &gt;
                </button>
            </div>
        </div>

    );
};

export default Careers;

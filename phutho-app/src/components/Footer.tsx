import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/icon';

const Footer: React.FC = () => {
    const listCompany = [
        { id: 1, name: 'Công viên Văn hóa Đầm Sen' },
        { id: 2, name: 'Khu du lịch sinh thái Vàm Sát' },
        { id: 3, name: 'Khách sạn Ngọc Lan (Quận 1)' },
        { id: 4, name: 'Khách sạn Phú Thọ (Quận 11)' },
        { id: 5, name: 'Trung tâm Du lịch Đầm Sen' }
    ];

    const companyInfo = {
        address: '15 Đường số 2, Cư xá Lữ Gia, Phường 15, Quận 11, TP. HCM',
        phone: '02838650921',
        email: 'vanphong@damsenpark.vn',
        facebook: 'PhuThoTourist'
    };

    return (
        <footer className="bg-blue-900 text-white text-sm">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Phần Công ty */}
                    <div className="flex flex-col flex-1 mb-4">
                        <div className="flex items-center mb-2">
                            <Link to="/">
                                <img
                                    className="w-32 h-20 md:w-20 md:h-14"
                                    src={icon.logo} 
                                    alt="Phu Tho Tourist"
                                />
                            </Link>
                            <div className="ml-2">
                                <h3 className="text-base font-semibold">
                                    CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ
                                </h3>
                                <h2 className="text-xl font-bold text-blue-300">
                                    PHUTHOTOURIST
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Phần Liên hệ */}
                    <div className="flex-1 mb-4">
                        <h3 className="text-lg font-semibold mb-1">LIÊN HỆ</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <img src={icon.point} alt="address" className="mr-1" />
                                <p>{companyInfo.address}</p>
                            </li>
                            <li className="flex items-start">
                                <img src={icon.phone} alt="phone" className="mr-1" />
                                <p>{companyInfo.phone}</p>
                            </li>
                            <li className="flex items-start">
                                <img src={icon.mail} alt="email" className="mr-1" />
                                <p>{companyInfo.email}</p>
                            </li>
                            <li className="flex items-start">
                                <img src={icon.facebook} alt="facebook" className="mr-1" />
                                <p>{companyInfo.facebook}</p>
                            </li>
                        </ul>
                    </div>

                    {/* Phần Đối tác */}
                    <div className="flex-1 mb-4">
                        <h3 className="text-lg font-semibold mb-1">
                            CÁC ĐƠN VỊ CÙNG HỆ THỐNG PHUTHOTOURIST
                        </h3>
                        <ul className="space-y-2">
                            {listCompany.map((company) => (
                                <li key={company.id} className="list-disc ml-4">
                                    <p>{company.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Phần Bản quyền */}
                <div className="mt-2 text-center text-xs">
                    Copyright ⓒ Công ty Cổ phần Dịch vụ Du lịch Phú Thọ
                </div>
            </div>
        </footer>
    );
};

export default Footer;

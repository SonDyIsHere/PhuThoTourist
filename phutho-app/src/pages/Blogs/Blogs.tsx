import { useState } from 'react';
import { DatePicker, Space } from 'antd';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import icon from '../../assets/icon';
import image from '../../assets/images';
import PostCard from '../../components/PostCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useFetchBlogsPaginatedQuery } from '../../apis/blog';

function Blogs() {
    const [page, setPage] = useState(1);
    const { data, error, isLoading } = useFetchBlogsPaginatedQuery({ page, limit: 5 });

    if (isLoading) return <p>Đang tải...</p>;
    if (error) return <p>Lỗi khi tải bài viết</p>;

    return (
        <div className="pt-12 md:pt-6">
            <div className="flex flex-col">
                <div className="flex items-center justify-center">
                    <PageHeader text="BÀI VIẾT" />
                </div>

                <div className="mt-12 md:mt-8 m-auto">
                    <div className="flex flex-wrap space-x-2">
                        {/* Phần Slider Bài Viết */}
                        <div className="col-span-9 col-xxl-8 col-lg-12">
                            <section className="rounded-lg overflow-hidden min-w-[700px]">
                                <div className="relative w-full pt-[34%] md:pt-[40%]">
                                    <img src={image.post_img_1} alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg" />
                                </div>
                                <div className="flex justify-between items-stretch bg-white p-6 md:p-2 rounded-b-lg">
                                    <div className="max-w-[845px]">
                                        <h2 className="text-[#0054a6] font-philosopher text-4xl font-bold md:max-w-[252px] md:text-lg">Thông báo mời chào giá cạnh tranh cung cấp nước đá chế tác Băng Đăng</h2>
                                        <p className="mt-6 text-lg text-[#4d4d4d]">THÔNG BÁO...</p>
                                    </div>

                                    {/* Các nút điều hướng */}
                                    <div className="flex flex-col justify-between">
                                        <div className="flex items-center justify-end gap-1">
                                            <button>
                                                <img src={icon.prev_prev} alt="" className="md:w-4 md:h-4" />
                                            </button>
                                            <button>
                                                <img src={icon.prev_next} alt="" className="md:w-4 md:h-4" />
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-center gap-3 xl:gap-2 mt-auto">
                                            <div className="w-4 h-4 md:w-2 md:h-2 rounded-full border border-[#0054a6]" />
                                            <div className="w-4 h-4 md:w-2 md:h-2 rounded-full border border-[#0054a6]" />
                                            <div className="w-4 h-4 md:w-2 md:h-2 rounded-full border border-[#0054a6]" />
                                            <div className="w-4 h-4 md:w-2 md:h-2 rounded-full border border-[#0054a6]" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Phần Bài Mới Nhất */}
                        <div className="col-span-3 col-xxl-4 col-lg-12">
                            <section className="bg-white/70 shadow-lg backdrop-blur-md rounded-lg p-6 lg:h-[500px] overflow-scroll">
                                <h2 className="text-2xl font-semibold text-[#0054a6] md:text-lg">Bài mới nhất</h2>
                                <ul className="mt-4">
                                    <li className="flex items-center gap-3 mt-4 bg-white shadow-md rounded-md p-4">
                                        <div className="relative min-w-[104px] pt-[34%] lg:min-w-[204px] lg:pt-[20%] md:min-w-[104px] md:pt-[26%]">
                                            <img src={image.post_img_1} alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-l-md" />
                                        </div>
                                        <div>
                                            <h3 className="text-[#666666] font-semibold text-base">Thông báo đấu giá giữ xe tại CVHH Đầm Sen</h3>
                                            <div className="flex items-center gap-2 mt-2 text-sm text-[#858585]">
                                                <p>10N lượt xem</p>
                                                <span className="bg-[#858585] h-[3px] w-[3px] rounded-full" />
                                                <p>20/02/2022</p>
                                            </div>
                                        </div>
                                    </li>
                                    {/* Lặp lại các mục bài viết khác */}
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Chủ đề bài viết */}
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
                        <div className="col-span-1">
                            <div className="bg-white/70 shadow-lg backdrop-blur-md rounded-lg p-7 xxl:p-5">
                                <h2 className="text-center text-2xl font-semibold text-[#0054a6]">CHỦ ĐỀ BÀI VIẾT</h2>
                                <ul className="mt-5">
                                    <Link to="#">
                                        <li className="flex items-center gap-3 mt-5 p-5 text-2xl bg-white font-medium text-[#6698ca] rounded-lg transition-colors hover:text-[#0054a6] active:bg-[#0054a6] active:text-white">
                                            <img src={icon.light} alt="" className="filter brightness-0 saturate-100 invert hue-rotate-[180deg] brightness-150" />
                                            <p>Giới Thiệu</p>
                                        </li>
                                    </Link>
                                    {/* Lặp lại các mục liên kết khác */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;

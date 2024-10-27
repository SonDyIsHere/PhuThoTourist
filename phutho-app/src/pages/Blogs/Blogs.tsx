import { DatePicker, Space } from 'antd';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import icon from '../../assets/icon'
import image from '../../assets/images';
import PostCard from '../../components/PostCard';
import { Swiper, SwiperSlide } from 'swiper/react';


function Blogs() {
    return (
        <div className="pt-12 md:pt-6">
            <div className="flex flex-col">
                <div className="flex items-center justify-center">
                    <PageHeader text="BÀI VIẾT" />
                </div>

                <div className="mt-12 md:mt-8 m-auto">
                    <div className="flex flex-wrap space-x-2">
                        {/* Blog Slider */}
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

                                    

                                    {/* Actions */}
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

                        {/* New Blog Section */}
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
                                    {/* Repeat other blog items as needed */}
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
                                </ul>
                            </section>

                            
                        </div>
                    </div>
                </div>
                {/* Blog Topic */}
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
                        {/* Blog Topic (Left Sidebar) */}
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
                                <Link to="#">
                                    <li className="flex items-center gap-3 mt-5 p-5 text-2xl bg-white font-medium text-sky-500 rounded-lg transition-colors hover:text-[#0054a6] active:bg-[#0054a6] active:text-white">
                                        <img src={icon.news} alt="" className="filter brightness-0 saturate-100 invert hue-rotate-[180deg] brightness-150" />
                                        <p>Tin tức</p>
                                    </li>
                                </Link>
                                <Link to="#">
                                    <li className="flex items-center gap-3 mt-5 p-5 text-2xl bg-white font-medium text-sky-500 rounded-lg transition-colors hover:text-[#0054a6] active:bg-[#0054a6] active:text-white">
                                        <img src={icon.event} alt="" className="filter brightness-0 saturate-100 invert hue-rotate-[180deg] brightness-150" />
                                        <p>Sự kiện</p>
                                    </li>
                                </Link>
                                <Link to="#">
                                    <li className="flex items-center gap-3 mt-5 p-5 text-2xl bg-white font-medium text-sky-500 rounded-lg transition-colors hover:text-[#0054a6] active:bg-[#0054a6] active:text-white">
                                        <img src={icon.notification} alt="" className="filter brightness-0 saturate-100 invert hue-rotate-[180deg] brightness-150" />
                                        <p>Thông báo</p>
                                    </li>
                                </Link>
                                <Link to="#">
                                    <li className="flex items-center gap-3 mt-5 p-5 text-2xl bg-white font-medium text-sky-500 rounded-lg transition-colors hover:text-[#0054a6] active:bg-[#0054a6] active:text-white">
                                        <img src={icon.file} alt="" className="filter brightness-0 saturate-100 invert hue-rotate-[180deg] brightness-150" />
                                        <p>Tin cổ đông</p>
                                    </li>
                                </Link>
                                <Link to="#">
                                    <li className="flex items-center gap-3 mt-5 p-5 text-2xl bg-white font-medium text-sky-500 rounded-lg transition-colors hover:text-[#0054a6] active:bg-[#0054a6] active:text-white">
                                        <img src={icon.group} alt="" className="filter brightness-0 saturate-100 invert hue-rotate-[180deg] brightness-150" />
                                        <p>Hoạt động đoàn thể</p>
                                    </li>
                                </Link>

                            </ul>
                        </div>
                        </div>

                        {/* Right Content */}
                        <div className="col-span-3 space-y-8">
                        {/* Blog Filter */}
                        <div className="max-w-full flex items-center bg-white/70 shadow-md backdrop-blur-md rounded-lg p-5 gap-2 md:justify-between">
                            <div className="flex items-center bg-white rounded-md p-2 border border-gray-300 max-w-[314px] sm:max-w-[215px]">
                            <img src={icon.search} alt="" className="mr-2" />
                            <input type="text" className="text-lg text-gray-400" placeholder="Tìm kiếm" />
                            </div>
                            <div className="flex items-center gap-2 ml-auto">
                            <Space direction="vertical">
                                <DatePicker className="h-10" />
                            </Space>
                            <img src={icon.arrow_right} alt="" />
                            <Space direction="vertical">
                                <DatePicker className="h-10" />
                            </Space>
                            </div>
                            <div className="flex items-center gap-2 ml-4 lg:ml-auto">
                                <img src={icon.sort} alt="" className="w-8 h-8 border border-gray-300 rounded-md" />
                                Từ A đến Z
                            </div>
                        </div>

                        {/* Blog List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <PostCard mini host="Admin" title="Thông báo đấu giá giữ xe tại CVHH Đầm Sen" tags={[{ name: 'Sự kiện' }, { name: 'Thông báo' }]} view="10N" postDate="20/02/2022" image={image.blog_img_3} />
                            <PostCard mini host="Admin" title="Thông báo đấu giá giữ xe tại CVHH Đầm Sen" tags={[{ name: 'Sự kiện' }, { name: 'Thông báo' }]} view="10N" postDate="20/02/2022" image={image.blog_img_3} />
                            <PostCard mini host="Admin" title="Thông báo đấu giá giữ xe tại CVHH Đầm Sen" tags={[{ name: 'Sự kiện' }, { name: 'Thông báo' }]} view="10N" postDate="20/02/2022" image={image.blog_img_3} />
                            <PostCard mini host="Admin" title="Thông báo đấu giá giữ xe tại CVHH Đầm Sen" tags={[{ name: 'Sự kiện' }, { name: 'Thông báo' }]} view="10N" postDate="20/02/2022" image={image.blog_img_3} />
                            <PostCard mini host="Admin" title="Thông báo đấu giá giữ xe tại CVHH Đầm Sen" tags={[{ name: 'Sự kiện' }, { name: 'Thông báo' }]} view="10N" postDate="20/02/2022" image={image.blog_img_3} />
                            <PostCard mini host="Admin" title="Thông báo đấu giá giữ xe tại CVHH Đầm Sen" tags={[{ name: 'Sự kiện' }, { name: 'Thông báo' }]} view="10N" postDate="20/02/2022" image={image.blog_img_3} />
                            <PostCard mini host="Admin" title="Thông báo đấu giá giữ xe tại CVHH Đầm Sen" tags={[{ name: 'Sự kiện' }, { name: 'Thông báo' }]} view="10N" postDate="20/02/2022" image={image.blog_img_3} />
                            {/* Repeat other PostCards as needed */}
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-center mt-10">
                            <div className="flex items-center justify-center bg-white/70 backdrop-blur-md rounded-full p-2 max-w-[290px] gap-2">
                            <button className="w-8 h-8 flex items-center justify-center">
                                <img src={icon.paginate_prev_disable} alt="" />
                            </button>
                            <button className="w-8 h-8 text-lg font-medium text-gray-700 rounded-md hover:opacity-80 active:bg-[#0054a6] active:text-white">1</button>
                            <button className="w-8 h-8 text-lg font-medium text-gray-700 rounded-md hover:opacity-80">2</button>
                            {/* Repeat other pages as needed */}
                            <button className="w-8 h-8 flex items-center justify-center">
                                <img src={icon.paginate_next} alt="" />
                                
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

            </div>
        </div>
    );
}

export default Blogs;

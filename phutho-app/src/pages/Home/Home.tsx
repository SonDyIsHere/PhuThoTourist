import image from '../../assets/images/index';
import Button from '../../components/Button';
import PostCard from '../../components/PostCard';

function Home() {
    return (
        <div className="home">
            {/* intro */}
        <section className="flex flex-col items-center py-20 md:py-12 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
            {/* info */}
            <div className="text-center mb-6">
                <h2 className="text-lg font-semibold text-white">CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ</h2>
                <h1 className="text-4xl font-bold text-white">PHUTHOTOURIST</h1>
                <p className="text-sm text-gray-300">Ngày thành lập 01/01/2019</p>
            </div>

            {/* banner */}
            <div className="flex justify-center items-center max-w-6xl mx-auto">
                <div className="relative w-48 h-0 pb-[30%] md:w-56 md:pb-[60%] z-10 mx-2">
                    <img src={image.banner_img_1} alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-md" />
                </div>
                <div className="relative w-56 h-0 pb-[40%] z-20 mx-2 -translate-y-2">
                    <img src={image.banner_img_2} alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-md" />
                </div>
                <div className="relative w-64 h-0 pb-[46%] z-30 mx-2 -translate-y-4">
                    <img src={image.banner_img_3} alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-lg" />
                </div>
                <div className="relative w-56 h-0 pb-[40%] z-20 mx-2 -translate-y-2">
                    <img src={image.banner_img_4} alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-md" />
                </div>
                <div className="relative w-48 h-0 pb-[30%] md:w-56 md:pb-[60%] z-10 mx-2">
                    <img src={image.banner_img_5} alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-md" />
                </div>
            </div>



        </section>

            <div className="container mx-auto">
                {/* home-content */}
                <div className="py-8 max-w-[1200px] m-auto">
                    <article className="bg-white shadow-md rounded-t-2xl p-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                            <div>
                                <div>
                                    <p className="text-xl font-bold">VỀ CHÚNG TÔI</p>
                                    <h2 className="text-2xl font-bold mb-4 text-sky-700">Chúng tôi cung cấp dịch vụ du lịch đáp ứng mọi nhu cầu của bạn!</h2>
                                    <div className="border-b border-gray-300 mb-4"></div>
                                    <p className="text-gray-700">
                                        Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist), là một đơn vị thành viên của Saigontourist. Phuthotourist được biết đến với các sản phẩm du lịch nổi tiếng tại TP.HCM (Quận 11) như:
                                        <ul className="list-disc pl-10 border-l-2 border-sky-700">
                                            <li>Công viên Văn hóa Đầm Sen</li>
                                            <li>Khu du lịch sinh thái Vàm Sát</li>
                                            <li>Khách sạn Ngọc Lan</li>
                                            <li>Khách sạn Phú Thọ</li>
                                            <li>Trung tâm chăm sóc sức khỏe & giải trí Đầm Sen (Damsen Plaza)</li>
                                            <li>Nhà hàng Thủy Tạ Đầm Sen</li>
                                            <li>Cà phê Vườn Đá</li>
                                            <li>Trung tâm Dịch vụ Du lịch Đầm Sen (Damsen Travel)</li>
                                            <li>Liên kết với Công viên nước Đầm Sen (Đầm Sen Water Park).</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="relative h-auto ">
                                    <div className=" mb-4">
                                        <img className="w-[450px] h-auto rounded-2xl border-4" src={image.blog_img_2} alt="about-media" />
                                    </div>
                                    <div className="rounded absolute bottom-0 right-0 transform translate-y-56">
                                        <img className="w-[450px] h-auto rounded-2xl border-4" src={image.blog_img_1} alt="about-media" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <Button className="mt-4 bg-sky-700" to="#" text="Xem chi tiết" maxWidth="153px" />
                    </article>

                    <section className="bg-sky-300 p-10">
                        <div className="text-center mb-6">
                            <p className="text-lg uppercase pt-10 font-semibold text-white">CHIA SẺ THÔNG TIN</p>
                            <h2 className="text-2xl font-bold text-sky-700">Bài viết mới</h2>
                            <div className="border-b-4 border-sky-700 mb-4 w-24 rounded-xl m-auto"></div>
                            <p className="text-white">Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về những sản phẩm du lịch</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-24 m-10">
                            <div>
                                <PostCard
                                    id="1" // Unique identifier
                                    host="Admin"
                                    title="Thông báo kết quả lựa chọn nhà thầu 2 màn hình Led P4 Outdoor Fullcolor"
                                    desc="Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các nhà thầu tham gia chào hàng cạnh tranh Gói thầu: Cung cấp, lắp đặt 02 màn..."
                                    tags={['Sự kiện', 'Thông báo', 'Tin tức']} // Changed to string array
                                    view="10N"
                                    postDate="20/02/2022"
                                    image={image.post_img_1}
                                />
                            </div>
                            <div>
                                <PostCard
                                    id="2"
                                    host="Admin"
                                    title="Thông báo kết quả lựa chọn nhà cung cấp nước đá chế tác Băng Đăng"
                                    desc="Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các đơn vị tham gia chào giá cạnh tranh Hạng mục Cung cấp nước đá để chế tạo..."
                                    tags={['Sự kiện', 'Thông báo', 'Tin tức']}
                                    view="10N"
                                    postDate="20/02/2022"
                                    image={image.post_img_2}
                                />
                            </div>
                            <div>
                                <PostCard
                                    id="3"
                                    host="Admin"
                                    title="Thông báo mời chào hàng cạnh tranh 2 màn hình Led P4 Outdoor Fullcolor"
                                    desc="CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ thông báo mời chào hàng cạnh tranh lựa chọn đơn vị Cung cấp, lắp đặt 02 màn hình Led P4"
                                    tags={['Sự kiện', 'Thông báo', 'Tin tức']}
                                    view="10N"
                                    postDate="20/02/2022"
                                    image={image.post_img_1}
                                />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <Button className="relative items-center" text="Xem thêm bài viết" to="#" maxWidth="202px" />
                        </div>
                    </section>


                    <section className="bg-white rounded-b-2xl">
                        <div className="text-center py-6">
                            <p className="text-xl font-semibold">LĨNH VỰC HOẠT ĐỘNG</p>
                            <h2 className="text-3xl font-semibold text-sky-700 m-2">Các dịch vụ trọng tâm</h2>
                            <div className="border-b-4 border-sky-700 mb-4 w-48 rounded-xl m-auto"></div>
                            <p className="text-gray-700">3 dịch vụ trọng tâm của Phuthotourist là vui chơi giải trí, nhà hàng – khách sạn, và dịch vụ lữ hành</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <article className="bg-white shadow-md ml-10 rounded-2xl my-5">
                                    <div className="overflow-hidden rounded-t-2xl">
                                        <img src={image.service_img_1} alt="" className="w-full h-auto " />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-center text-sky-700">Vui chơi giải trí</h3>
                                        <p className="text-gray-600 mb-5">Với 2 khu giải trí nổi tiếng TP.HCM là Công viên văn hóa Đầm Sen, và khu du lịch sinh thái Vàm Sát (H.Cần Giờ)...</p>
                                    </div>
                                </article>
                            </div>
                            <div>
                                <article className="bg-white shadow-md rounded-2xl my-5">
                                    <div className="overflow-hidden rounded-t-2xl">
                                        <img src={image.service_img_2} alt="" className="w-full h-auto" />
                                    </div>
                                    <div className="p-4 ">
                                        <h3 className="text-lg font-semibold text-center text-sky-700">Nhà hàng – Khách sạn</h3>
                                        <p className="text-gray-600 mb-5">Với hệ thống khách sạn Phú Thọ và Ngọc Lan đạt chuẩn 3 sao, chuyên tiếp đón các đoàn thể thao....</p>
                                    </div>
                                </article>
                            </div>
                            <div>
                                <article className="bg-white shadow-md rounded-2xl my-5">
                                    <div className="overflow-hidden rounded-t-2xl">
                                        <img src={image.service_img_3} alt="" className="w-full h-auto" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-center text-sky-700">Dịch vụ lữ hành</h3>
                                        <p className="text-gray-600 mb-5">Đội ngũ nhân viên của Phuthotourist với kinh nghiệm dày dạn sẽ đưa ra các sản phẩm tour du lịch phong phú....</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Home;

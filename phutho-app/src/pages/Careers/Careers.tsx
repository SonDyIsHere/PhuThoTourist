import PageHeader from '../../components/PageHeader';
import icon from '../../assets/icon/';
import CareerCard from '../../components/CareerCard';

function Careers() {
    return (
        <div className="py-12">
            <div className="container mx-auto">
                <div className="flex justify-center pt-12 md:pt-6">
                    <PageHeader text="TUYỂN DỤNG" />
                </div>

                <div className="mt-12 mb-24 md:mt-10 md:mb-12 flex">
                    <div className="row gy-2 flex space-x-5">
                        <div className="col-3 col-lg-12">
                            <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg backdrop-blur-sm md:flex md:items-center md:p-4">
                                <div className="flex items-center gap-2 p-4 w-full bg-white rounded-md">
                                    <img src={icon.search} alt="" />
                                    <input
                                        type="text"
                                        className="text-gray-400 text-lg flex-grow"
                                        placeholder="Tìm kiếm"
                                    />
                                    <img
                                        src={icon.time}
                                        alt=""
                                        className="hidden"
                                    />
                                </div>

                                <div className="hidden lg:flex lg:items-center mt-6 border-t-2 border-white w-full lg:mt-0"></div>

                                <div className="lg:items-center">
                                    {/* Category Section */}
                                    <div className="mt-6">
                                        <div className="flex items-center gap-2">
                                            <img src={icon.bag} alt="" />
                                            <h2 className="text-2xl font-semibold text-blue-800">Lĩnh vực</h2>
                                        </div>
                                        <ul className="flex flex-wrap gap-2 mt-4">
                                            <li className="px-4 py-2 bg-white rounded-full shadow-md text-sm text-gray-500 hover:opacity-70 cursor-pointer font-medium">Hướng dẫn viên</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="hidden d-lg:flex">
                                    <img src={icon.filter} alt="" className="ml-2" />
                                </div>
                            </div>
                        </div>

                        <div className="col-9 col-lg-12">
                            <div className="grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-4">
                                <div className="col">
                                    <CareerCard active={true} />
                                </div>
                                <div className="col">
                                    <CareerCard />
                                </div>
                                {/* Repeat for other cards */}
                            </div>

                            <div className="flex justify-center mt-10">
                                <div className="flex items-center bg-white bg-opacity-70 rounded-full backdrop-blur-sm p-2 gap-2">
                                    <button className="p-2">
                                        <img src={icon.paginate_prev_disable} alt="" />
                                    </button>
                                    <button className="p-2 bg-blue-800 text-white rounded">1</button>
                                    <button className="p-2">2</button>
                                    {/* Other pagination items */}
                                    <button className="p-2">
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

export default Careers;

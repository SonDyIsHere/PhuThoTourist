import icon from '../../assets/icon';
import Button from '../Button';

interface CareerCardProps {
    mini?: boolean;
    active?: boolean;
}

function CareerCard({ mini = false, active = false }: CareerCardProps) {
    return (
        <article className={`p-5 rounded-xl bg-white shadow-[0_3.786px_18.93px_rgba(0,0,0,0.15)] ${mini ? 'py-3.5 px-4' : ''}`}>
            <div className="flex items-center gap-3 md:gap-2">
                <img
                    src={icon.damsen_logo}
                    alt=''
                    className="w-9 h-9 filter drop-shadow-[2px_2px_15px_rgba(0,0,0,0.15)]"
                />

                <div>
                    <p className="text-xl font-bold text-[#003f7d] md:text-[1.2rem]">
                        Nhân viên thiết kế đồ hoạ
                    </p>
                    <p className="mt-1 text-lg font-normal leading-[1.42] text-[#3376b8]">
                        Nhân viên chính thức
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between mt-3.5 md:ml-0 ml-12">
                <div>
                    <div className="flex items-center gap-1 mb-2">
                        <img
                            src={icon.location_grey}
                            alt=''
                            className="w-4 h-4 md:w-3 md:h-3"
                        />
                        <p className="text-[1.4rem] text-[#666] md:text-[1rem]">
                            CVVH Đầm Sen
                        </p>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                        <img
                            src={icon.clock_grey}
                            alt=''
                            className="w-4 h-4 md:w-3 md:h-3"
                        />
                        <p className="text-[1.2rem] text-[#666] md:text-[1rem]">
                            2 tuần trước
                        </p>
                    </div>
                </div>

                <div className={`flex items-center justify-center px-3 py-2 rounded-full text-[1rem] font-semibold ${active ? 'bg-[#e6f7e6] text-[#03a600]' : 'bg-[#f7e6e6] text-[#ff3939]'}`}>
                    {active ? 'Đang tuyển' : 'Hết hạn'}
                </div>
            </div>

            <div className="mt-2">
                <p className="font-semibold text-[#0054a6] md:text-[1.2rem]">
                    Mô tả công việc:
                </p>
                <p className="mt-2 text-lg font-normal leading-[1.3] text-[#666]">
                    Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lich, QT kinh doanh, Marketing. Am hiểu tâm lý ...
                </p>
            </div>

            <Button className="mt-4 w-full" text='Xem chi tiết'></Button>
        </article>
    );
}

export default CareerCard;

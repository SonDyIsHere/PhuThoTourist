import icon from '../../assets/icon';
import Button from '../Button';

interface CareerCardProps {
    combinedTitle: string; // Tiêu đề kết hợp (Công việc + Lĩnh vực)
    location: string;
    postedTime: string;
    status: string;
    description: string;
    isActive: boolean;
}

function CareerCard({ combinedTitle, location, postedTime, status, description, isActive }: CareerCardProps) {
    return (
        <article className="p-5 rounded-xl bg-white shadow-[0_3.786px_18.93px_rgba(0,0,0,0.15)]">
            <div className="flex items-center gap-3 md:gap-2">
                <img
                    src={icon.damsen_logo}
                    alt=""
                    className="w-9 h-9 filter drop-shadow-[2px_2px_15px_rgba(0,0,0,0.15)]"
                />
                <div>
                    <p className="text-xl font-bold text-[#003f7d] md:text-[1.2rem]">{combinedTitle}</p> {/* Công việc + Lĩnh vực */}
                </div>
            </div>

            <div className="flex items-center justify-between mt-3.5 md:ml-0 ml-12">
                <div>
                    <div className="flex items-center gap-1 mb-2">
                        <img
                            src={icon.location_grey}
                            alt=""
                            className="w-4 h-4 md:w-3 md:h-3"
                        />
                        <p className="text-[1.4rem] text-[#666] md:text-[1rem]">{location}</p>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                        <img
                            src={icon.clock_grey}
                            alt=""
                            className="w-4 h-4 md:w-3 md:h-3"
                        />
                        <p className="text-[1.2rem] text-[#666] md:text-[1rem]">{postedTime}</p>
                    </div>
                </div>

                <div className={`flex items-center justify-center px-3 py-2 rounded-full text-[1rem] font-semibold ${isActive ? 'bg-[#e6f7e6] text-[#03a600]' : 'bg-[#f7e6e6] text-[#ff3939]'}`}>
                    {status}
                </div>
            </div>

            <div className="mt-2">
                <p className="font-semibold text-[#0054a6] md:text-[1.2rem]">Mô tả công việc:</p>
                <p className="mt-2 text-lg font-normal leading-[1.3] text-[#666]">{description}</p>
            </div>

            <Button className="mt-4 w-full" text="Xem chi tiết" />
        </article>
    );
}

export default CareerCard;



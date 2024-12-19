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
    <div className="flex items-center gap-3 sm:gap-2">
        <img
            src={icon.damsen_logo}
            alt=""
            className="w-12 h-12 sm:w-9 sm:h-9 filter drop-shadow-[2px_2px_15px_rgba(0,0,0,0.15)]"
        />
        <div>
            <p className="text-lg sm:text-[1rem] font-bold text-[#003f7d]">{combinedTitle}</p>
        </div>
    </div>

    <div className="flex items-start justify-between mt-3.5 sm:flex-col sm:items-start sm:gap-2">
        <div>
            <div className="flex items-center gap-1 mb-2">
                <img
                    src={icon.location_grey}
                    alt=""
                    className="w-4 h-4 sm:w-3 sm:h-3"
                />
                <p className="text-base sm:text-sm text-[#666]">{location}</p>
            </div>
            <div className="flex items-center gap-1 mb-2">
                <img
                    src={icon.clock_grey}
                    alt=""
                    className="w-4 h-4 sm:w-3 sm:h-3"
                />
                <p className="text-base sm:text-sm text-[#666]">{postedTime}</p>
            </div>
        </div>

        <div className={`flex items-center justify-center px-3 py-2 rounded-full text-sm font-semibold ${isActive ? 'bg-[#e6f7e6] text-[#03a600]' : 'bg-[#f7e6e6] text-[#ff3939]'}`}>
            {status}
        </div>
    </div>

    <div className="mt-4">
        <p className="font-semibold text-[#0054a6] text-base sm:text-sm">Mô tả công việc:</p>
        <p className="mt-2 text-sm sm:text-xs leading-[1.5] text-[#666]">{description}</p>
    </div>

    <Button className="mt-4 w-full sm:w-auto" text="Xem chi tiết" />
</article>

    );
}

export default CareerCard;



import { Link } from 'react-router-dom';

interface PostCardProps {
    id: string; // Thêm id nếu cần
    host: string;
    title: string;
    desc?: string;
    tags: string[];
    view: string;
    postDate: string;
    image: string;
    mini?: boolean;
}

function PostCard({
    host,
    title,
    desc,
    tags,
    view,
    postDate,
    image,
    mini = false,
}: PostCardProps) {
    return (
        <article
            className={`bg-white rounded-lg shadow-md overflow-hidden ${
                mini ? 'max-w-xs' : 'max-w-md'
            } transition-transform duration-300`}
        >
            <Link to="#">
                <div className={`relative ${mini ? 'h-32' : 'h-48'} group`}>
                    <img
                        src={image}
                        alt={title}
                        className={`w-full h-full object-cover transition-transform duration-300 ${
                            mini ? 'rounded-t-lg' : 'rounded-lg'
                        } group-hover:scale-105`}
                    />
                    {/* Overlay */}
                    <div
                        className={`absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                            mini ? 'rounded-t-lg' : 'rounded-lg'
                        }`}
                    >
                        <span className="text-white font-semibold text-lg">
                            Click để xem
                        </span>
                    </div>
                </div>
            </Link>
            <div className={`p-4 ${mini ? 'text-sm' : 'text-base'}`}>
                <div className="flex items-center mb-2">
                    <p
                        className={`font-semibold ${
                            mini ? 'text-xs' : 'text-sm'
                        }`}
                    >
                        {host}
                    </p>
                    <div
                        className={`h-2 w-2 bg-green-400 ml-2 rounded-full ${
                            mini ? 'hidden' : 'block'
                        }`}
                    ></div>
                </div>

                <Link to="#">
                    <h3
                        className={`text-sky-700 font-bold mb-2 ${
                            mini ? 'text-lg' : 'text-xl'
                        } hover:underline`}
                    >
                        {title}
                    </h3>
                </Link>

                {desc && (
                    <p className={`mb-2 ${mini ? 'text-xs' : 'text-sm'}`}>
                        {desc}
                    </p>
                )}

                {/* Tags */}
                <div
                    className={`flex flex-wrap mb-2 ${
                        mini ? 'text-xs' : 'text-sm'
                    }`}
                >
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className={`bg-blue-100 text-blue-800 py-1 px-2 rounded mr-1 mb-1 ${
                                mini ? 'text-xs' : 'text-sm'
                            }`}
                        >
                            {tag}
                        </div>
                    ))}
                </div>

                <div
                    className={`flex items-center text-gray-600 ${
                        mini ? 'text-xs' : 'text-sm'
                    }`}
                >
                    <p className="mr-2">{view} lượt xem</p>
                    <div className="h-2 w-2 bg-gray-400 rounded-full mx-2"></div>
                    <p>{postDate}</p>
                </div>
            </div>
        </article>
    );
}

export default PostCard;

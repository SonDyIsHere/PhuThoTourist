import React from 'react';

interface PageHeaderProps {
    text: string;
}

function PageHeader({ text }: PageHeaderProps) {
    return (
        <h1 className="relative flex items-center justify-center w-[382px] h-[98px] bg-white/20"
            style={{ clipPath: 'polygon(12% 0, 88% 0, 100% 50%, 88% 100%, 12% 100%, 0% 50%)' }}
        >
            <span className="flex items-center justify-center w-[378px] h-[94px] bg-white/70 shadow-[inset_5px_5px_16px_0_rgba(255,255,255,0.25)]"
                style={{ clipPath: 'polygon(12% 0, 88% 0, 100% 50%, 88% 100%, 12% 100%, 0% 50%)' }}
            >
                <span className="text-sky-700 text-center font-philosopher text-4xl font-bold md:w-[250px] md:h-[60px] md:text-2.6xl">
                    {text}
                </span>
            </span>
        </h1>
    );
}

export default PageHeader;

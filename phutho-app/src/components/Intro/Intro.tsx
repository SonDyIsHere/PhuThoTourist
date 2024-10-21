import React from 'react';
import bgImage from '../../assets/images/bg.png'; // Adjust the path as necessary

interface IntroProps {
    children: React.ReactElement;
}

function Intro({ children }: IntroProps) {
    return (
        <div className="relative overflow-hidden">
            <img 
                src={bgImage} 
                alt="Background" 
                className="fixed top-0 left-0 w-full h-[960px] object-cover -z-10" 
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
}

export default Intro;

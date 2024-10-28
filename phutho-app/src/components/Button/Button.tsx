import { Link } from 'react-router-dom';

interface ButtonProps {
    text: string;
    className?: string;
    to?: string;
    maxWidth?: string;
}

function Button({ text, to, className, maxWidth }: ButtonProps) {
    const Comp: any = to ? Link : 'button';

    return (
        <Comp
            className={`bg-blue-900 text-white font-bold py-2 px-4 rounded ${className}`}
            to={to}
            style={{ maxWidth }}
        >
            {text}
        </Comp>
    );
}

export default Button;

import React, {ButtonHTMLAttributes} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    value:string;
}

const Button:React.FC<ButtonProps> = ({value}) => {
    return(
        <div>
            <button>{value}</button>
        </div>
    );
}

export default Button;
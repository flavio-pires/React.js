import React, {InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string;
    name: string;
}

const Input:React.FC<InputProps> = ({label, name, ...rest}) => {
    return(
        <div>
            <label htmlFor={name}>{label}</label> <br/>
            <input type="text" id={name}{...rest}/>
        </div>
    );
}

export default Input;
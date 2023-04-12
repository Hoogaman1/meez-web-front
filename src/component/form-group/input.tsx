/* eslint-disable no-unused-vars */
// Assets
import { ChangeEvent } from 'react';
import { InputField } from './input.style';

// Types
interface ComponentTypes {
    handler: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    name: string;
    label?: string;
    placeHolder?: string;
}

const Input = ({ handler, value, placeHolder, label, name }: ComponentTypes) => {
    return (
        <InputField>
            {label && <label htmlFor={name}>{label}</label>}
            <input type='text' id={name} name={name} placeholder={placeHolder} onChange={e => handler(e)} value={value} />
        </InputField>
    );
};

export default Input;

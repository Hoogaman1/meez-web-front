import PulseLoader from 'react-spinners/PulseLoader';

// Assets
import { ButtonField } from './button.style';

// Types
interface ComponentTypes {
    color?: 'primary' | 'secondary';
    text: string | number | null;
    extraClass?: string;
    handler?: Function;
    loading?: boolean;
}

const ButtonComponent = ({ color = 'primary', text, extraClass, handler, loading = false }: ComponentTypes) => {
    return (
        <ButtonField color={color} className={extraClass} onClick={handler && (() => handler())}>
            {loading ? <PulseLoader color='#FFFFFF' loading={loading} size={10} /> : text}
        </ButtonField>
    );
};

export default ButtonComponent;

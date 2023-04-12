// Assets
import { ButtonField } from './button.style';

// Types
interface ComponentTypes {
    color?: 'primary' | 'secondary';
    text: string | number | null;
    extraClass?: string;
}

const ButtonComponent = ({ color = 'primary', text, extraClass }: ComponentTypes) => {
    return (
        <ButtonField color={color} className={extraClass}>
            {text}
        </ButtonField>
    );
};

export default ButtonComponent;

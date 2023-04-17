/* eslint-disable no-unused-vars */
// Assets
import { MainField } from './search-modal.style';

// Component
import SearchForm from '@/component/template/search-form';

// MUI
import Dialog from '@mui/material/Dialog';

// Types
interface ComponentTypes {
    status: boolean;
    handler: (status: boolean) => void;
}

const SearchModal = ({ status, handler }: ComponentTypes) => {
    return (
        <MainField>
            <Dialog open={status} keepMounted onClose={() => handler(false)} fullWidth={true} scroll='body' maxWidth='lg' disablePortal>
                <div className='modal_field'>
                    <h3>میزخود را برای هر مناسبتی پیدا کنید !</h3>
                    <SearchForm />
                </div>
            </Dialog>
        </MainField>
    );
};

export default SearchModal;

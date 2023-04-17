import { useTranslation } from 'next-i18next';

// Assets
import { MainField } from './search-header.style';

// Component
import SearchForm from './search-form';

// Types
interface ComponentTypes {
    background?: string;
    smallText?: string;
}

const SearchHeader = ({ background, smallText }: ComponentTypes) => {
    const { t } = useTranslation('seach-header');

    return (
        <MainField background={background} heightSize={smallText ? 'logn' : 'short'}>
            {smallText && (
                <small>
                    {smallText} {t('Restaurants')}
                </small>
            )}
            <h3>{smallText ? t('Find your table for any occasion') : t('Make a free reservation')}</h3>
            <SearchForm />
        </MainField>
    );
};

export default SearchHeader;

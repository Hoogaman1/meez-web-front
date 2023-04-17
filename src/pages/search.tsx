import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Assets
import { SearchPageField } from '@/assets/styles/main';

// Components
import LayoutProvider from '@/component/layout/provider';
import SearchAside from '@/component/pages/search/aside';
import SearchCards from '@/component/pages/search/cards';

const Index = () => {
    return (
        <LayoutProvider>
            <SearchPageField className='container'>
                <SearchAside />
                <SearchCards />
            </SearchPageField>
        </LayoutProvider>
    );
};

export default Index;

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}

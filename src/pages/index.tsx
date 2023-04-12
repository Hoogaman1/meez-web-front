// Components
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LayoutProvider from '@/component/layout/provider';
import SearchHeader from '@/component/template/search-header';

const Index = () => {
    return (
        <LayoutProvider>
            <main>
                <SearchHeader />
            </main>
        </LayoutProvider>
    );
};

export default Index;

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['navbar', 'footer', 'seach-header']))
        }
    };
}

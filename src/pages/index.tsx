import { useTranslation } from 'next-i18next';

// Components
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LayoutProvider from '@/component/layout/provider';
import SearchHeader from '@/component/template/search-header';
import CardSLider from '@/component/template/card-slider';
import Banner from '@/component/pages/index/banner';
import Explore from '@/component/pages/index/explore';

const Index = () => {
    const { t } = useTranslation('common');

    return (
        <LayoutProvider>
            <main>
                <SearchHeader />
                <CardSLider heading={t('Suggested hotels')} />
                <CardSLider heading={t('Top hotels')} />
                <CardSLider heading={t('The newest hotels')} />
                <Explore />
                <Banner />
            </main>
        </LayoutProvider>
    );
};

export default Index;

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['navbar', 'footer', 'seach-header', 'common']))
        }
    };
}

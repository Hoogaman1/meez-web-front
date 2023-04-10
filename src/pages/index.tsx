// Components
import Navbar from '@/component/layout/navbar';
import Footer from '@/component/layout/footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

const Index = () => {
    return (
        <div>
            <Navbar />
            <Link href='/fa' locale='fa'>
                asd
            </Link>
            <br />
            <Link href='/en' locale='en'>
                123
            </Link>
            <Footer />
        </div>
    );
};

export default Index;

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['navbar']))
        }
    };
}

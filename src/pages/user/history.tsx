import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Component
import ProfileLayout from '@/component/layout/profile-layout.provider';
import LayoutProvider from '@/component/layout/provider';
import UserHistory from '@/component/pages/user/history';

const UserFavorits = () => {
    return (
        <LayoutProvider>
            <ProfileLayout>
                <UserHistory />
            </ProfileLayout>
        </LayoutProvider>
    );
};

export default UserFavorits;

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}

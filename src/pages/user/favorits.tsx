import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Component
import ProfileLayout from '@/component/layout/profile-layout.provider';
import LayoutProvider from '@/component/layout/provider';
import UserFavoritsList from '@/component/pages/user/favorits';

const UserFavorits = () => {
    return (
        <LayoutProvider>
            <ProfileLayout>
                <UserFavoritsList />
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

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Component
import ProfileLayout from '@/component/layout/profile-layout.provider';
import LayoutProvider from '@/component/layout/provider';
import Notification from '@/component/pages/user/notification';

const NotificationComponent = () => {
    return (
        <LayoutProvider>
            <ProfileLayout>
                <Notification />
            </ProfileLayout>
        </LayoutProvider>
    );
};

export default NotificationComponent;

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}

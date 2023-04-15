import Link from 'next/link';

// Assets
import { AsideField } from './profile-aside.style';
import { useRouter } from 'next/router';

const ProfileAside = () => {
    const router = useRouter();

    return (
        <AsideField>
            <ul>
                <li>
                    <Link href='/dining-dashboard' className={`${router.pathname.includes('dining-dashboard') ? 'active' : ''}`}>
                        رزرو های نزدیک
                    </Link>
                </li>
                <li>
                    <Link href='/user/favorits' className={`${router.pathname.includes('favorits') ? 'active' : ''}`}>
                        لیست علاقه مندی
                    </Link>
                </li>
                <li>
                    <Link href='/user/details' className={`${router.pathname.includes('details') ? 'active' : ''}`}>
                        حساب کاربری
                    </Link>
                </li>
            </ul>
        </AsideField>
    );
};

export default ProfileAside;

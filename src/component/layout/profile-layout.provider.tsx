import { FC, ReactNode } from 'react';

// Assets
import { MainField } from './profile-layout.style';

// Component
import ProfileAside from './profile-aside';

interface componentTypes {
    children: ReactNode;
}

const ProfileLayout: FC<componentTypes> = ({ children }) => {
    return (
        <MainField>
            <div className='container'>
                <ProfileAside />
                <main className='profile_content'>{children}</main>
            </div>
        </MainField>
    );
};

export default ProfileLayout;

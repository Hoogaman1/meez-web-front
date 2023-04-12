import { FC, ReactNode } from 'react';

// Component
import Navbar from '@/component/layout/navbar/navbar';
import Footer from '@/component/layout/footer';

interface componentTypes {
    children: ReactNode;
}

const LayoutProvider: FC<componentTypes> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default LayoutProvider;

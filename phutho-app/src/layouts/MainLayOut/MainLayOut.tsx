import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Intro from '../../components/Intro';

interface MainLayoutProps {
    children: React.ReactElement;
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <main>
            <Header />
                <Intro>
                    {children}
                </Intro>
            <Footer />
        </main>
    );
}

export default MainLayout;
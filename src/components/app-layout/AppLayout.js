import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import style from './AppLayout.module.scss';
import AppRoutes from '../routes/AppRoutes';

export default function AppLayout() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <Header />
                <Navbar />
                <AppRoutes/>
            </div>
            <Footer />

        </div>

    )

}
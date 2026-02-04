import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import './DefaultLayout.css'


export default function DefaultLayout({ children }) {
    return (
        <>
            <div className="layout">
                <Navbar />
                <main className="content">
                    {children}
                </main>
                <Footer />
            </div>

        </>
    )

}
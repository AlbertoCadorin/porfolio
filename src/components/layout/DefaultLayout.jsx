import Navbar from '../common/Navbar'
import Footer from '../common/Footer'


export default function DefaultLayout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )

}
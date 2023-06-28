import Nav from "./nav"
import Footer from './Layout/Footer';
import ContactF from './Layout/ContactF';
import Navbar from './Layout/Navbar';

const Layout = ({ children, categories, seo }) => (
  <>
    <Navbar/>
    {/* <Nav categories={categories} /> */}
    {children}
    <ContactF/>
    <Footer/>
  </>
)

export default Layout

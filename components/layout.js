// include metadata in all pages of the site.
import Meta from './meta'
import Navbar from './navbar'

const Layout = (props) => {
    return (
        <div>
            <Meta />
            <Navbar />
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;
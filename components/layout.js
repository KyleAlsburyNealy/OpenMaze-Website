import Head from 'next/head';
import Navbar from './navbar'

const Layout = (props) => {
    return (
        <div>
            <Navbar/>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;
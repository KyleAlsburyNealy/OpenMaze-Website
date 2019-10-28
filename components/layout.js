import Head from 'next/head';
import Navbar from './navbar'

const Layout = (props) => {
    return (
        <div>
            <Head>
                <link href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" rel="stylesheet" type="text/css"></link>
            </Head>
            <Navbar />
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;
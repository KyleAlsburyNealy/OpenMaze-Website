import Link from 'next/link';

const burger = {
    cursor: 'pointer',
    background: '#fff'
    
}

const getStyle = (line) => {
    switch (line) {
        case 'line1':

    }
}


const Navbar = () => {
    return (
        <nav className="flex flex-wrap justify-between items-center bg-blue-600 items-center font-sans p-2">
            <div>
                <Link href="/"><a><h1 className="text-white text-s">OpenMaze</h1></a></Link>
            </div>
            {/* <div className="burger h-5 w-5" style={burger}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div> */}

            <div className="w-0.5 flex flex-wrap justify-between text-xs">
                <Link href="/"><a className="text-blue-200 hover:text-white">Home</a></Link>
                <Link href="/documentation"><a className="text-blue-200 hover:text-white px-2">Documentation</a></Link>
                <Link href="/tutorials"><a className="text-blue-200 hover:text-white px-2">Tutorials</a></Link>
                <Link href="/contact"><a className="text-blue-200 hover:text-white px-2">Contact</a></Link>
            </div>
        </nav>

    )
}

export default Navbar;

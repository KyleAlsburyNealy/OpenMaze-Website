// include metadata in all pages of the site.
import Meta from "./meta";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = props => {
  return (
    <div>
      <Meta />
      <Navbar />
      <div>{props.children}</div>
      <Footer docs={props.docs} />
    </div>
  );
};

export default Layout;
